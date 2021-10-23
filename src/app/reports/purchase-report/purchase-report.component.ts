import { PurchaseOrderService } from './../../_services/purchase-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseReportDetailsComponent } from '../purchase-report-details/purchase-report-details.component';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.css']
})
export class PurchaseReportComponent implements OnInit {
  displayedColumns: string[] = ['billDate', 'dueDate', 'supplierName', 'totalPrice', 'amountPaid', 'dueAmount'];
  productColumns: string[] = ['id', 'productName', 'purchasePrice', 'qtyOrdered'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  searchText: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  purchaseReports;

  constructor(public dialog: MatDialog, private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getPurchaseOrderList();
    this.range.valueChanges.subscribe(dateRange => {
      if (this.range.valid) {
        this.searchData();
      }
    })
  }

  getPurchaseOrderList() {
    this.purchaseOrderService.getPurchaseOrderList().subscribe(res => {
      this.purchaseReports = res;
      this._setData(res);
    }, error => console.log(error));
  }

  clearSupplierSearch() {
    this.searchText = '';
    this._setData(this.purchaseReports);
  }

  clearDate() {
    this.range.reset();
  }

  searchData() {
    const searchText = this.searchText;
    const { start, end } = this.range.value || {};
    let filteredData = this.purchaseReports;

    if (start && end) {
      const startTime = start.getTime();
      const endTime = end.getTime() + 86399999;
      // console.log('date===', startTime, endTime, new Date(startTime), new Date(endTime));
      filteredData = filteredData.filter(purchaseReport => {
        const dueDateTime = new Date(purchaseReport?.billDate).getTime();
        return dueDateTime >= startTime && dueDateTime <= endTime
      });
    }

    if (searchText) {
      filteredData = filteredData.filter(purchaseReport => purchaseReport?.supplier?.supplierName?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1);
    }
    this._setData(filteredData);
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  deleteSalesOrder(event) {
    this.purchaseOrderService.deleteOrder(event.purchaseOrderID).subscribe(
      response => {
        this.getPurchaseOrderList();
      },
      error => {
        console.log(error);
        alert('Could not able to delete purchase order since used in sales order');
      });
  }

  updateProduct(updateProduct): void {
    const dialogRef = this.dialog.open(PurchaseReportDetailsComponent, {
      width: '950px',
      disableClose: false,
      data: { data: updateProduct }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPurchaseOrderList();
    });
  }
}
