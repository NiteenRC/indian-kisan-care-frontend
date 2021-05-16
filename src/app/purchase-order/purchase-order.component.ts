import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Product } from './../_model/product';
import { Observable, of } from 'rxjs';
import { ProductService } from '../_services/product.service';
import { PurchaseOrder } from '../_model/purchaseOrder';
import { PurchaseOrderService } from '../_services/purchase-order.service';
import { PurchaseOrderDetail } from '../_model/purchaseOrderDetail';
import { Supplier } from '../_model/supplier';
import { SupplierService } from '../_services/supplier.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'action', 'item', 'price', 'quantity', 'amount', 'taxType', 'taxAmount', 'totalAmount'];

  product: Product = new Product();
  purchaseOrder: PurchaseOrder = new PurchaseOrder();
  purchaseOrderDetail: PurchaseOrderDetail = new PurchaseOrderDetail();
  purchaseForm: FormGroup;
  supplierControl: FormControl;
  productControl = new FormControl();
  vehicleNoControl = new FormControl();

  filteredSuppliers: Observable<Supplier[]>;
  filteredProducts: Observable<Product[]>;

  suppliers: Supplier[];
  products: Product[];

  rows: Array<PurchaseOrderDetail> = [];
  currentBalance = 0;
  previousBalance = 0;
  totalAmount = 0;
  totalBalance = 0;

  constructor(private productService: ProductService,
    private supplierService: SupplierService,
    private purchaseOrderService: PurchaseOrderService) {

    this.supplierControl = new FormControl(null, [Validators.required]);
    this.productControl = new FormControl();
    this.vehicleNoControl = new FormControl();

    this.suppliers = [];
    this.products = [];
  }

  ngOnInit() {
    this.fetchData();

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSupplier(value))
    );

    this.filteredProducts = this.productControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value))
    );
  }

  fetchData() {
    this.supplierService.getSupplierList().subscribe(data => {
      this.suppliers = data;
    });

    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    });
    this.purchaseOrder.amountPaid = 0;
  }

  save() {
    let isStockAvail = true;
    this.rows.forEach(value => {
      if (value.qtyOrdered === 0) {
        alert('Please add Quantity to : ' + value.product.productName);
        isStockAvail = false;
      }
    });

    if (isStockAvail) {
      this.purchaseOrder.currentBalance = this.currentBalance;
      this.purchaseOrder.purchaseOrderDetail = this.rows;
      this.purchaseOrder.totalPrice = this.totalAmount;
      this.purchaseOrder.vehicleNo = this.vehicleNoControl.value;

      if (this.currentBalance <= 0) {
        this.purchaseOrder.status = 'PAID';
      } else if (this.purchaseOrder.amountPaid > 0) {
        this.purchaseOrder.status = 'PARTIAL';
      } else {
        this.purchaseOrder.status = 'DUE';
      }

      this.purchaseOrderService
        .createPurchaseOrder(this.purchaseOrder).subscribe(data => {
          console.log(data);
          this.printPdf(data);
          this.refreshAfterSave();
        },
          error => console.log(error));
    }
  }

  refreshAfterSave() {
    this.purchaseOrder = new PurchaseOrder();
    this.product = new Product();
    this.purchaseOrder.amountPaid = 0;
    this.previousBalance = 0;
    this.currentBalance = 0;
    this.totalBalance = 0;
    this.rows = [];
  }

  getTotalAmount() {
    let totalAmount = 0;
    this.rows.forEach(obj => {
      const amount = Number(obj.qtyOrdered) * Number(obj.price);
      const taxAmount = amount * obj.product.gst / 100;
      totalAmount += amount + taxAmount;
    });
    this.totalAmount = Math.round(totalAmount);
    return this.totalAmount;
  }

  getCurrentBalance() {
    return this.totalAmount - this.purchaseOrder.amountPaid;
  }

  getTotalBalance() {
    return this.previousBalance + this.getCurrentBalance();
  }

  removeCart(index: number) {
    const rows = [...this.rows];
    rows.splice(index, 1);
    this.rows = rows;
  }

  selectedProduct(selectedProduct: string) {
    const product = this._findProduct(selectedProduct);
    const newProduct = {
      product,
      qtyOrdered: 0,
      price: 0
    };
    this.rows = [...this.rows, newProduct];
  }

  supplierBalanceData(supplierID: any) {
    this.purchaseOrderService.getPurchaseOrderBalaceBySupplier(supplierID).subscribe((data: number) => {
      console.log(data);
      this.previousBalance = data;
      this.changeInQtyOrPrice();
    }, (error: any) => console.log(error));
  }

  changeInQtyOrPrice() {
    this.currentBalance = this.totalAmount - this.purchaseOrder.amountPaid;
    this.totalBalance = this.previousBalance + this.currentBalance;
  }

  printPdf(response) {
    const url = `${location.origin}/#table`;
    const myWindow = window.open(url);
    myWindow['response'] = response;
  }

  private _filterSupplier(value: string): Supplier[] {
    if (!value) {
      return this.suppliers;
    }
    const filterValue = value.toLowerCase();
    return this.suppliers.filter(option => option.supplierName.toLowerCase().indexOf(filterValue) === 0);
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
}
