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
  displayedColumns: string[] = ['salesOrderID', 'customerName', 'amountPaid', 'totalPrice', 'createdDate', 'status', 'totalQty'];
  productColumns: string[] = ['id', 'productName', 'salesPrice', 'qtyOrdered'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;

  searchText: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  dataSource1: any = [{ "createdDate": "2021-06-06T07:57:44.482", "createdBy": "anonymousUser", "lastModifiedDate": "2021-06-06T07:57:44.482", "lastModifiedBy": "anonymousUser", "salesOrderID": 10, "totalPrice": 80, "amountPaid": 0, "currentBalance": 80, "previousBalance": 0, "totalQty": 4, "status": "DUE", "customer": { "id": 1, "customerName": "Unknown", "location": { "id": 1, "cityName": "Unknown", "createdDate": "2021-05-12T17:20:30.000+0000" }, "phoneNumber": "9999999999", "createdDate": "2021-05-12T17:25:36.000+0000", "gstIn": "ABCDABCDABCDABCD" }, "salesOrderDetail": [{ "salesOrderDetailID": 11, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 4, "purchasePrice": 25, "profit": -92, "price": 2 }, { "salesOrderDetailID": 12, "product": { "id": 2, "productName": "Product2", "price": 33.333333333333336, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 45, "createdDate": "2021-05-12T17:13:46.000+0000", "gst": 18, "hsnNo": "23sdf" }, "qtyOrdered": 10, "purchasePrice": 33.333333333333336, "profit": -323, "price": 1 }, { "salesOrderDetailID": 13, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 20, "purchasePrice": 25, "profit": -460, "price": 2 }, { "salesOrderDetailID": 14, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 10, "purchasePrice": 25, "profit": -240, "price": 1 }], "vehicleNo": "", "dueDate": "2021-06-06T07:57:21.090+0000", "comment": null }, { "createdDate": "2021-06-06T07:57:19.695", "createdBy": "anonymousUser", "lastModifiedDate": "2021-06-06T07:57:19.695", "lastModifiedBy": "anonymousUser", "salesOrderID": 7, "totalPrice": 59, "amountPaid": 10, "currentBalance": 49, "previousBalance": 0, "totalQty": 2, "status": "PARTIAL", "customer": { "id": 1, "customerName": "Unknown", "location": { "id": 1, "cityName": "Unknown", "createdDate": "2021-05-12T17:20:30.000+0000" }, "phoneNumber": "9999999999", "createdDate": "2021-05-12T17:25:36.000+0000", "gstIn": "ABCDABCDABCDABCD" }, "salesOrderDetail": [{ "salesOrderDetailID": 8, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 5, "purchasePrice": 25, "profit": -100, "price": 5 }, { "salesOrderDetailID": 9, "product": { "id": 2, "productName": "Product2", "price": 33.333333333333336, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 45, "createdDate": "2021-05-12T17:13:46.000+0000", "gst": 18, "hsnNo": "23sdf" }, "qtyOrdered": 5, "purchasePrice": 33.333333333333336, "profit": -142, "price": 5 }], "vehicleNo": "", "dueDate": "2021-06-06T07:57:03.359+0000", "comment": null }, { "createdDate": "2021-06-06T07:57:44.482", "createdBy": "anonymousUser", "lastModifiedDate": "2021-06-06T07:57:44.482", "lastModifiedBy": "anonymousUser", "salesOrderID": 10, "totalPrice": 80, "amountPaid": 0, "currentBalance": 80, "previousBalance": 0, "totalQty": 4, "status": "DUE", "customer": { "id": 1, "customerName": "Unknown", "location": { "id": 1, "cityName": "Unknown", "createdDate": "2021-05-12T17:20:30.000+0000" }, "phoneNumber": "9999999999", "createdDate": "2021-05-12T17:25:36.000+0000", "gstIn": "ABCDABCDABCDABCD" }, "salesOrderDetail": [{ "salesOrderDetailID": 11, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 4, "purchasePrice": 25, "profit": -92, "price": 2 }, { "salesOrderDetailID": 12, "product": { "id": 2, "productName": "Product2", "price": 33.333333333333336, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 45, "createdDate": "2021-05-12T17:13:46.000+0000", "gst": 18, "hsnNo": "23sdf" }, "qtyOrdered": 10, "purchasePrice": 33.333333333333336, "profit": -323, "price": 1 }, { "salesOrderDetailID": 13, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 20, "purchasePrice": 25, "profit": -460, "price": 2 }, { "salesOrderDetailID": 14, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 10, "purchasePrice": 25, "profit": -240, "price": 1 }], "vehicleNo": "", "dueDate": "2021-06-06T07:57:21.090+0000", "comment": null }, { "createdDate": "2021-06-06T07:57:19.695", "createdBy": "anonymousUser", "lastModifiedDate": "2021-06-06T07:57:19.695", "lastModifiedBy": "anonymousUser", "salesOrderID": 7, "totalPrice": 59, "amountPaid": 10, "currentBalance": 49, "previousBalance": 0, "totalQty": 2, "status": "PARTIAL", "customer": { "id": 1, "customerName": "Unknown", "location": { "id": 1, "cityName": "Unknown", "createdDate": "2021-05-12T17:20:30.000+0000" }, "phoneNumber": "9999999999", "createdDate": "2021-05-12T17:25:36.000+0000", "gstIn": "ABCDABCDABCDABCD" }, "salesOrderDetail": [{ "salesOrderDetailID": 8, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 5, "purchasePrice": 25, "profit": -100, "price": 5 }, { "salesOrderDetailID": 9, "product": { "id": 2, "productName": "Product2", "price": 33.333333333333336, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 45, "createdDate": "2021-05-12T17:13:46.000+0000", "gst": 18, "hsnNo": "23sdf" }, "qtyOrdered": 5, "purchasePrice": 33.333333333333336, "profit": -142, "price": 5 }], "vehicleNo": "", "dueDate": "2021-06-06T07:57:03.359+0000", "comment": null }, { "createdDate": "2021-06-06T07:57:44.482", "createdBy": "anonymousUser", "lastModifiedDate": "2021-06-06T07:57:44.482", "lastModifiedBy": "anonymousUser", "salesOrderID": 10, "totalPrice": 80, "amountPaid": 0, "currentBalance": 80, "previousBalance": 0, "totalQty": 4, "status": "DUE", "customer": { "id": 1, "customerName": "Unknown", "location": { "id": 1, "cityName": "Unknown", "createdDate": "2021-05-12T17:20:30.000+0000" }, "phoneNumber": "9999999999", "createdDate": "2021-05-12T17:25:36.000+0000", "gstIn": "ABCDABCDABCDABCD" }, "salesOrderDetail": [{ "salesOrderDetailID": 11, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 4, "purchasePrice": 25, "profit": -92, "price": 2 }, { "salesOrderDetailID": 12, "product": { "id": 2, "productName": "Product2", "price": 33.333333333333336, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 45, "createdDate": "2021-05-12T17:13:46.000+0000", "gst": 18, "hsnNo": "23sdf" }, "qtyOrdered": 10, "purchasePrice": 33.333333333333336, "profit": -323, "price": 1 }, { "salesOrderDetailID": 13, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 20, "purchasePrice": 25, "profit": -460, "price": 2 }, { "salesOrderDetailID": 14, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 10, "purchasePrice": 25, "profit": -240, "price": 1 }], "vehicleNo": "", "dueDate": "2021-06-06T07:57:21.090+0000", "comment": null }, { "createdDate": "2021-06-06T07:57:19.695", "createdBy": "anonymousUser", "lastModifiedDate": "2021-06-06T07:57:19.695", "lastModifiedBy": "anonymousUser", "salesOrderID": 7, "totalPrice": 59, "amountPaid": 10, "currentBalance": 49, "previousBalance": 0, "totalQty": 2, "status": "PARTIAL", "customer": { "id": 1, "customerName": "Unknown", "location": { "id": 1, "cityName": "Unknown", "createdDate": "2021-05-12T17:20:30.000+0000" }, "phoneNumber": "9999999999", "createdDate": "2021-05-12T17:25:36.000+0000", "gstIn": "ABCDABCDABCDABCD" }, "salesOrderDetail": [{ "salesOrderDetailID": 8, "product": { "id": 1, "productName": "Product1", "price": 25, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 25, "createdDate": "2021-05-12T17:13:12.000+0000", "gst": 18, "hsnNo": "asdf" }, "qtyOrdered": 5, "purchasePrice": 25, "profit": -100, "price": 5 }, { "salesOrderDetailID": 9, "product": { "id": 2, "productName": "Product2", "price": 33.333333333333336, "currentPrice": 1, "category": { "id": 1, "categoryName": "Category1", "categoryDesc": "Fertilizer desc", "createdDate": "2021-05-12T16:55:52.000+0000" }, "productDesc": null, "qty": 45, "createdDate": "2021-05-12T17:13:46.000+0000", "gst": 18, "hsnNo": "23sdf" }, "qtyOrdered": 5, "purchasePrice": 33.333333333333336, "profit": -142, "price": 5 }], "vehicleNo": "", "dueDate": "2021-06-06T07:57:03.359+0000", "comment": null }];

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
      const endTime = end.getTime();
      // console.log('date===', startTime, endTime, new Date(startTime), new Date(endTime));
      filteredData = filteredData.filter(salesReport => salesReport?.dueDate >= startTime && endTime <= salesReport?.dueDate);
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
}
