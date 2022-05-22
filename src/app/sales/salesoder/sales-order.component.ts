import { MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Product } from '../../_model/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../_services/product.service';
import { SalesOrder, UpdateProduct } from '../../_model/sales-order';
import { SalesOrderService } from '../../_services/sales-order.service';
import { Customer } from '../../_model/customer';
import { CustomerService } from '../../_services/customer.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PurchaseOrderComponent } from 'src/app/purchase/purchase-order/purchase-order.component';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
  salesOrderDetailData: any;
  displayedColumns: string[] = ['sno', 'action', 'item', 'price', 'quantity', 'totalAmount'];
  filteredCustomers: Observable<Customer[]>;
  filteredProducts: Observable<Product[]>;

  customers: Customer[];
  products: Product[];

  previousBalance = 0;
  totalQty = 0;
  totalAmount = 0;

  salesOrderForm: FormGroup;
  singleClickDisable = false;
  motorVehicleNo: any;
  selected_deliver_status = 'DELIVERED';
  selected_payment_mode = 'CASH';
  @ViewChild('searchProduct') searchProduct: ElementRef;
  minStartDate = new Date();
  popupTitle = "";
  popupsubtitle = "";
  popupDescription = "";
  @ViewChild('modalContent') modalContent: ElementRef;
  popupMarkup = "";
  salesOrder: SalesOrder = new SalesOrder();

  changeText: boolean;
  updatedProductSalePriceList: UpdateProduct[] = [];
  priceChangeHistory: any = {};

  constructor(
    private _fb: FormBuilder,
    private productService: ProductService,
    private modalService: NgbModal,
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService,
    @Optional() public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) private data) {
    this.ngOnInit();
    //this._createForm();
    if (data != null) {
      this._setData(data?.data.salesOrderDetail);
    }

    this.changeText = false;
    this.customers = [];
    this.products = [];
  }

  private _setData(data) {
    data.map(e => {
      this._addProduct(e.product);
    });
  }

  ngOnInit() {
    this.singleClickDisable = false;
    this.fetchData();
    this._createForm();
    console.log('this.salesOrderForm', this.salesOrderForm);
  }

  removeProduct(index: number) {
    const temp = this.salesOrderDetailArr.value[index];
    const tempIndex = this.updatedProductSalePriceList.findIndex(item => item.id === temp.product.id);
    if (tempIndex !== -1) {
      this.updatedProductSalePriceList.splice(tempIndex, 1);
    }

    this.priceChangeHistory[temp.product.id] = undefined;

    this.salesOrderDetailArr.removeAt(index);
    this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
    this.calculateAllAmounts(this.salesOrderDetailArr.value);
  }

  selectedProduct(selectedProduct: string) {
    this.salesOrderForm.controls['productName'].setValue(null);
    this.searchProduct.nativeElement.blur();

    const product = this._findProduct(selectedProduct);
    if (product.qty <= 0) {
      // alert('Stock is not avaiable');
      this.showAlert("Error", "Stock is not avaiable", "");
      // this.salesOrderForm = this._fb.group({
      //productName: ['']
      //});
      return;
    }
    this._addProduct(product);
    this.calculateAllAmounts(this.salesOrderDetailArr.value)
  }

  selectedCustomer(selectedCustomer: string) {
    const customer = this._findCustomer(selectedCustomer);
    this._customerBalanceData(customer?.id);
  }

  fetchData() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    });
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
      this._valueChangesListner();
    });
  }

  getCurrentBalance() {
    return this.totalAmount - this.amountPaid.value;
  }

  getTotalBalance() {
    return this.previousBalance + this.getCurrentBalance();
  }

  showAlert(popupTitle: string, popupDescription: string, popupsubtitle: string, popupMarkup: string = "", callback: any = () => { }) {
    this.popupTitle = popupTitle;
    this.popupsubtitle = popupsubtitle;
    this.popupDescription = popupDescription;
    this.popupMarkup = popupMarkup;

    this.modalService.open(this.modalContent, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
      callback("ok");
    }, (reason) => {
      callback("cancel");
    });
  }

  showAlertNoStock(popupTitle: string, popupDescription: string, popupsubtitle: string, popupMarkup: string = "", callback: any = () => { }) {
    this.popupTitle = popupTitle;
    this.popupsubtitle = popupsubtitle;
    this.popupDescription = popupDescription;
    this.popupMarkup = popupMarkup;

    this.modalService.open(this.modalContent, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
      callback("ok");
      this.addStockPurchaseOrder();
    }, (reason) => {
      callback("cancel");
    });
  }

  showMsg: boolean = false;

  save(isPrintReq: boolean, content: any) {
    this.singleClickDisable = true;
    let isValidPrice = false;
    if (this.salesOrderDetailArr.value.length === 0) {
      // alert('please select products, before submitting');
      this.showAlert("Error", "please select products, before submitting", "");
      this.singleClickDisable = false;
      return;
    }

    this.salesOrderDetailArr.value.forEach(element => {
      if (element.price <= 0) {
        isValidPrice = true;
      }
    });

    if (isValidPrice) {
      this.showAlert("Error", 'Product price should be more than 0', "");
      this.singleClickDisable = false;
      return;
    }

    this.salesOrderDetailArr.value.map(x => {
      this.products.forEach(prod => {
        if (x.product.productName === prod.productName) {
          x.product.qty = prod.qty;
          return x;
        }
      })
    })
    //this.salesOrderDetailArr.value.map(x => { x.product.qty=3; return x;})
    let isStockAvail = true;
    this.salesOrderDetailArr.value.forEach(value => {
      if (value.product.qty < value.qtyOrdered) {
        if (value.product.qty > 0) {
          this.showAlertNoStock("Warning", 'Available stock for product: ' + value.product.productName + ' is ' + value.product.qty, "");
        } else {
          this.showAlertNoStock("Warning", 'No Stock for product: ' + value.product.productName, "");
        }
        isStockAvail = false;
      }

      if (value.qtyOrdered === 0) {
        // alert('Please add Quantity to : ' + value.product.productName);
        this.showAlert("Error", "Please add Quantity to : " + value.product.productName, "");
        isStockAvail = false;
      }
    });

    if (isStockAvail) {
      const customerName = this.salesOrderForm.get('customerName').value;
      let customer = this._findCustomer(customerName);

      if (customer === undefined) {
        customer = this.getCustomerObj(customerName);
      }
      customer.phoneNumber = this.salesOrderForm.get('motorVehicleNo').value;
      const salesOrder: SalesOrder = new SalesOrder();
      salesOrder.customer = customer;
      salesOrder.currentBalance = this.getCurrentBalance();
      salesOrder.salesOrderDetail = this.salesOrderDetailArr.value;
      salesOrder.totalPrice = this.totalAmount;
      //salesOrder.vehicleNo = this.salesOrderForm.get('motorVehicleNo').value;
      salesOrder.amountPaid = this.salesOrderForm.get('amountPaid').value;
      salesOrder.dueDate = this.salesOrderForm.get('dueDate').value?.getTime();
      salesOrder.billDate = this.salesOrderForm.get('billDate').value?.getTime();
      salesOrder.previousBalance = this.getTotalBalance();
      salesOrder.deliverStatus = this.selected_deliver_status;
      salesOrder.paymentMode = this.selected_payment_mode;
      salesOrder.currentDue = this.previousBalance;
      salesOrder.upiPayment = this.salesOrderForm.get('upiPayment').value;
      salesOrder.cashPayment = this.salesOrderForm.get('cashPayment').value;

      if (salesOrder.amountPaid < 0) {
        // alert('Amount paid should be positive');
        this.showAlert("Error", "Amount paid should be positive", "");
        this.singleClickDisable = false;
        return;
      } else if (this.getTotalBalance() < 0) {
        // alert('Amount paid should be equals to balance');
        this.showAlert("Error", "Amount paid should be equals to balance", "");
        this.singleClickDisable = false;
        return;
      } else if (this.getTotalBalance() <= 0) {
        salesOrder.status = 'PAID';
      } else if (salesOrder.amountPaid > 0) {
        salesOrder.status = 'PARTIAL';
      } else {
        salesOrder.status = 'DUE';
      }

      if ((salesOrder.status === 'DUE' || salesOrder.status === 'PARTIAL') &&
        (customer.customerName === "" || customer.phoneNumber === null || customer.phoneNumber === "" || salesOrder.dueDate === undefined)) {
        // alert("Please don't sell products to unknowns.\nplease add Customer name, Phone number and Due date to proceed.")

        let alertMsg = "<p>Please provide below details.<br>";
        let fields = [];
        if (customer.customerName === "") {
          fields.push(`<span class="text-danger">Customer name</span>`);
        }
        if (customer.phoneNumber === "") {
          fields.push(`<span class="text-danger">Phone number</span>`);
        }
        if (salesOrder.dueDate === undefined) {
          fields.push(`<span class="text-danger">Due date</span>`);
        }
        alertMsg = alertMsg + fields.join("<br>") + "</p>";
        this.showAlert("Error", "", "", alertMsg);

        this.singleClickDisable = false;
        return;
      }

      if (salesOrder.amountPaid == null) {
        salesOrder.amountPaid = 0.0;
      }

      this.salesOrder = salesOrder;
      this.salesOrder.updatedProductSalePriceList = this.updatedProductSalePriceList;

      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
        this.salesOrderService
          .createSalesOrder(salesOrder).subscribe(data => {
            this.productService.updateProductList(this.updatedProductSalePriceList).subscribe();
            console.log(data);
            //this._printPdf(data);
            this.refreshAfterSave();
            this.singleClickDisable = false;
            if (isPrintReq) {
              this._printPdf(data);
              //window.location.reload();
            } else {
              this.showMsg = true;
              setTimeout(() => {
                this.showMsg = false;
              }, 2000);
            }
          },
            error => {
              console.log(error);
              this.singleClickDisable = false;
            });
      }, (reason) => {
        this.singleClickDisable = false;
      });
    }
    this.singleClickDisable = false;
  }

  getCustomerObj(customerName: string): any {
    let data = {
      customerName: customerName,
      gstIn: 'NA',
      phoneNumber: 'NA'
    };
    return data;
  }

  refreshAfterSave() {
    //window.location.reload();
    this.previousBalance = 0;
    this.totalAmount = 0;
    this.salesOrderDetailData = [];
    this.updatedProductSalePriceList = [];
    this.priceChangeHistory = {};
    this._createForm();
    this.fetchData();
    this.totalQty = 0;
  }

  private _customerBalanceData(customerID: any) {
    this.salesOrderService.getSalesOrderBalaceByCustomer(customerID).subscribe((data: any) => {
      this.previousBalance = data.balance;
      this.salesOrderForm.get('motorVehicleNo').setValue(data.customer.phoneNumber);
    }, (error: any) => console.log(error));
  }

  private _printPdf(response) {
    //const url = `${location.origin}/praveen-traders/#salesTable`;
    const url = `${location.origin}/#salesTable`;
    console.log('this.response1', JSON.stringify((window['response'])));
    console.log("url ", url);
    const myWindow = window.open(url, "_blank", "width=800,height=600,left=250,right=150");
    console.log("response", response);
    myWindow['response'] = response;
    console.log('this.response2', JSON.stringify((window['response'])));
  }

  private _filterCustomer(value: string): Customer[] {
    if (!value) {
      this.previousBalance = 0.00;
      return this.customers;
    }
    const filterValue = value.toLowerCase();
    const customerList = this.customers.filter(option => option.customerName.toLowerCase().includes(filterValue))
    if (customerList.length == 0) {
      this.previousBalance = 0.00;
    }
    return customerList;
  }

  private _filterProduct(value: string): Product[] {
    if (!value) {
      return this.products;
    }
    const filterValue = value.toLowerCase();
    return this.products.filter(option => option.productName.toLowerCase().includes(filterValue));
  }

  private _findProduct(value: string): Product {
    return this.products.find(option => option.productName === value);
  }

  private _findCustomer(value: string): Customer {
    return this.customers.find(option => option.customerName === value);
  }

  private _initRow(product) {
    return this._fb.group({
      price: [product.currentPrice, [Validators.required, Validators.min(1), Validators.max(100000)]],
      qtyOrdered: [1, [Validators.required, Validators.min(1), Validators.max(10000)]],
      product: [product]
    });
  }


  private _addProduct(product: Product) {
    let isProductAdded = true;
    this.salesOrderDetailArr.value.forEach(element => {
      if (product.productName === element.product.productName) {
        // alert('Product is already Added!!');
        this.showAlert("Error", "Product is already Added!!", "");

        isProductAdded = false;
      }
    });

    if (isProductAdded) {
      const newRow = this._initRow(product);
      this.salesOrderDetailArr.push(newRow);
      this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
    }
  }

  onChangePrice(event: any, product: any): void {
    console.log(event);
    console.log(product.value.product.productName);
    const productId = product.value.product.id;
    const updatedPrice = event.target.value;
    //const previousPrice = this.updatedProductSalePriceList.find((item: any) => item.productId == product.value.product.id)?.price;
    const previousPrice = this.priceChangeHistory[productId];

    if ((previousPrice != updatedPrice) && (updatedPrice != product.value.product.currentPrice)) {
      this.showAlert("Confirm", "Are you sure you want to update the price?", "", "", (data) => {
        console.log(data);
        const productList = this.salesOrderDetailArr.value;
        this.calculateAllAmounts(productList)

        if (data === "ok") {
          const productItem = {
            price: updatedPrice,
            productName: product.value.product.productName,
            id: product.value.product.id,
          }

          const existingProduct = this.updatedProductSalePriceList.find((item: any) => item.id == productItem.id);
          if (existingProduct) {
            existingProduct.price = updatedPrice;
          } else {
            this.updatedProductSalePriceList.push(productItem);
          }
        } else {
          //cancel
        }

        console.log("new prices", this.updatedProductSalePriceList);
      });
    } else if (updatedPrice == product.value.product.currentPrice) {
      const tempIndex = this.updatedProductSalePriceList.findIndex(item => item.id === product.value.product.id);
      if (tempIndex !== -1) {
        this.updatedProductSalePriceList.splice(tempIndex, 1);
      }
    }

    this.priceChangeHistory[productId] = updatedPrice;
  }

  onChangeQuantity(event: any, product: any): void {
    console.log(this.salesOrderDetailArr);
    console.log(event);
    console.log(product.value.product.productName);
    const productList = this.salesOrderDetailArr.value;
    this.calculateAllAmounts(productList)
  }

  calculateAllAmounts(productList: any[]): void {
    let totalAmount = 0;
    let totalQtyCal = 0;
    productList.forEach(product => {
      const amount = Number(product.qtyOrdered) * Number(product.price);
      //const taxAmount = amount * (product.product?.gst || 0) / 100;
      totalQtyCal += product.qtyOrdered;
      totalAmount += amount;
    });
    this.totalQty = totalQtyCal;
    this.totalAmount = Math.round(totalAmount);
  }

  private _valueChangesListner() {
    this.filteredCustomers = this.salesOrderForm.controls['customerName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterCustomer(value))
    );

    this.filteredProducts = this.salesOrderForm.controls['productName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value))
    );

    this.salesOrderDetailArr.valueChanges.subscribe((productList) => {
      return;
      let totalAmount = 0;
      let totalQtyCal = 0;
      productList.forEach(product => {
        const amount = Number(product.qtyOrdered) * Number(product.price);
        //const taxAmount = amount * (product.product?.gst || 0) / 100;
        totalQtyCal += product.qtyOrdered;
        totalAmount += amount;
      });
      this.totalQty = totalQtyCal;
      this.totalAmount = Math.round(totalAmount);
    });
  }

  private _createForm() {
    this.salesOrderForm = this._fb.group({
      customerName: [''],
      productName: [''],
      motorVehicleNo: [''],
      dueDate: [],
      billDate: [new Date()],
      salesOrderDetail: this._fb.array([]),
      amountPaid: [],
      upiPayment: [],
      cashPayment: [],
    });
  }

  get salesOrderDetailArr() {
    return this.salesOrderForm.get('salesOrderDetail') as FormArray;
  }

  get amountPaid() {
    return this.salesOrderForm.get('amountPaid') as FormControl;
  }

  addStockPurchaseOrder(): void {
    const dialogRef = this.dialog.open(PurchaseOrderComponent, {
      width: '950px',
      disableClose: false,
      //data: { data: updateProduct }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchAllProducts();
    });
  }

  somethingChanged(selected : string): void {
    this.selected_payment_mode = selected;
  }
}
