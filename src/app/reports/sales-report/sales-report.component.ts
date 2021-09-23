import { SalesOrderService } from './../../_services/sales-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  displayedColumns: string[] = ['billDate', 'dueDate', 'customerName', 'status', 'totalPrice', 'amountPaid', 'dueAmount', 'action'];
  productColumns: string[] = ['id', 'productName', 'salesPrice', 'qtyOrdered'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  searchText: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  salesReports;

  constructor(private salesOrderService: SalesOrderService) { }

  ngOnInit(): void {
    this.getSalesOrderList();
    this.range.valueChanges.subscribe(dateRange => {
      if (this.range.valid) {
        this.searchData();
      }
    })
  }

  getSalesOrderList() {
    this.salesOrderService.getSalesOrderList().subscribe(res => {
      this.salesReports = res;
      this._setData(res);
    }, error => console.log(error));
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
      const endTime = end.getTime() + 86399999;
      // console.log('date===', startTime, endTime, new Date(startTime), new Date(endTime));
      filteredData = filteredData.filter(salesReport => {
        const dueDateTime = new Date(salesReport?.billDate).getTime();
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

  deleteSalesOrder(event) {
    this.salesOrderService.deleteSalesOrder(event.salesOrderID).subscribe(
      response => {
        this.getSalesOrderList();
      },
      error => console.log(error));
  }
}
