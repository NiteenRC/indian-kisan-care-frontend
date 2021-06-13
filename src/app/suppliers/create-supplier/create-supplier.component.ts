import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/_services/company.service';
import { LocationService } from 'src/app/_services/location.service';
import { SupplierService } from 'src/app/_services/supplier.service';

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
            cityName: new FormControl(null),
            supplierName: new FormControl(null, [Validators.required]),
            gstIn: new FormControl(null),
            companyName: new FormControl(null),
            phoneNumber: new FormControl(null),
        });

        this.locationForm = new FormGroup({
            cityName: new FormControl(null, [Validators.required]),
        });

        if (data != null) {
            this.supplierUpdateData = data?.data;
            this.supplierForm.controls['supplierName'].setValue(this.supplierUpdateData.supplierName);
            this.supplierForm.controls['gstIn'].setValue(this.supplierUpdateData.gstIn);
            this.supplierForm.controls['phoneNumber'].setValue(this.supplierUpdateData.phoneNumber);
            this.supplierForm.controls['cityName'].setValue(this.supplierUpdateData.location);
            this.supplierForm.controls['companyName'].setValue(this.supplierUpdateData.company);
        }
    }

    closeModal(): void {
        if (this.supplierForm.valid || this.supplierForm.controls.supplierName.value === null) {
            this.dialogRef.close();
        }
    }

    ngOnInit(): void {
        this.getCompanyList();
        this.getlocationList();
    }

    onSubmit() {
        if (this.supplierForm.valid) {
            if (this.supplierUpdateData?.id != null) {
                this.updateSupplier();
            } else {
                this.saveSupplier();
            }
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
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });

    }

    updateSupplier() {
        let data = {
            id: this.supplierUpdateData?.id,
            supplierName: this.supplierForm.controls.supplierName.value,
            gstIn: this.supplierForm.controls.gstIn.value,
            location: this.supplierForm.controls.cityName.value,
            phoneNumber: this.supplierForm.controls.phoneNumber.value,
            company: this.supplierForm.controls.companyName.value,
        };

        this.supplierService.updateSupplier(data).subscribe(res => {
            if (res != null) {
                this.successMsg = "Supplier Successfully Updated..!";
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        })
    }

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
