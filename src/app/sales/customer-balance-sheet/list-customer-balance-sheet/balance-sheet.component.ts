import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { UpdateBalanceSheetComponent } from '../update-customer-balance-sheet/customer-update-balance-sheet.component';
import { SalesOrderService } from 'src/app/_services/sales-order.service';
import { PurchaseOrderService } from 'src/app/_services/purchase-order.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'phoneNumber', 'totalPrice', 'amountPaid', 'dueAmount', 'billDate', 'dueDate', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 15;
  request = { page: this.currentPage, size: this.pageSize };

  searchText: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  salesReports;

  constructor(private dialog: MatDialog, private salesOrderService: SalesOrderService) { }

  ngOnInit(): void {
    this.getSalesOrderList(this.request);
    this.range.valueChanges.subscribe(dateRange => {
      if (this.range.valid) {
        this.searchData();
      }
    })
  }

  getSalesOrderList(request) {
    this.salesOrderService.getAllCustomerSalesOrderBalanceSheet(request).subscribe(res => {
      this.salesReports = res;
      this._setData(res);
    }, error => console.log(error));
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();

    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getSalesOrderList(request);
    return event;
  }

  clearCustomerSearch() {
    this.searchText = '';
    this._setData(this.salesReports);
  }

  clearDate() {
    this.range.reset();
  }

  searchData() {
    const searchText = this.searchText;
    const { start, end } = this.range.value || {};
    let filteredData = this.salesReports;

    if (start && end) {
      const startTime = start.getTime();
      const endTime = end.getTime();
      // console.log('date===', startTime, endTime, new Date(startTime), new Date(endTime));
      filteredData = filteredData.filter(salesReport => {
        const dueDateTime = new Date(salesReport?.dueDate).getTime();
        return dueDateTime >= startTime && dueDateTime <= endTime
      });
    }

    if (searchText) {
      filteredData = filteredData.filter(salesReport => salesReport?.customer?.customerName?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1);
    }
    this._setData(filteredData);
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  updateBalance(updateBalance): void {
    const dialogRef = this.dialog.open(UpdateBalanceSheetComponent, {
      width: '450px',
      disableClose: true,
      data: { data: updateBalance }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getSalesOrderList(this.request);
    });
  }
}
