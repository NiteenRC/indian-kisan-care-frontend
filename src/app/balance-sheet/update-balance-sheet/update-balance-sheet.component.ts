import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SalesOrderService } from 'src/app/_services/sales-order.service';

@Component({
  selector: 'app-update-balance-sheet',
  templateUrl: './update-balance-sheet.component.html',
  styleUrls: ['./update-balance-sheet.component.css']
})
export class UpdateBalanceSheetComponent implements OnInit {
  productForm: FormGroup;
  productUpdateData: any;

  constructor(private salesOrderService: SalesOrderService,
    public dialogRef: MatDialogRef<UpdateBalanceSheetComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      customerName: new FormControl(),
      currentBalance: new FormControl(),
      payAmount: new FormControl(),
    });

    if (data != null) {
      this.productUpdateData = data?.data;
      this.productForm.controls['customerName'].disable()
      this.productForm.controls['currentBalance'].disable()
      this.productForm.controls['id'].setValue(this.productUpdateData.customer.id);
      this.productForm.controls['customerName'].setValue(this.productUpdateData.customer.customerName);
      this.productForm.controls['currentBalance'].setValue(this.productUpdateData.currentBalance);
      //this.productForm.controls['payAmount'].setValue(this.productUpdateData.payAmount);
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.productForm.controls.id.value != null) {
      this.updateProduct();
    }
  }

  updateProduct() {
    const payAmount = this.productForm.controls.payAmount.value;
    //const category = this._findCategory(selectedCategoryName);
    let data = {
      id: this.productForm.controls.id.value,
      payAmount: this.productForm.controls.payAmount.value,
    };

    this.salesOrderService.updateSalesOrder(data).subscribe(res => {
      if (res != null) {
        this.closeModal();
      }
    }, error => {
      //this.errorMsg = error.error.errorMessage;
    });
  }

  closeModal(): void {
    this.dialogRef.close();
}
}
