import { MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Product } from './../_model/product';
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
  displayedColumns: string[] = ['sno', 'action', 'item', 'price', 'quantity', 'amount', 'taxType', 'taxAmount', 'totalAmount'];
  filteredCustomers: Observable<Customer[]>;
  filteredProducts: Observable<Product[]>;

  customers: Customer[];
  products: Product[];

  previousBalance = 0;
  totalAmount = 0;

  salesOrderForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private productService: ProductService,
    private customerService: CustomerService,
    private salesOrderService: SalesOrderService) {

    this.customers = [];
    this.products = [];
  }

  ngOnInit() {
    this.fetchData();
    this._createForm();
    console.log('this.salesOrderForm', this.salesOrderForm);
  }

  removeProduct(index: number) {
    this.salesOrderDetailArr.removeAt(index);
    this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
  }

  selectedProduct(selectedProduct: string) {
    const product = this._findProduct(selectedProduct);
    this._addProduct(product);
  }

  selectedCustomer(selectedCustomer: string) {
    const customer = this._findCustomer(selectedCustomer);
    this._customerBalanceData(customer?.id);
  }

  fetchData() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
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

  save() {
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
      // console.log('this.salesOrderForm', this.salesOrderForm.value);
      const salesOrder: SalesOrder = new SalesOrder();
      const customerName = this.salesOrderForm.get('customerName').value;
      const customer = this._findCustomer(customerName);
      salesOrder.customer = customer;
      salesOrder.currentBalance = this.getCurrentBalance();
      salesOrder.salesOrderDetail = this.salesOrderDetailArr.value;
      salesOrder.totalPrice = this.totalAmount;
      salesOrder.vehicleNo = this.salesOrderForm.get('motorVehicleNo').value;
      salesOrder.amountPaid = this.salesOrderForm.get('amountPaid').value;
      salesOrder.dueDate = this.salesOrderForm.get('dueDate').value;

      if (salesOrder.currentBalance <= 0) {
        salesOrder.status = 'PAID';
      } else if (salesOrder.amountPaid > 0) {
        salesOrder.status = 'PARTIAL';
      } else {
        salesOrder.status = 'DUE';
      }

      this.salesOrderService
        .createSalesOrder(salesOrder).subscribe(data => {
          console.log(data);
          this._printPdf(data);
          this.refreshAfterSave();
        },
          error => console.log(error));
    }
  }

  refreshAfterSave() {
    window.location.reload();
    // this.previousBalance = 0;
    // this.salesOrderDetailData = [];
    // this._createForm();
  }

  private _customerBalanceData(customerID: any) {
    this.salesOrderService.getSalesOrderBalaceByCustomer(customerID).subscribe((data: number) => {
      this.previousBalance = data;
    }, (error: any) => console.log(error));
  }

  private _printPdf(response) {
    const url = `${location.origin}/#salesTable`;
    const myWindow = window.open(url);
    myWindow['response'] = response;
  }

  private _filterCustomer(value: string): Customer[] {
    if (!value) {
      return this.customers;
    }
    const filterValue = value.toLowerCase();
    const customerList = this.customers.filter(option => option.customerName.toLowerCase().indexOf(filterValue) === 0)
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
      price: [0, [Validators.required, Validators.min(1), Validators.max(100000)]],
      qtyOrdered: [0, [Validators.required, Validators.min(1), Validators.max(10000)]],
      product: [product]
    });
  }

  private _addProduct(product: Product) {
    const newRow = this._initRow(product);
    this.salesOrderDetailArr.push(newRow);
    this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
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
        const taxAmount = amount * (product.product?.gst || 0) / 100;
        totalAmount += amount + taxAmount;
      });
      this.totalAmount = Math.round(totalAmount);
    });
  }

  private _createForm() {
    this.salesOrderForm = this._fb.group({
      customerName: [''],
      productName: [''],
      motorVehicleNo: [''],
      dueDate: [new Date()],
      salesOrderDetail: this._fb.array([]),
      amountPaid: [0],
    });
  }

  get salesOrderDetailArr() {
    return this.salesOrderForm.get('salesOrderDetail') as FormArray;
  }

  get amountPaid() {
    return this.salesOrderForm.get('amountPaid') as FormControl;
  }
}
