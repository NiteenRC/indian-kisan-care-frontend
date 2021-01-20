import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/_services/company.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  supplierForm: FormGroup;
  locationForm: FormGroup;
  customerUpdateData: any;
  successMsg: any;
  errorMsg: any;
  citiesList: any;
  constructor(private customerService: CustomerService, private location: LocationService,
    public dialogRef: MatDialogRef<CreateSupplierComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.customerUpdateData = data;
    this.supplierForm = new FormGroup({
      cityName: new FormControl(null, [Validators.required]),
      customerName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10), Validators.maxLength(10)]),
    })

    this.locationForm = new FormGroup({
      cityName: new FormControl(null, [Validators.required]),
    })

    if (data != null) {
      this.supplierForm.controls["customerName"].setValue(this.customerUpdateData.data.customerName);
      this.supplierForm.controls["phoneNumber"].setValue(this.customerUpdateData.data.phoneNumber);
      this.supplierForm.controls["cityName"].setValue(this.customerUpdateData.data.location.cityName);
    }
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {

    this.getlocationList();
  }
  onSubmit() {
    if (this.customerUpdateData?.data.id != null) {
      // this.updateCustomer();
    } else {
      this.saveCustomer();
    }
  }

  saveCustomer() {
    let data = {
      // companyID: this.companyUpdateData?.data.id,
      // companyName: this.customerForm.controls.companyName.value,
      // phoneNumber: this.customerForm.controls.phoneNumber.value

      //  customerID: number;
      customerName: this.supplierForm.controls.customerName.value,
      location: {
        cityName: this.supplierForm.controls.cityName.value,
      },
      phoneNumber: this.supplierForm.controls.phoneNumber.value,
    }

    this.customerService.createCustomer(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Company Successfully Created..!";
        // this.getCompanyList();
        this.closeModal();
      }
    }, error => {
      this.errorMsg = "Company Unsuccessfully Created.."
    })

  }
  // updateCustomer() {
  //   let data = {
  //     companyID: this.companyUpdateData?.data.id,
  //     companyName: this.customerForm.controls.companyName.value,
  //     phoneNumber: this.customerForm.controls.phoneNumber.value
  //   }
  //   this.customerService.updateCompany(data).subscribe(res => {
  //     if (res != null) {
  //       this.successMsg = "Company Successfully Updated..!";
  //       this.getCompanyList();
  //       this.closeModal();
  //     }
  //   }, error => {
  //     this.errorMsg = "Company Unsuccessfully Updated..";
  //   })
  // }

  // getCompanyList() {
  //   this.customerService.getCompanyList().subscribe(data => {
  //   }, error => console.log(error));
  // }

  getlocationList() {
    this.location.getLocationList().subscribe(res => {
      this.citiesList = res;

    })
  }
}
