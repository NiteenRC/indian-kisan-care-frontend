import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  response: any;
  totalPrice: number = 0;
  TAX_RATE = 18;

  ngOnInit(): void {
    console.log('this.response', JSON.stringify((window['response'])));
    this.response = window['response'];
    document.title = 'Tax Invoice';
    this._calculateTotals();
    window.print();
  }

  private _calculateTotals() {
    let totalPrice = 0;
    console.log('response?.purchaseOrderDetail', this.response?.purchaseOrderDetail);
    this.response?.purchaseOrderDetail?.forEach((purchaseOrder) => {
      totalPrice += purchaseOrder?.price * purchaseOrder?.qtyOrdered;
    });

    this.totalPrice = totalPrice + totalPrice * this.TAX_RATE / 100;
  }
}
