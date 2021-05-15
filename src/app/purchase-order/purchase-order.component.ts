import {Component, OnInit} from '@angular/core';
import {Product} from './../_model/product';
import {Observable} from 'rxjs';
import {ProductService} from '../_services/product.service';
import {PurchaseOrder} from '../_model/purchaseOrder';
import {PurchaseOrderService} from '../_services/purchase-order.service';
import {PurchaseOrderDetail} from '../_model/purchaseOrderDetail';
import {Supplier} from '../_model/supplier';
import {SupplierService} from '../_services/supplier.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html'
})
export class PurchaseOrderComponent implements OnInit {
  products: Observable<Product[]>;
  product: Product = new Product();
  purchaseOrder: PurchaseOrder = new PurchaseOrder();
  purchaseOrderDetail: PurchaseOrderDetail = new PurchaseOrderDetail();
  suppliers: Observable<Supplier[]>;

  rows: Array<PurchaseOrderDetail> = [];
  currentBalance = 0;
  previousBalance = 0;
  totalAmount = 0;
  totalBalance = 0;

  constructor(private productService: ProductService,
    private supplierService: SupplierService,
    private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductsList();
    this.suppliers = this.supplierService.getSupplierList();
    this.purchaseOrder.amountPaid = 0;
  }

  save() {
    this.purchaseOrder.currentBalance = this.currentBalance;
    this.purchaseOrder.purchaseOrderDetail = this.rows;
    this.purchaseOrder.totalPrice = this.totalAmount;

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

  refreshAfterSave() {
    this.purchaseOrder = new PurchaseOrder();
    this.product = new Product();
    this.purchaseOrder.amountPaid = 0;
    this.previousBalance = 0;
    this.currentBalance = 0;
    this.totalBalance = 0;
    this.rows = [];
  }

  getTotalPrice() {
    let total = 0;
    this.rows.forEach(obj => {
      total += Number(obj.price);
    });
    return total;
  }

  getTotalQty() {
    let total = 0;
    this.rows.forEach(obj => {
      total += Number(obj.qtyOrdered);
    });
    return total;
  }

  totalAmountToPaid() {
    let totalAmount = 0;
    this.rows.forEach(obj => {
      const amount = Number(obj.qtyOrdered) * Number(obj.price);
      const taxAmount = amount * obj.product.gst/100;
      totalAmount += amount + taxAmount;
    });
    this.totalAmount = Math.round(totalAmount);
    return this.totalAmount;
  }

  removeCart(index: number) {
    const amountBalance1 = this.totalAmount - (this.rows[index].price * this.rows[index].qtyOrdered);
    this.currentBalance = amountBalance1 - Number(this.purchaseOrder.amountPaid);
    this.totalBalance = this.previousBalance + this.currentBalance;
    this.rows.splice(index, 1);
    this.purchaseOrder.amountPaid = this.rows.length === 0 ? 0 : this.purchaseOrder.amountPaid;
  }

  selectedProduct(prod: Product) {
    this.rows.push({
      product: prod,
      qtyOrdered: 0,
      price: 0
    });
  }

  supplierBalanceData(supplierID: any) {
    this.purchaseOrderService.getPurchaseOrderBalaceBySupplier(supplierID).subscribe((data: number) => {
      console.log(data);
      this.previousBalance = data;
      this.changeInQtyOrPrice();
    }, (error: any) => console.log(error));
  }

  amountToBePaid(amountPaid: number) {
    this.currentBalance = this.totalAmount - amountPaid;
    this.totalBalance = this.previousBalance + this.currentBalance;
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
}
