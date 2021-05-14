import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CompanyService} from 'src/app/_services/company.service';
import {LocationService} from 'src/app/_services/location.service';
import {SupplierService} from 'src/app/_services/supplier.service';

@Component({
    selector: 'app-create-supplier',
    templateUrl: './create-supplier.component.html',
    styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

    supplierForm: FormGroup;
    locationForm: FormGroup;
    supplierUpdateData: any;
    successMsg: any;
    errorMsg: any;
    citiesList: any;
    companies: any;

    constructor(private supplierService: SupplierService, private location: LocationService,
                private companyService: CompanyService,
                public dialogRef: MatDialogRef<CreateSupplierComponent>,
                @Inject(MAT_DIALOG_DATA) private data) {
        this.supplierUpdateData = data;

        this.supplierForm = new FormGroup({
            cityName: new FormControl(null, [Validators.required]),
            supplierName: new FormControl(null, [Validators.required]),
            gstIn: new FormControl(null, [Validators.required]),
            companyName: new FormControl(null, [Validators.required]),
            phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10), Validators.maxLength(10)]),
        });

        this.locationForm = new FormGroup({
            cityName: new FormControl(null, [Validators.required]),
        });

        if (data != null) {
            this.supplierForm.controls['supplierName'].setValue(this.supplierUpdateData.data.supplierName);
            this.supplierForm.controls['gstIn'].setValue(this.supplierUpdateData.data.gstIn);
            this.supplierForm.controls['phoneNumber'].setValue(this.supplierUpdateData.data.phoneNumber);
            this.supplierForm.controls['cityName'].setValue(this.supplierUpdateData.data.location.cityName);
            this.supplierForm.controls['companyName'].setValue(this.supplierUpdateData.data.location.companyName);
        }
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.getCompanyList();
        this.getlocationList();
    }

    onSubmit() {
        if (this.supplierUpdateData?.data.id != null) {
            // this.updateCustomer();
        } else {
            this.saveSupplier();
        }
    }

    saveSupplier() {
        let data = {
            supplierName: this.supplierForm.controls.supplierName.value,
            gstIn: this.supplierForm.controls.gstIn.value,
            location: this.supplierForm.controls.cityName.value,
            company: this.supplierForm.controls.companyName.value,
            phoneNumber: this.supplierForm.controls.phoneNumber.value,
        };

        this.supplierService.createSupplier(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Supplier Successfully Created..!';
                // this.getCompanyList();
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });

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
    //     this.errorMsg = error.error.errorMessage; "Company Unsuccessfully Updated..";
    //   })
    // }

    getlocationList() {
        this.location.getLocationList().subscribe(res => {
            this.citiesList = res;
        });
    }

    getCompanyList() {
        this.companyService.getCompanyList().subscribe(res => {
            this.companies = res;
        });
    }
}
