import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service.js';
import { numberInWords } from '../../utils/numToWords.js';
@Component({
  selector: 'app-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {
  response: any;
  totalPrice: number = 0;
  amountInWords: string = '';
  user: any = null;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    console.log('this.response', JSON.stringify((window['response'])));
    let salesOrder = window['response'];
    if (!salesOrder) {
      const invoiceData = sessionStorage.getItem('invoiceData');
      if (invoiceData) {
        salesOrder = JSON.parse(invoiceData);
      }
    } else {
      sessionStorage.setItem('invoiceData', JSON.stringify(salesOrder));
    }

    this.response = salesOrder;
    document.title = 'Tax Invoice';
    this._calculateTotals();
    this.user = this.tokenStorageService.getUser();
  }

  printPDF() {
    window.print();
  }

  private _calculateTotals() {
    let totalPrice = 0;
    console.log('response?.salesOrderDetail', this.response?.salesOrderDetail);
    this.response?.salesOrderDetail?.forEach((salesOrder) => {
      const amount = salesOrder?.price * salesOrder?.qtyOrdered;
      const taxAmount = amount * salesOrder?.product?.gst / 100;
      totalPrice += amount + taxAmount;
    });

    this.totalPrice = Math.round(totalPrice);

    this.amountInWords = numberInWords(this.totalPrice);
  }
}
