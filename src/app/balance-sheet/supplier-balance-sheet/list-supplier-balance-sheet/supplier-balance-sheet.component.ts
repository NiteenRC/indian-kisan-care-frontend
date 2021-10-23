import { PurchaseOrderService } from '../../../_services/purchase-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { SupplierUpdateBalanceSheetComponent } from '../update-supplier-balance-sheet/supplier-update-balance-sheet.component';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './supplier-balance-sheet.component.html',
  styleUrls: ['./supplier-balance-sheet.component.css']
})
export class SupplierBalanceSheetComponent implements OnInit {
  displayedColumns: string[] = ['supplierName', 'totalPrice', 'amountPaid', 'dueAmount', 'billDate', 'dueDate', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  searchText: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  salesReports;

  constructor(private dialog: MatDialog, private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getSalesOrderList();
    this.range.valueChanges.subscribe(dateRange => {
      if (this.range.valid) {
        this.searchData();
      }
    })
  }

  getSalesOrderList() {
    this.purchaseOrderService.getAllSupplierPurchaseOrderBalanceSheet().subscribe(res => {
      res.sort(function(a, b) {
        return b.billDate - a.billDate;
      });
      this.salesReports = res;
      this._setData(res);
    }, error => console.log(error));
  }

  clearSupplierSearch() {
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
      filteredData = filteredData.filter(salesReport => salesReport?.supplier?.supplierName?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1);
    }
    this._setData(filteredData);
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  pay(index: number) {
    alert('s')
    //this.salesOrderDetailArr.removeAt(index);
    //this.salesOrderDetailData = new MatTableDataSource(this.salesOrderDetailArr.controls);
  }

  updateBalance(updateBalance): void {
    const dialogRef = this.dialog.open(SupplierUpdateBalanceSheetComponent, {
      width: '450px',
      disableClose: true,
      data: { data: updateBalance }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getSalesOrderList();
    });
  }
}
