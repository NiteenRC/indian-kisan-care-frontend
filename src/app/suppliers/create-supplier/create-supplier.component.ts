import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateSupplierComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }
  closeModal(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
