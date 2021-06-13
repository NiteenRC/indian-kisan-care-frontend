import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PurchaseOrderService } from 'src/app/_services/purchase-order.service';
import { SalesOrderService } from 'src/app/_services/sales-order.service';

@Component({
  selector: 'app-update-balance-sheet',
  templateUrl: './supplier-update-balance-sheet.component.html',
  styleUrls: ['./supplier-update-balance-sheet.component.css']
})
export class SupplierUpdateBalanceSheetComponent implements OnInit {
  productForm: FormGroup;
  productUpdateData: any;

  constructor(private purchaseOrderService: PurchaseOrderService,
    public dialogRef: MatDialogRef<SupplierUpdateBalanceSheetComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      supplierName: new FormControl(),
      currentBalance: new FormControl(),
      payAmount: new FormControl(),
    });

    if (data != null) {
      this.productUpdateData = data?.data;
      //this.productForm.controls['supplierName'].disable()
      //this.productForm.controls['currentBalance'].disable()
      this.productForm.controls['id'].setValue(this.productUpdateData.supplier.id);
      this.productForm.controls['supplierName'].setValue(this.productUpdateData.supplier.supplierName);
      this.productForm.controls['currentBalance'].setValue(this.productUpdateData.currentBalance);
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.productForm.controls.id.value != null) {
      this.updateSupplierBalance();
    }
  }

  updateSupplierBalance() {
    let status: string = '';
    const payAmount: number = Number(this.productForm.controls.payAmount.value);

    if (payAmount < 0) {
      alert('Pay amount should be positive');
      return;
    } else if (payAmount == 0) {
      alert('Pay amount should not be ZERO');
      return;
    } else if (payAmount === this.productForm.controls.currentBalance.value) {
      status = 'PAID';
    } else if (payAmount < this.productForm.controls.currentBalance.value) {
      status = 'DUE';
    } else {
      alert('Please pay amount less than due amount');
      return;
    }

    let data = {
      id: this.productForm.controls.id.value,
      payAmount: payAmount,
      status: status,
    };

    this.purchaseOrderService.updatePurchaseOrder(data).subscribe(res => {
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
