import { PurchaseOrderService } from '../_services/purchase-order.service';
import { Observable } from 'rxjs';
import { SalesOrderService } from '../_services/sales-order.service';
import { Component, OnInit } from '@angular/core';
import { CustomerBalanceSheet } from '../_model/customer-balance-sheet';
import { Customer } from '../_model/customer';
import { SupplierBalanceSheet } from '../_model/supplier-balance-sheet';
import { Supplier } from '../_model/supplier';
import { Location } from '../_model/location';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {
  customerBalanceSheets: Observable<CustomerBalanceSheet>;
  customerBalanceSheet = new CustomerBalanceSheet();
  customer = new Customer();
  location = new Location();

  supplierBalanceSheets: Observable<SupplierBalanceSheet>;
  SupplierBalanceSheet = new SupplierBalanceSheet();
  supplier = new Supplier();

  constructor(private salesOrderService: SalesOrderService, private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerBalanceSheets = this.salesOrderService.getAllCustomerSalesOrderBalanceSheet();
    this.supplierBalanceSheets = this.purchaseOrderService.getAllSupplierPurchaseOrderBalanceSheet();
  }

}
