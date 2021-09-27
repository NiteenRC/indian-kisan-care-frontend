import { PurchaseOrderService } from '../../_services/purchase-order.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesOrderComponent } from 'src/app/sales-order/sales-order.component';
import { ProductListComponent } from 'src/app/products/product-list/product-list.component';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report-details.component.html',
  styleUrls: ['./purchase-report-details.component.css']
})
export class PurchaseReportDetailsComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'price', 'qtyOrdered', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  constructor(public dialog: MatDialog, private purchaseOrderService: PurchaseOrderService,
    @Inject(MAT_DIALOG_DATA) private data) {
    if (data != null) {
      const a = data?.data.purchaseOrderDetail;
      this._setData(a);
    }
  }
  ngOnInit(): void { }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  deleteSalesOrder(event) {
    this.purchaseOrderService.deleteOrderDetails(event.purchaseOrderDetailID).subscribe(
      response => {
        this._setData(JSON.parse(response))
      },
      error => {
        console.log(error);
        alert('Could not able to delete purchase order since used in sales order');
      });
  }
}
