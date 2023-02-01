import { PurchaseOrderService } from '../../_services/purchase-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseReportDetailsComponent } from '../purchase-report-details/purchase-report-details.component';
import { SupplierReportDetailsComponent } from '../supplier-report-details/supplier-report-details.component';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.css']
})
export class PurchaseReportComponent implements OnInit {
  displayedColumns: string[] = ['billDate', 'dueDate', 'supplierName', 'totalPrice', 'amountPaid', 'dueAmount','action'];
  productColumns: string[] = ['id', 'productName', 'purchasePrice', 'qtyOrdered'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  searchText: string = "";

  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 15;
  request = { page: this.currentPage, size: this.pageSize };

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  purchaseReports;

  constructor(public dialog: MatDialog, private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getPurchaseOrderList(this.searchText, this.request);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchText = filterValue.trim().toLowerCase();
    this.getPurchaseOrderList(this.searchText, this.request);
    this.currentPage = 0;
  }

  getPurchaseOrderList(searchText, request) {
    this.purchaseOrderService.getPurchaseOrderList(searchText, request).subscribe(res => {
      this.purchaseReports = res['content'];
      this.totalElements = res['totalElements'];
      this._setData(res['content']);

      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = res.totalElements;
      });
    }, error => console.log(error));
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();

    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getPurchaseOrderList(this.searchText, request);
    return event;
  }

  clearSupplierSearch() {
    this.searchText = '';
    this._setData(this.purchaseReports);
  }

  clearDate() {
    this.range.reset();
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  deleteSalesOrder(event) {
    this.purchaseOrderService.deleteOrder(event.purchaseOrderID).subscribe(
      response => {
        this.getPurchaseOrderList(this.searchText, this.request);
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
      this.getPurchaseOrderList(this.searchText, this.request);
    });
  }

  supplierHistory(supplier): void {
    const dialogRef = this.dialog.open(SupplierReportDetailsComponent, {
      width: '950px',
      disableClose: false,
      data: { data: supplier }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.getPurchaseOrderList();
    });
  }
}
