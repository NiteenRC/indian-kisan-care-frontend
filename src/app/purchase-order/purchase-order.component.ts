import { MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Product } from '../_model/product';
import { Observable } from 'rxjs';
import { ProductService } from '../_services/product.service';
import { PurchaseOrder } from '../_model/purchaseOrder';
import { PurchaseOrderService } from '../_services/purchase-order.service';
import { Supplier } from '../_model/supplier';
import { SupplierService } from '../_services/supplier.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  purchaseOrderDetailData: any;
  displayedColumns: string[] = ['sno', 'action', 'item', 'price', 'quantity', 'amount', 'taxType', 'taxAmount', 'totalAmount'];
  filteredSuppliers: Observable<Supplier[]>;
  filteredProducts: Observable<Product[]>;

  suppliers: Supplier[];
  products: Product[];

  previousBalance = 0;
  totalAmount = 0;

  purchaserOrderForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private productService: ProductService,
    private supplierService: SupplierService,
    private purchaseOrderService: PurchaseOrderService) {

    this.suppliers = [];
    this.products = [];
  }

  ngOnInit() {
    this.fetchData();
    this._createForm();
    console.log('this.purchaserOrderForm', this.purchaserOrderForm);
  }

  removeProduct(index: number) {
    this.purchaseOrderDetailArr.removeAt(index);
    this.purchaseOrderDetailData = new MatTableDataSource(this.purchaseOrderDetailArr.controls);
  }

  selectedProduct(selectedProduct: string) {
    const product = this._findProduct(selectedProduct);
    this._addProduct(product);
  }

  selectedSupplier(selectedSupplier: string) {
    const supplier = this._findSupplier(selectedSupplier);
    this._supplierBalanceData(supplier?.id);
  }

  fetchData() {
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

  save() {
    this.fetchData();
    const supplierName = this.purchaserOrderForm.get('supplierName').value;
    let supplier = this._findSupplier(supplierName);

    if (supplier === undefined) {
      this.saveSupplier(supplierName);

      setTimeout(() => {
        supplier = this.supplierService.getSupplierByName(supplierName).subscribe(res => {
          if (res != null) {
            this.addPurchaseOrder(res);
          }
        }, error => {
          console.log(error.error.errorMessage);
        });
      }, 500);
    } else {
      this.addPurchaseOrder(supplier);
    }
  }

  addPurchaseOrder(supplier: Supplier) {
    const purchaseOrder: PurchaseOrder = new PurchaseOrder();
    purchaseOrder.supplier = supplier;
    purchaseOrder.currentBalance = this.getCurrentBalance();
    purchaseOrder.purchaseOrderDetail = this.purchaseOrderDetailArr.value;
    purchaseOrder.totalPrice = this.totalAmount;
    purchaseOrder.vehicleNo = this.purchaserOrderForm.get('motorVehicleNo').value;
    purchaseOrder.amountPaid = this.purchaserOrderForm.get('amountPaid').value;
    purchaseOrder.dueDate = this.purchaserOrderForm.get('dueDate').value;

    if (purchaseOrder.currentBalance <= 0) {
      purchaseOrder.status = 'PAID';
    } else if (purchaseOrder.amountPaid > 0) {
      purchaseOrder.status = 'PARTIAL';
    } else {
      purchaseOrder.status = 'DUE';
    }

    this.purchaseOrderService
      .createPurchaseOrder(purchaseOrder).subscribe(data => {
        console.log(data);
        this._printPdf(data);
        this.refreshAfterSave();
      },
        error => console.log(error));
  }

  saveSupplier(supplierName: string) {
    let data = {
      supplierName: supplierName,
      gstIn: 'NA',
      phoneNumber: 'NA'
    };
    this.supplierService.createSupplierPurchase(data).subscribe();
  }

  refreshAfterSave() {
    window.location.reload();
    // this.previousBalance = 0;
    // this.purchaseOrderDetailData = [];
    // this._createForm();
  }

  private _supplierBalanceData(supplierID: any) {
    this.purchaseOrderService.getPurchaseOrderBalaceBySupplier(supplierID).subscribe((data: number) => {
      this.previousBalance = data;
    }, (error: any) => console.log(error));
  }

  private _printPdf(response) {
    const url = `${location.origin}/#table`;
    const myWindow = window.open(url);
    myWindow['response'] = response;
  }

  private _filterSupplier(value: string): Supplier[] {
    if (!value) {
      this.previousBalance = 0.00;
      return this.suppliers;
    }
    const filterValue = value.toLowerCase();
    const supplierList = this.suppliers.filter(option => option.supplierName.toLowerCase().indexOf(filterValue) === 0)
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
    return this.products.filter(option => option.productName.toLowerCase().indexOf(filterValue) === 0);
  }

  private _findProduct(value: string): Product {
    return this.products.find(option => option.productName === value);
  }

  private _findSupplier(value: string): Supplier {
    return this.suppliers.find(option => option.supplierName === value);
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
    this.purchaseOrderDetailArr.push(newRow);
    this.purchaseOrderDetailData = new MatTableDataSource(this.purchaseOrderDetailArr.controls);
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
      productList.forEach(product => {
        const amount = Number(product.qtyOrdered) * Number(product.price);
        const taxAmount = amount * (product.product?.gst || 0) / 100;
        totalAmount += amount + taxAmount;
      });
      this.totalAmount = Math.round(totalAmount);
    });
  }

  private _createForm() {
    this.purchaserOrderForm = this._fb.group({
      supplierName: [''],
      productName: [''],
      motorVehicleNo: [''],
      dueDate: [new Date()],
      purchaseOrderDetail: this._fb.array([]),
      amountPaid: [0],
    });
  }

  get purchaseOrderDetailArr() {
    return this.purchaserOrderForm.get('purchaseOrderDetail') as FormArray;
  }

  get amountPaid() {
    return this.purchaserOrderForm.get('amountPaid') as FormControl;
  }
}
