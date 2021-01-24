import { SalesOrderService } from './../_services/sales-order.service';
import { PurchaseOrderService } from './../_services/purchase-order.service';
import { SupplierService } from './../_services/supplier.service';
import { Observable } from 'rxjs';
import { CustomerService } from './../_services/customer.service';
import { ProductService } from '../_services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsCount: number;
  customersCount: number;
  suppliersCount: number;
  purchaseOrdersCount: number;
  salesOrdersCount: number;
  totalCustomerBalance: number;
  totalSupplierBalance: number;

  constructor(private productService: ProductService, private customerService: CustomerService, private supplierService: SupplierService, private purchaseOrderService: PurchaseOrderService, private salesOrderService: SalesOrderService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.productService.getProductsList().subscribe(data => {
      console.log(data);
      this.productsCount = data.length;
    },
      error => console.log(error));

    this.customerService.getCustomerList().subscribe(data => {
      console.log(data);
      this.customersCount = data.length;
    },
      error => console.log(error));

    this.supplierService.getSupplierList().subscribe(data => {
      console.log(data);
      this.suppliersCount = data.length;
    },
      error => console.log(error));

    this.purchaseOrderService.getPurchaseOrderList().subscribe(data => {
      console.log(data);
      this.purchaseOrdersCount = data.length;
    },
      error => console.log(error));

    this.salesOrderService.getSalesOrderList().subscribe(data => {
      console.log(data);
      this.salesOrdersCount = data.length;
    },
      error => console.log(error));

    this.salesOrderService.getAllCustomerSalesOrderBalance().subscribe(data => {
      console.log(data);
      this.totalCustomerBalance = data;
    },
      error => console.log(error));

    this.purchaseOrderService.getAllSupplierPurchaseOrderBalace().subscribe(data => {
        console.log(data);
        this.totalSupplierBalance = data;
      },
        error => console.log(error));
  }
}
