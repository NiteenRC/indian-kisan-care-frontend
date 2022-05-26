import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesReportDetailsComponent } from '../sales-report-details/sales-report-details.component';
import { SalesOrderService } from 'src/app/_services/sales-order.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report-details.component.html',
  styleUrls: ['./customer-report-details.component.css']
})
export class CustomerReportDetailsComponent implements OnInit {
  displayedColumns: string[] = ['billDate', 'totalQty', 'totalPrice', 'amountPaid'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  constructor(public dialog: MatDialog, private salesOrderService: SalesOrderService,
    @Inject(MAT_DIALOG_DATA) private data) {
    if (data != null) {
      this.salesOrderService.getSalesOrderByCustomer(data.data).subscribe(data => {
        this._setData(data);
    }, error => console.log(error));
    }
  }
  ngOnInit(): void { }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  deleteSalesOrder(event) {
    this.salesOrderService.deleteOrderDetails(event.salesOrderDetailID).subscribe(
      response => {
        this._setData(JSON.parse(response))
      },
      error => {
        console.log(error);
        alert('Could not able to delete sales order since used in sales order');
      });
  }

  fetchOrderDetails(updateProduct): void {
    const dialogRef = this.dialog.open(SalesReportDetailsComponent, {
      width: '950px',
      disableClose: false,
      data: { data: updateProduct }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
