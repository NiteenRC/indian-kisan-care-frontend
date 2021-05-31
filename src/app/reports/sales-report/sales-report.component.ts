import { SalesOrderService } from './../../_services/sales-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  displayedColumns: string[] = ['salesOrderID', 'customerName', 'amountPaid', 'totalPrice', 'createdDate', 'status', 'totalQty'];
  productColumns: string[] = ['id', 'productName', 'salesPrice', 'qtyOrdered'];

  dataSource = [
    {
      "createdDate": "2021-05-12T03:14:14.902",
      "createdBy": "anonymousUser",
      "lastModifiedDate": "2021-05-12T03:14:14.902",
      "lastModifiedBy": "anonymousUser",
      "salesOrderID": 20,
      "totalPrice": 15297.916666666666,
      "amountPaid": 0,
      "currentBalance": 15297.916666666666,
      "previousBalance": 0,
      "totalQty": 2,
      "status": null,
      "customer": {
        "id": 1,
        "customerName": "Kallappa",
        "location": {
          "id": 1,
          "cityName": "Shinal",
          "createdDate": "2021-05-10T17:04:03.843+0000"
        },
        "phoneNumber": "9878923745",
        "createdDate": "2021-05-10T17:04:03.932+0000"
      },
      "salesOrderDetail": [
        {
          "salesOrderDetailID": 21,
          "product": {
            "id": 1,
            "productName": "Urea",
            "price": 224.16666666666666,
            "currentPrice": 0,
            "category": {
              "id": 1,
              "categoryName": "Fertilizer",
              "categoryDesc": "fertilizer desc",
              "createdDate": "2021-05-10T17:04:03.958+0000"
            },
            "productDesc": "urea desc",
            "qty": 110,
            "createdDate": "2021-05-10T17:04:03.998+0000"
          },
          "qtyOrdered": 10,
          "salesPrice": 0,
          "purchasePrice": 224.16666666666666,
          "profit": -2242
        },
        {
          "salesOrderDetailID": 22,
          "product": {
            "id": 2,
            "productName": "Tanger",
            "price": 945.9002463054186,
            "currentPrice": 0,
            "category": {
              "id": 3,
              "categoryName": "Pesticide",
              "categoryDesc": "pestiside desc",
              "createdDate": "2021-05-10T17:04:03.961+0000"
            },
            "productDesc": "tanger desc",
            "qty": 203,
            "createdDate": "2021-05-10T17:04:04.001+0000"
          },
          "qtyOrdered": 10,
          "salesPrice": 0,
          "purchasePrice": 1275.625,
          "profit": -12756
        }
      ]
    },
    {
      "createdDate": "2021-05-12T03:14:14.902",
      "createdBy": "anonymousUser",
      "lastModifiedDate": "2021-05-12T03:14:14.902",
      "lastModifiedBy": "anonymousUser",
      "salesOrderID": 20,
      "totalPrice": 15297.916666666666,
      "amountPaid": 0,
      "currentBalance": 15297.916666666666,
      "previousBalance": 0,
      "totalQty": 2,
      "status": null,
      "customer": {
        "id": 1,
        "customerName": "Kallappa",
        "location": {
          "id": 1,
          "cityName": "Shinal",
          "createdDate": "2021-05-10T17:04:03.843+0000"
        },
        "phoneNumber": "9878923745",
        "createdDate": "2021-05-10T17:04:03.932+0000"
      },
      "salesOrderDetail": [
        {
          "salesOrderDetailID": 21,
          "product": {
            "id": 1,
            "productName": "Urea",
            "price": 224.16666666666666,
            "currentPrice": 0,
            "category": {
              "id": 1,
              "categoryName": "Fertilizer",
              "categoryDesc": "fertilizer desc",
              "createdDate": "2021-05-10T17:04:03.958+0000"
            },
            "productDesc": "urea desc",
            "qty": 110,
            "createdDate": "2021-05-10T17:04:03.998+0000"
          },
          "qtyOrdered": 10,
          "salesPrice": 0,
          "purchasePrice": 224.16666666666666,
          "profit": -2242
        },
        {
          "salesOrderDetailID": 22,
          "product": {
            "id": 2,
            "productName": "Tanger",
            "price": 945.9002463054186,
            "currentPrice": 0,
            "category": {
              "id": 3,
              "categoryName": "Pesticide",
              "categoryDesc": "pestiside desc",
              "createdDate": "2021-05-10T17:04:03.961+0000"
            },
            "productDesc": "tanger desc",
            "qty": 203,
            "createdDate": "2021-05-10T17:04:04.001+0000"
          },
          "qtyOrdered": 10,
          "salesPrice": 0,
          "purchasePrice": 1275.625,
          "profit": -12756
        }
      ]
    },
    {
      "createdDate": "2021-05-12T03:14:14.902",
      "createdBy": "anonymousUser",
      "lastModifiedDate": "2021-05-12T03:14:14.902",
      "lastModifiedBy": "anonymousUser",
      "salesOrderID": 20,
      "totalPrice": 15297.916666666666,
      "amountPaid": 0,
      "currentBalance": 15297.916666666666,
      "previousBalance": 0,
      "totalQty": 2,
      "status": null,
      "customer": {
        "id": 1,
        "customerName": "Kallappa",
        "location": {
          "id": 1,
          "cityName": "Shinal",
          "createdDate": "2021-05-10T17:04:03.843+0000"
        },
        "phoneNumber": "9878923745",
        "createdDate": "2021-05-10T17:04:03.932+0000"
      },
      "salesOrderDetail": [
        {
          "salesOrderDetailID": 21,
          "product": {
            "id": 1,
            "productName": "Urea",
            "price": 224.16666666666666,
            "currentPrice": 0,
            "category": {
              "id": 1,
              "categoryName": "Fertilizer",
              "categoryDesc": "fertilizer desc",
              "createdDate": "2021-05-10T17:04:03.958+0000"
            },
            "productDesc": "urea desc",
            "qty": 110,
            "createdDate": "2021-05-10T17:04:03.998+0000"
          },
          "qtyOrdered": 10,
          "salesPrice": 0,
          "purchasePrice": 224.16666666666666,
          "profit": -2242
        },
        {
          "salesOrderDetailID": 22,
          "product": {
            "id": 2,
            "productName": "Tanger",
            "price": 945.9002463054186,
            "currentPrice": 0,
            "category": {
              "id": 3,
              "categoryName": "Pesticide",
              "categoryDesc": "pestiside desc",
              "createdDate": "2021-05-10T17:04:03.961+0000"
            },
            "productDesc": "tanger desc",
            "qty": 203,
            "createdDate": "2021-05-10T17:04:04.001+0000"
          },
          "qtyOrdered": 10,
          "salesPrice": 0,
          "purchasePrice": 1275.625,
          "profit": -12756
        }
      ]
    },
  ];
  
  constructor(private salesOrderService: SalesOrderService) { }

  ngOnInit(): void {
    this.getSalesOrderList();
  }

  getSalesOrderList() {
    this.salesOrderService.getSalesOrderList().subscribe(res => {
        this.dataSource = res;
        console.log('res', res);
    }, error => console.log(error));
}

}
