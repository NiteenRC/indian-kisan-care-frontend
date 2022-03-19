import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/_services/bank.service.js';
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
  totalTaxAmount: number = 0;
  totalQty: number = 0;
  amountInWords: string = '';
  user: any = null;
  bankAccount: any;

  constructor(private tokenStorageService: TokenStorageService, private httpClient : HttpClient,
    private bankService: BankService) { }

  ngOnInit(): void {
    this.viewImage();
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

    this.getBankDetails();
  }

  printPDF() {
    window.print();
  }

  private _calculateTotals() {
    let totalPrice = 0;
    let totalTaxAmount = 0;
    let totalQty = 0;

    console.log('response?.salesOrderDetail', this.response?.salesOrderDetail);
    this.response?.salesOrderDetail?.forEach((salesOrder) => {
      const amount = salesOrder?.price * salesOrder?.qtyOrdered;
      const taxAmount = amount * salesOrder?.product?.gst / 100;
      totalPrice += amount;
      totalTaxAmount += taxAmount;
      totalQty +=salesOrder?.qtyOrdered;
    });

    this.totalQty = Math.round(totalQty);
    this.totalPrice = Math.round(totalPrice);
    this.totalTaxAmount = Math.round(totalTaxAmount);

    this.amountInWords = numberInWords(this.totalPrice);
  }

  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;

  getBankDetails() {
    this.bankService.getBankDetails(1).subscribe(data => {
      this.bankAccount = data;
    });
  }

  viewImage() {
    this.httpClient.get('http://localhost:8080/bank/image')
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }
}
