import { SalesOrderService } from '../../_services/sales-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profit-summary',
  templateUrl: './profit-summary.component.html',
  styleUrls: ['./profit-summary.component.css']
})
export class ProfitSummaryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight',];
  displayedColumns1: string[] = ['createdDate', 'totalPrice', 'totalProfit', 'dueAmount', 'dueCollection'];
  displayedColumnsProduct: string[] = ['productName', 'qtySold', 'totalPrice'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  reactiveForm: FormGroup;
  dataSource1: any;
  dataSourceProduct: any;
  numberOfnotes: any;
  dateData: Date;
  transaction = 0;
  upiPayment = 0;
  dueAmount = 0;
  expense = 0;
  openingBalance = 0;
  dueCollection = 0;
  difference = 0;
  noOfNotes = 0;
  total = 0;
  notesOf10sTotal = 0;
  notesOf20sTotal = 0;
  notesOf50sTotal = 0;
  notesOf100sTotal = 0;
  notesOf200sTotal = 0;
  notesOf500sTotal = 0;
  notesOf2000sTotal = 0;
  totalNoOfNotesCount = 0;
  notesCount10 = 0;
  notesCount2000 = 0;
  notesCount20 = 0;
  notesCount50 = 0;
  notesCount100 = 0;
  notesCount200 = 0;
  notesCount500 = 0;
  constructor(private salesOrderService: SalesOrderService, private _fb: FormBuilder,) {

  }

  ngOnInit(): void {
    this.getSalesOrderList();
    this.reactiveForm = new FormGroup({
      notesOfNotes2000: new FormControl('', [Validators.maxLength(3)]),
      notesOfNotes500: new FormControl('', []),
      notesOfNotes200: new FormControl('', []),
      notesOfNotes100: new FormControl('', []),
      notesOfNotes50: new FormControl('', []),
      notesOfNotes20: new FormControl('', []),
      notesOfNotes10: new FormControl('', []),
    })

    this.reactiveForm.get("notesOfNotes2000").valueChanges.subscribe(selectedValue => {
      this.notesCount2000 = selectedValue;
      // this.noOfNotes=this.noOfNotes+this.notesCount2000;
      this.total = 2000 * selectedValue;
      // this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.total;
    })
    this.reactiveForm.get("notesOfNotes500").valueChanges.subscribe(selectedValue => {
      this.notesOf500sTotal = 500 * selectedValue
      this.notesCount500 = selectedValue;
      // this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.notesOf500sTotal;
    })
    this.reactiveForm.get("notesOfNotes200").valueChanges.subscribe(selectedValue => {
      this.notesOf200sTotal = 200 * selectedValue;
      this.notesCount200 = selectedValue;
      //  this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.notesOf200sTotal;
    })
    this.reactiveForm.get("notesOfNotes100").valueChanges.subscribe(selectedValue => {
      this.notesOf100sTotal = 100 * selectedValue;
      this.notesCount100 = selectedValue;
      // this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.notesOf100sTotal;
    })
    this.reactiveForm.get("notesOfNotes50").valueChanges.subscribe(selectedValue => {
      this.notesOf50sTotal = 50 * selectedValue;
      this.notesCount50 = selectedValue;
      //  this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.notesOf50sTotal;
    })
    this.reactiveForm.get("notesOfNotes20").valueChanges.subscribe(selectedValue => {
      this.notesOf20sTotal = 20 * selectedValue;
      this.notesCount20 = selectedValue;
      // this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.notesOf20sTotal;
    })
    this.reactiveForm.get("notesOfNotes10").valueChanges.subscribe(selectedValue => {
      this.notesOf10sTotal = 10 * selectedValue;
      this.notesCount10 = selectedValue;
      // this.totalNoOfNotesCount=this.totalNoOfNotesCount+this.notesOf10sTotal;
    })
  }

  calculate() {
    this.noOfNotes = this.notesCount2000 + this.notesCount500 + this.notesCount200 + this.notesCount100 + this.notesCount50 + this.notesCount20 + this.notesCount10;
    this.totalNoOfNotesCount = this.total + this.notesOf500sTotal + this.notesOf200sTotal + this.notesOf100sTotal + this.notesOf50sTotal + this.notesOf20sTotal + this.notesOf10sTotal;
    this.difference =  (this.dueAmount - this.dueCollection + this.totalNoOfNotesCount + this.upiPayment + this.expense - this.openingBalance) - this.transaction;
  }
  getSalesOrderList() {
    this.salesOrderService.getBarChartReport().subscribe(res => {
      this._setData(res);
    }, error => console.log(error));
  }

  private _setData(data) {
    this.getData(data[0]);
    this.dataSource1 = new MatTableDataSource(data);
    this.dataSource1.paginator = this.paginator;
  }
  private _setDataProductWise(data) {
    this.dataSourceProduct = new MatTableDataSource(data);
    this.dataSourceProduct.paginator = this.paginator;
  }

  getData(event) {
    this.calculate();

    this.dateData = event.billDate;
    this.transaction = event.transaction;
    this.dueAmount = event.dueAmount;
    this.upiPayment = event.upiPayment;
    //this.profit = event.totalProfit;
    this.dueCollection = event.dueCollection;
    this.difference = this.transaction + this.dueAmount + this.dueCollection - this.totalNoOfNotesCount;
    console.log(event);
  }
}