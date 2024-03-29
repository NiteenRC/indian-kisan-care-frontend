import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SalesOrderService } from 'src/app/_services/sales-order.service';

@Component({
  selector: 'app-update-balance-sheet',
  templateUrl: './customer-update-balance-sheet.component.html',
  styleUrls: ['./customer-update-balance-sheet.component.css']
})
export class UpdateBalanceSheetComponent implements OnInit {
  productForm: FormGroup;
  productUpdateData: any;
  minStartDate = new Date();
  errorMessage = '';
  popupTitle = "";
  popupsubtitle = "";
  popupDescription = "";
  @ViewChild('modalContent') modalContent: ElementRef;
  popupMarkup = "";

  constructor(private modalService: NgbModal,
    private salesOrderService: SalesOrderService,
    public dialogRef: MatDialogRef<UpdateBalanceSheetComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    var date = new Date();
    date.setDate(date.getDate() + 7);
    this.productForm = new FormGroup({
      id: new FormControl(),
      customerName: new FormControl(),
      currentBalance: new FormControl(),
      payAmount: new FormControl(),
      dueDate: new FormControl(date),
    });

    if (data != null) {
      this.productUpdateData = data?.data;
      this.productForm.controls['id'].setValue(this.productUpdateData.customer.id);
      this.productForm.controls['customerName'].setValue(this.productUpdateData.customer.customerName);
      this.productForm.controls['currentBalance'].setValue(this.productUpdateData.currentBalance);
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.productForm.controls.id.value != null) {
        this.updateCustomerBalance();
      }
    }
  }

  updateCustomerBalance() {
    let status: string = '';
    const payAmount: number = Number(this.productForm.controls.payAmount.value);

    if (payAmount < 0) {
      this.showAlert("Error", "Pay amount should be positive", "");
      return;
    } else if (payAmount == 0) {
      this.showAlert("Error", "Pay amount should not be ZERO", "");
      return;
    } else if (payAmount === this.productForm.controls.currentBalance.value) {
      status = 'PAID';
    } else if (payAmount < this.productForm.controls.currentBalance.value) {
      status = 'DUE';
    } else {
      this.showAlert("Error", "Please pay amount less than due amount", "");
      return;
    }

    if (payAmount !== this.productForm.controls.currentBalance.value) {
      if (!this.productForm.controls.dueDate.value) {
        this.errorMessage = 'Please select Due date';
        return;
      }
    }

    let data = {
      id: this.productForm.controls.id.value,
      payAmount: payAmount,
      status: status,
      currentBalance: this.productForm.controls.currentBalance.value,
      dueDate: this.productForm.controls.dueDate.value,
    };

    this.salesOrderService.updateSalesOrderBalance(data).subscribe(res => {
      if (res != null) {
        this.closeModal();
      }
    }, error => {
      //this.errorMsg = error.error.errorMessage;
    });
  }

  showAlert(popupTitle: string, popupDescription: string, popupsubtitle: string, popupMarkup: string = "", callback: any = () => { }) {
    this.popupTitle = popupTitle;
    this.popupsubtitle = popupsubtitle;
    this.popupDescription = popupDescription;
    this.popupMarkup = popupMarkup;

    this.modalService.open(this.modalContent, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
      callback("ok");
    }, (reason) => {
      callback("cancel");
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
