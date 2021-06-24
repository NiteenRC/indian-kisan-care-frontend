import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service.js';
import { numberInWords } from '../../utils/numToWords.js';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  response: any;
  totalPrice: number = 0;
  totalQty: number = 0;
  amountInWords: string = '';
  user: any = null;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    console.log('this.response', JSON.stringify((window['response'])));
    let purchaseOrder = window['response'];
    if (!purchaseOrder) {
      const invoiceData = sessionStorage.getItem('invoiceData');
      if (invoiceData) {
        purchaseOrder = JSON.parse(invoiceData);
      }
    } else {
      sessionStorage.setItem('invoiceData', JSON.stringify(purchaseOrder));
    }
    
    this.response = purchaseOrder;
    document.title = 'Tax Invoice';
    this._calculateTotals();
    this.user = this.tokenStorageService.getUser();
  }

  printPDF() {
    window.print();
  }

  private _calculateTotals() {
    let totalPrice = 0;
    let totalQty = 0;
    console.log('response?.purchaseOrderDetail', this.response?.purchaseOrderDetail);
    this.response?.purchaseOrderDetail?.forEach((purchaseOrder) => {
      const amount = purchaseOrder?.price * purchaseOrder?.qtyOrdered;
      const qty = purchaseOrder?.qtyOrdered;
      //const taxAmount = amount * purchaseOrder?.product?.gst/100;
      totalQty += qty;
      totalPrice += amount;// + taxAmount;
    });

    this.totalPrice = Math.round(totalPrice);
    this.totalQty = totalQty;
    this.amountInWords = numberInWords(this.totalPrice);
  }
}
