import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  companyForm: FormGroup;
  companyUpdateData: any;
  successMsg: any;
  errorMsg: any;
  constructor(private companyService: CompanyService,
    public dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.companyUpdateData = data;
    this.companyForm = new FormGroup({
      companyName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10), Validators.maxLength(10)]),
    })
    if (data != null) {
      this.companyForm.controls["companyName"].setValue(this.companyUpdateData.data.companyName);
      this.companyForm.controls["phoneNumber"].setValue(this.companyUpdateData.data.phoneNumber);
    }
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.companyUpdateData?.data.id != null) {
      this.updateCustomer();
    } else {
      this.saveCustomer();
    }
  }

  saveCustomer() {
    let data = {
      companyID: this.companyUpdateData?.data.id,
      companyName: this.companyForm.controls.companyName.value,
      phoneNumber: this.companyForm.controls.phoneNumber.value
    }
    this.companyService.createCompany(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Company Successfully Created..!";
        this.getCompanyList();
        this.closeModal();
      }
    }, error => {
      this.errorMsg = "Company Unsuccessfully Created.."
    })

  }
  updateCustomer() {
    let data = {
      companyID: this.companyUpdateData?.data.id,
      companyName: this.companyForm.controls.companyName.value,
      phoneNumber: this.companyForm.controls.phoneNumber.value
    }
    this.companyService.updateCompany(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Company Successfully Updated..!";
        this.getCompanyList();
        this.closeModal();
      }
    }, error => {
      this.errorMsg = "Company Unsuccessfully Updated..";
    })
  }

  getCompanyList() {
    this.companyService.getCompanyList().subscribe(data => {
    }, error => console.log(error));
  }

}
