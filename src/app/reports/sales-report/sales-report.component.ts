import { SalesOrderService } from './../../_services/sales-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'price', 'qty', 'productDesc'];
  dataSource;
  
  constructor(private salesOrderService: SalesOrderService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.salesOrderService.getSalesOrderList().subscribe(res => {
        this.dataSource = res;
    }, error => console.log(error));
}

}
