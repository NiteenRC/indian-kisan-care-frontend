import { PurchaseOrderService } from '../../_services/purchase-order.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesReportDetailsComponent } from 'src/app/sales/sales-report-details/sales-report-details.component';
import { PurchaseReportDetailsComponent } from '../purchase-report-details/purchase-report-details.component';

@Component({
  selector: 'app-supplier-report',
  templateUrl: './supplier-report-details.component.html',
  styleUrls: ['./supplier-report-details.component.css']
})
export class SupplierReportDetailsComponent implements OnInit {
  displayedColumns: string[] = ['billDate', 'totalQty', 'totalPrice', 'amountPaid'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  constructor(public dialog: MatDialog, private purchaseOrderService: PurchaseOrderService,
    @Inject(MAT_DIALOG_DATA) private data) {
    if (data != null) {
      this.purchaseOrderService.getPurchaseOrderBySupplier(data.data).subscribe(data => {
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
    this.purchaseOrderService.deleteOrderDetails(event.purchaseOrderDetailID).subscribe(
      response => {
        this._setData(JSON.parse(response))
      },
      error => {
        console.log(error);
        alert('Could not able to delete purchase order since used in sales order');
      });
  }

  fetchOrderDetails(updateProduct): void {
    const dialogRef = this.dialog.open(PurchaseReportDetailsComponent, {
      width: '950px',
      disableClose: false,
      data: { data: updateProduct }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
