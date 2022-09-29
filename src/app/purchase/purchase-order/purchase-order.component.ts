import { MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Product } from '../../_model/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../_services/product.service';
import { PurchaseOrder, UpdateProduct } from '../../_model/purchaseOrder';
import { PurchaseOrderService } from '../../_services/purchase-order.service';
import { Supplier } from '../../_model/supplier';
import { SupplierService } from '../../_services/supplier.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  purchaseOrderDetailData: any;
  displayedColumns: string[] = ['sno', 'action', 'item', 'price', 'quantity', 'totalAmount'];
  filteredSuppliers: Observable<Supplier[]>;
  filteredProducts: Observable<Product[]>;

  suppliers: Supplier[];
  products: Product[];

  previousBalance = 0;
  totalQty = 0;
  totalAmount = 0;

  purchaserOrderForm: FormGroup;
  singleClickDisable = false;

  minStartDate = new Date();
  purchaseOrder: PurchaseOrder = new PurchaseOrder();
  @ViewChild('searchProduct') searchProduct: ElementRef;
  popupTitle = "";
  popupsubtitle = "";
  popupDescription = "";
  @ViewChild('modalContent') modalContent: ElementRef;
  popupMarkup = "";
  updatedProductSalePriceList: UpdateProduct[] = [];
  hidePhoneNo : boolean;

  constructor(
    private _fb: FormBuilder,
    private productService: ProductService,
    private supplierService: SupplierService,
    private modalService: NgbModal,
    @Optional() public dialogRef: MatDialogRef<PurchaseOrderComponent>,
    private purchaseOrderService: PurchaseOrderService) {
    //@Inject(MAT_DIALOG_DATA) private data) {
    this.ngOnInit();
    this.suppliers = [];
    this.products = [];
  }

  ngOnInit() {
    this.singleClickDisable = false;
    this.fetchData();
    this._createForm();
    console.log('this.purchaserOrderForm', this.purchaserOrderForm);
  }

  removeProduct(index: number) {
    this.purchaseOrderDetailArr.removeAt(index);
    this.purchaseOrderDetailData = new MatTableDataSource(this.purchaseOrderDetailArr.controls);
  }

  selectedProduct(selectedProduct: string) {
    this.purchaserOrderForm.controls['productName'].setValue(null);
    const product = this._findProduct(selectedProduct);
    this._addProduct(product);
    this.searchProduct.nativeElement.blur()
  }

  selectedSupplier(selectedSupplier: string) {
    const supplier = this._findSupplier(selectedSupplier);
    this._supplierBalanceData(supplier?.id);
  }

  fetchData() {
    this.suppliers = [];
    this.supplierService.getSupplierList().subscribe(data => {
      this.suppliers = data;
    });

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

  showMsg: boolean = false;

  showAlert(popupTitle: string, popupDescription: string, popupsubtitle: string, popupMarkup: string = "") {
    this.popupTitle = popupTitle;
    this.popupsubtitle = popupsubtitle;
    this.popupDescription = popupDescription;
    this.popupMarkup = popupMarkup;

    this.modalService.open(this.modalContent, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
    }, (reason) => {
    });
  }

  save(isPrintReq: boolean, content: any) {
    this.singleClickDisable = true;
    let isValidPrice = false;
    if (this.purchaseOrderDetailArr.value.length === 0) {
      this.showAlert("Error", 'please select products, before submitting', "");
      this.singleClickDisable = false;
      return;
    }

    this.purchaseOrderDetailArr.value.forEach(element => {
      if (element.price <= 0) {
        isValidPrice = true;
      }
    });

    if (isValidPrice) {
      this.showAlert("Error", 'Product price should be more than 0', "");
      this.singleClickDisable = false;
      return;
    }

    const supplierName = this.purchaserOrderForm.get('supplierName').value;
    let supplier = this._findSupplier(supplierName);

    const purchaseOrder: PurchaseOrder = new PurchaseOrder();

    if (supplier === undefined) {
      supplier = this.saveSupplier(supplierName);
    }
    supplier.phoneNumber = this.purchaserOrderForm.get('motorVehicleNo').value;
    purchaseOrder.supplier = supplier;
    purchaseOrder.currentBalance = this.getCurrentBalance();
    purchaseOrder.purchaseOrderDetail = this.purchaseOrderDetailArr.value;
    purchaseOrder.totalPrice = this.totalAmount;
    //purchaseOrder.vehicleNo = this.purchaserOrderForm.get('motorVehicleNo').value;
    purchaseOrder.amountPaid = this.purchaserOrderForm.get('amountPaid').value;
    purchaseOrder.dueDate = this.purchaserOrderForm.get('dueDate').value?.getTime();
    purchaseOrder.billDate = this.purchaserOrderForm.get('billDate').value?.getTime();
    purchaseOrder.previousBalance = this.getTotalBalance();

    if (purchaseOrder.amountPaid < 0) {
      this.showAlert("Error", 'Amount paid should be positive', "");
      this.singleClickDisable = false;
      return;
    } else if (this.getTotalBalance() < 0) {
      this.showAlert("Error", 'Amount paid should be equals to balance', "");
      this.singleClickDisable = false;
      return;
    } else if (this.getTotalBalance() <= 0) {
      purchaseOrder.status = 'PAID';
    } else if (purchaseOrder.amountPaid > 0) {
      purchaseOrder.status = 'PARTIAL';
    } else {
      purchaseOrder.status = 'DUE';
    }

    if ((purchaseOrder.status === 'DUE' || purchaseOrder.status === 'PARTIAL') &&
      (supplier.supplierName === "" || supplier.phoneNumber === "")) {
      let alertMsg = "<p>Please provide below. <br>";
      let fields = [];
      if (supplier.supplierName === "") {
        fields.push(`<span class="text-danger">Supplier name</span>`);
      }
      if (supplier.phoneNumber === "") {
        fields.push(`<span class="text-danger">Phone number</span>`);
      }
      if (purchaseOrder.dueDate === undefined) {
        fields.push(`<span class="text-danger">Due date</span>`);
      }
      alertMsg = alertMsg + fields.join("<br>") + "</p>";
      this.showAlert("Error", "", "", alertMsg);
      this.singleClickDisable = false;
      return;
    }

    if (purchaseOrder.amountPaid == null) {
      purchaseOrder.amountPaid = 0.0;
    }

    this.purchaseOrder = purchaseOrder;

    this.purchaseOrderDetailArr.value.forEach(element => {
      const productItem = {
        purchasePrice: element.price,
        productName: element.product.productName,
        id: element.product.id,
      }
      this.updatedProductSalePriceList.push(productItem);
    });

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
      this.purchaseOrderService
        .createPurchaseOrder(purchaseOrder).subscribe(data => {
          console.log(data);
          this.closeModal();
          this.productService.updateProductList(this.updatedProductSalePriceList).subscribe();
          this.singleClickDisable = false;
          this.refreshAfterSave();
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

  saveSupplier(supplierName: string): any {
    let data = {
      supplierName: supplierName,
      gstIn: 'NA',
      phoneNumber: 'NA'
    };
    return data;;
  }

  closeModal(): void {
    if (this.dialogRef != null) {
      this.dialogRef.close();
    }
  }

  refreshAfterSave() {
    //this.route.navigate(['purchaseOrder'])
    //this.route.navigateByUrl('/dashboard');
    //window.location.reload();
    this.previousBalance = 0;
    this.totalAmount = 0;
    this.purchaseOrderDetailData = [];
    this._createForm();
    this.fetchData();
    this.totalQty = 0;
  }

  private _supplierBalanceData(supplierID: any) {
    this.purchaseOrderService.getPurchaseOrderBalaceBySupplier(supplierID).subscribe((data: any) => {
      this.previousBalance = data.balance;
      this.hidePhoneNo = data.supplier.phoneNumber === "" ? true : false;
      this.purchaserOrderForm.get('motorVehicleNo').setValue(data.supplier.phoneNumber);
    }, (error: any) => console.log(error));
  }

  private _printPdf(response) {
    //const url = `${location.origin}/praveen-traders/#table`;
    const url = `${location.origin}/#table`;
    const myWindow = window.open(url, "_blank", "width=800,height=600,left=250,right=150");
    myWindow['response'] = response;
  }

  private _filterSupplier(value: string): Supplier[] {
    if (!value) {
      this.previousBalance = 0.00;
      return this.suppliers;
    }
    const filterValue = value.toLowerCase();
    const supplierList = this.suppliers.filter(option => option.supplierName.toLowerCase().includes(filterValue))
    if (supplierList.length == 0) {
      this.previousBalance = 0.00;
    }
    return supplierList;
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

  private _findSupplier(value: string): Supplier {
    return this.suppliers.find(option => option.supplierName === value);
  }

  private _initRow(product) {
    return this._fb.group({
      price: [product.purchasePrice, [Validators.required, Validators.min(1), Validators.max(1000000)]],
      qtyOrdered: [1, [Validators.required, Validators.min(1), Validators.max(10000)]],
      product: [product]
    });
  }

  private _addProduct(product: Product) {
    let isProductAdded = true;
    this.purchaseOrderDetailArr.value.forEach(element => {
      if (product.productName === element.product.productName) {
        //alert('Product is already Added!!');
        this.showAlert("Error", "Product is already Added!!", "");
        isProductAdded = false;
      }
    });

    if (isProductAdded) {
      const newRow = this._initRow(product);
      this.purchaseOrderDetailArr.push(newRow);
      this.purchaseOrderDetailData = new MatTableDataSource(this.purchaseOrderDetailArr.controls);
    }
  }

  private _valueChangesListner() {
    this.filteredSuppliers = this.purchaserOrderForm.controls['supplierName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterSupplier(value))
    );

    this.filteredProducts = this.purchaserOrderForm.controls['productName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value))
    );

    this.purchaseOrderDetailArr.valueChanges.subscribe((productList) => {
      let totalAmount = 0;
      let totalQtyCal = 0;
      productList.forEach(product => {
        const amount = Number(product.qtyOrdered) * Number(product.price);
        //const taxAmount = amount * (product.product?.gst || 0) / 100;
        //totalAmount += amount + taxAmount;
        totalQtyCal += product.qtyOrdered;
        totalAmount += amount;
      });
      this.totalQty = totalQtyCal;
      this.totalAmount = Math.round(totalAmount);
    });
  }

  private _createForm() {
    this.purchaserOrderForm = this._fb.group({
      supplierName: [''],
      productName: [''],
      motorVehicleNo: [''],
      billDate: [new Date()],
      dueDate: [],
      purchaseOrderDetail: this._fb.array([]),
      amountPaid: [],
    });
  }

  get purchaseOrderDetailArr() {
    return this.purchaserOrderForm.get('purchaseOrderDetail') as FormArray;
  }

  get amountPaid() {
    return this.purchaserOrderForm.get('amountPaid') as FormControl;
  }
}
