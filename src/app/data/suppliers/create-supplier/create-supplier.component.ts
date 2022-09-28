import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CompanyService } from 'src/app/_services/company.service';
import { LocationService } from 'src/app/_services/location.service';
import { SupplierService } from 'src/app/_services/supplier.service';

@Component({
    selector: 'app-create-supplier',
    templateUrl: './create-supplier.component.html',
    styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
    listOfCategories = [];
    options: Location[] = [];
    filteredOptions: Observable<Location[]>;
    supplierForm: FormGroup;
    locationForm: FormGroup;
    supplierUpdateData: any;
    successMsg: any;
    errorMsg: any;
    citiesList: any;
    companies: any;

    constructor(private supplierService: SupplierService, private locationService: LocationService,
        private companyService: CompanyService,
        public dialogRef: MatDialogRef<CreateSupplierComponent>,
        @Inject(MAT_DIALOG_DATA) private data) {
        this.supplierUpdateData = data;

        this.supplierForm = new FormGroup({
            cityName: new FormControl(null),
            supplierName: new FormControl(null, [Validators.required]),
            gstIn: new FormControl(null),
            //companyName: new FormControl(null),
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
            this.supplierForm.controls['cityName'].setValue(this.supplierUpdateData.location?.cityName);
            //this.supplierForm.controls['companyName'].setValue(this.supplierUpdateData.company);
        }
    }

    closeModal(): void {
            this.dialogRef.close();
    }

    ngOnInit(): void {
        this.getCompanyList();
        this.fetchData();
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
        const selectedCategoryName = this.supplierForm.controls.cityName.value;
        let location = this._findCategory(selectedCategoryName);

        if (location == undefined) {
            location = { 'cityName': selectedCategoryName };
        }

        let data = {
            supplierName: this.supplierForm.controls.supplierName.value,
            gstIn: this.supplierForm.controls.gstIn.value,
            location,
            //company: this.supplierForm.controls.companyName.value,
            phoneNumber: this.supplierForm.controls.phoneNumber.value,
        };

        this.supplierService.createSupplier(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Supplier Successfully Created..!';
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });

    }

    updateSupplier() {
        const selectedCategoryName = this.supplierForm.controls.cityName.value;
        let location = this._findCategory(selectedCategoryName);

        if (location == undefined) {
            location = { 'cityName': selectedCategoryName };
        }

        let data = {
            id: this.supplierUpdateData?.id,
            supplierName: this.supplierForm.controls.supplierName.value,
            gstIn: this.supplierForm.controls.gstIn.value,
            location,
            phoneNumber: this.supplierForm.controls.phoneNumber.value,
            //company: this.supplierForm.controls.companyName.value,
        };

        this.supplierService.updateSupplier(data).subscribe(res => {
            if (res != null) {
                this.successMsg = "Supplier Successfully Updated..!";
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        })
    }

    getCompanyList() {
        this.companyService.getCompanyList().subscribe(res => {
            this.companies = res;
        });
    }

    fetchData() {
        this.locationService.getLocationList().subscribe(data => {
            //this.citiesList = res;
            this.listOfCategories = data;
            this._valueChangesListner();
        });
    }

    private _filter(value: string): Location[] {
        if (!value) {
            return this.listOfCategories;
        }
        const filterValue = value.toLowerCase();
        const supplierList = this.listOfCategories.filter(option => option.cityName.toLowerCase().includes(filterValue))
        return supplierList;
    }

    private _findCategory(categoryName: string) {
        return this.listOfCategories.find(option => option?.cityName === categoryName);
    }

    private _valueChangesListner() {
        this.filteredOptions = this.supplierForm.controls['cityName'].valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }
}
