import { MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Product } from '../_model/product';
import { Observable } from 'rxjs';
import { ProductService } from '../_services/product.service';
import { SalesOrder } from '../_model/sales-order';
import { SalesOrderService } from '../_services/sales-order.service';
import { Customer } from '../_model/customer';
import { CustomerService } from '../_services/customer.service';

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
  totalAmount = 0;

  salesOrderForm: FormGroup;
  singleClickDisable = false;

  constructor(
    private _fb: FormBuilder,
    private productService: ProductService,
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService) {

    this.customers = [];
    this.products = [];
  }

  ngOnInit() {
    this.singleClickDisable = false;
    this.fetchData();
    this._createForm();
    console.log('this.salesOrderForm', this.salesOrderForm);
  }

  removeProduct(index: number) {
    if (this.salesOrderDetailArr.length > 1 || index > 0) {
      this.salesOrderDetailArr.removeAt(index);
      this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
    }
  }

  selectedProduct(selectedProduct: string) {
    this.salesOrderForm.controls['productName'].setValue(null);
    const product = this._findProduct(selectedProduct);
    if (product.qty <= 0) {
      alert('Stock is not avaiable');
      // this.salesOrderForm = this._fb.group({
      //productName: ['']
      //});
      return;
    }
    this._addProduct(product);
  }

  selectedCustomer(selectedCustomer: string) {
    const customer = this._findCustomer(selectedCustomer);
    this._customerBalanceData(customer?.id);
  }

  fetchData() {
    this.customerService.getCustomerList().subscribe(data => {
      data.forEach(x => {
        if (x.customerName != '' && !x.customerName.startsWith('UNKNOWN')) {
          this.customers.push(x);
        }
      });
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

  save(isPrintReq: boolean) {
    this.singleClickDisable = true;
    if (this.salesOrderDetailArr.value.length === 0) {
      alert('please select products, before submitting');
      this.singleClickDisable = false;
      return;
    }

    let isStockAvail = true;
    this.salesOrderDetailArr.value.forEach(value => {
      if (value.product.qty < value.qtyOrdered) {
        alert('No Stock for product: ' + value.product.productName);
        isStockAvail = false;
      }

      if (value.qtyOrdered === 0) {
        alert('Please add Quantity to : ' + value.product.productName);
        isStockAvail = false;
      }
    });

    if (isStockAvail) {
      const customerName = this.salesOrderForm.get('customerName').value;
      let customer = this._findCustomer(customerName);

      if (customer === undefined) {
        customer = this.getCustomerObj(customerName);
      }
      const salesOrder: SalesOrder = new SalesOrder();
      salesOrder.customer = customer;
      salesOrder.currentBalance = this.getCurrentBalance();
      salesOrder.salesOrderDetail = this.salesOrderDetailArr.value;
      salesOrder.totalPrice = this.totalAmount;
      salesOrder.vehicleNo = this.salesOrderForm.get('motorVehicleNo').value;
      salesOrder.amountPaid = this.salesOrderForm.get('amountPaid').value;
      salesOrder.dueDate = this.salesOrderForm.get('dueDate').value?.getTime();
      salesOrder.billDate = this.salesOrderForm.get('billDate').value?.getTime();

      if (salesOrder.amountPaid < 0) {
        alert('Amount paid should be positive');
        this.singleClickDisable = false;
        return;
      } else if (this.getTotalBalance() < 0) {
        alert('Amount paid should be equals to balance');
        this.singleClickDisable = false;
        return;
      } else if (this.getTotalBalance() <= 0) {
        salesOrder.status = 'PAID';
      } else if (salesOrder.amountPaid > 0) {
        salesOrder.status = 'PARTIAL';
      } else {
        salesOrder.status = 'DUE';
      }

      if (confirm("Are you sure to save?")) {
        this.salesOrderService
          .createSalesOrder(salesOrder).subscribe(data => {
            console.log(data);
            //this._printPdf(data);
            //this.refreshAfterSave();
            this.singleClickDisable = false;
            if (isPrintReq) {
              this._printPdf(data);
            } else {
              alert('Sales Order Successfully created!!');
            }
          },
            error => {
              console.log(error);
              this.singleClickDisable = false;
            });
      } else {
        this.singleClickDisable = false;
      }
    }
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
    this._createForm();
    this.fetchData();
  }

  private _customerBalanceData(customerID: any) {
    this.salesOrderService.getSalesOrderBalaceByCustomer(customerID).subscribe((data: number) => {
      this.previousBalance = data;
    }, (error: any) => console.log(error));
  }

  private _printPdf(response) {
    //const url = `${location.origin}/praveen-traders/#salesTable`;
    const url = `${location.origin}/#salesTable`;
    const myWindow = window.open(url);
    myWindow['response'] = response;
  }

  private _filterCustomer(value: string): Customer[] {
    if (!value) {
      this.previousBalance = 0.00;
      return this.customers;
    }
    const filterValue = value.toLowerCase();
    const customerList = this.customers.filter(option => option.customerName.toLowerCase().indexOf(filterValue) === 0)
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
    return this.products.filter(option => option.productName.toLowerCase().indexOf(filterValue) === 0);
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
        alert('Product is already Added!!');
        isProductAdded = false;
      }
    });

    if (isProductAdded) {
      const newRow = this._initRow(product);
      this.salesOrderDetailArr.push(newRow);
      this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
    }
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
      let totalAmount = 0;
      productList.forEach(product => {
        const amount = Number(product.qtyOrdered) * Number(product.price);
        //const taxAmount = amount * (product.product?.gst || 0) / 100;
        totalAmount += amount;
      });
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
    });
  }

  get salesOrderDetailArr() {
    return this.salesOrderForm.get('salesOrderDetail') as FormArray;
  }

  get amountPaid() {
    return this.salesOrderForm.get('amountPaid') as FormControl;
  }
}
