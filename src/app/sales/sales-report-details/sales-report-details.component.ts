
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesOrderService } from 'src/app/_services/sales-order.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report-details.component.html',
  styleUrls: ['./sales-report-details.component.css']
})
export class SalesReportDetailsComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'price', 'qtyOrdered', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  constructor(public dialog: MatDialog, private purchaseOrderService: SalesOrderService,
    @Inject(MAT_DIALOG_DATA) private data) {
    if (data != null) {
      this._setData(data?.data.salesOrderDetail);
    }
  }
  ngOnInit(): void { }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  deleteSalesOrder(event) {
    this.purchaseOrderService.deleteOrderDetails(event.salesOrderDetailID).subscribe(
      response => {
        this._setData(JSON.parse(response))
      },
      error => {
        console.log(error);
        alert('Could not able to delete sales order since used in sales order');
      });
  }
}
