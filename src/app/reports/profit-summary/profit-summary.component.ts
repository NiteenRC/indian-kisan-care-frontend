import { SalesOrderService } from '../../_services/sales-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-profit-summary',
  templateUrl: './profit-summary.component.html',
  styleUrls: ['./profit-summary.component.css']
})
export class ProfitSummaryComponent implements OnInit {
  displayedColumns: string[] = ['createdDate', 'totalPrice', 'dueAmount', 'profit'];
  displayedColumnsProduct: string[] = ['productName', 'qtySold','totalPrice'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  dataSourceProduct: any;

  constructor(private salesOrderService: SalesOrderService) { }

  ngOnInit(): void {
    this.getSalesOrderList();
    this.getSalesOrderByProduct();
  }

  getSalesOrderList() {
    this.salesOrderService.getBarChartReport().subscribe(res => {
      this._setData(res);
    }, error => console.log(error));
  }

  getSalesOrderByProduct() {
    this.salesOrderService.getSalesOrderByProductWise().subscribe(res => {
      this._setDataProductWise(res);
    }, error => console.log(error));
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  private _setDataProductWise(data) {
    this.dataSourceProduct = new MatTableDataSource(data);
    this.dataSourceProduct.paginator = this.paginator;
  }
}
