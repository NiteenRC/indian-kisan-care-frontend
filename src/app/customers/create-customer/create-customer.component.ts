import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';

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
            this.customerUpdateData = data?.data;
            this.customerForm.controls['customerName'].setValue(this.customerUpdateData.customerName);
            this.customerForm.controls['gstIn'].setValue(this.customerUpdateData.gstIn);
            this.customerForm.controls['phoneNumber'].setValue(this.customerUpdateData.phoneNumber);
            this.customerForm.controls['cityName'].setValue(this.customerUpdateData.location);
        }
    }

    closeModal(): void {
            this.dialogRef.close();
    }

    ngOnInit(): void {
        this.getlocationList();
    }

    onSubmit() {
        if (this.customerForm.valid) {
            if (this.customerUpdateData?.id != null) {
                this.updateCustomer();
            } else {
                this.saveCustomer();
            }
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
                this.successMsg = 'Customer Successfully Created..!';
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
            alert(this.errorMsg);
        });
    }

    updateCustomer() {
        let data = {
            id: this.customerUpdateData?.id,
            customerName: this.customerForm.controls.customerName.value,
            gstIn: this.customerForm.controls.gstIn.value,
            location: this.customerForm.controls.cityName.value,
            phoneNumber: this.customerForm.controls.phoneNumber.value,
        };

        this.customerService.updateCustomer(data).subscribe(res => {
            if (res != null) {
                this.successMsg = "Customer Successfully Updated..!";
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
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
