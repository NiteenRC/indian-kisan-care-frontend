import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from 'src/app/_services/customer.service';
import {LocationService} from 'src/app/_services/location.service';

@Component({
    selector: 'app-create-customer',
    templateUrl: './create-customer.component.html',
    styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

    customerForm: FormGroup;
    locationForm: FormGroup;
    customerUpdateData: any;
    successMsg: any;
    errorMsg: any;
    citiesList: any;

    constructor(private customerService: CustomerService, private location: LocationService,
                public dialogRef: MatDialogRef<CreateCustomerComponent>,
                @Inject(MAT_DIALOG_DATA) private data) {
        this.customerUpdateData = data;

        this.customerForm = new FormGroup({
            cityName: new FormControl(null),
            customerName: new FormControl(null, [Validators.required]),
            gstIn: new FormControl(null),
            phoneNumber: new FormControl(null),
        });

        this.locationForm = new FormGroup({
            cityName: new FormControl(null, [Validators.required]),
        });

        if (data != null) {
            this.customerForm.controls['customerName'].setValue(this.customerUpdateData.data.customerName);
            this.customerForm.controls['gstIn'].setValue(this.customerUpdateData.data.gstIn);
            this.customerForm.controls['phoneNumber'].setValue(this.customerUpdateData.data.phoneNumber);
            this.customerForm.controls['cityName'].setValue(this.customerUpdateData.data.location.cityName);
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
            this.updateCustomer();
        } else {
            this.saveCustomer();
        }
    }

    saveCustomer() {
        let data = {
            customerName: this.customerForm.controls.customerName.value,
            gstIn: this.customerForm.controls.gstIn.value,
            location: this.customerForm.controls.cityName.value,
            phoneNumber: this.customerForm.controls.phoneNumber.value,
        };

        this.customerService.createCustomer(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Company Successfully Created..!';
                // this.getCompanyList();
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });
    }

     updateCustomer() {
       let data1 = {
         companyID: this.customerUpdateData?.data.id,
         companyName: this.customerForm.controls.companyName.value,
         phoneNumber: this.customerForm.controls.phoneNumber.value
       }
       let data = {
        id: this.customerUpdateData?.data.id,  
        customerName: this.customerUpdateData.controls.customerName.value,
        gstIn: this.customerForm.controls.gstIn.value,
        location: this.customerForm.controls.cityName.value,
        phoneNumber: this.customerForm.controls.phoneNumber.value,
    };

       this.customerService.updateCustomer(data).subscribe(res => {
         if (res != null) {
           this.successMsg = "Company Successfully Updated..!";
           this.getCustomerList();
           this.closeModal();
         }
       }, error => {
         this.errorMsg = error.error.errorMessage; "Company Unsuccessfully Updated..";
       })
     }

     getCustomerList() {
       this.customerService.getCustomerList().subscribe(data => {
       }, error => console.log(error));
     }

    getlocationList() {
        this.location.getLocationList().subscribe(res => {
            this.citiesList = res;
        });
    }
}
