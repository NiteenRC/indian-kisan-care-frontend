import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';

@Component({
    selector: 'app-create-customer',
    templateUrl: './create-customer.component.html',
    styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
    listOfCategories = [];
    options: Location[] = [];
    filteredOptions: Observable<Location[]>;
    customerForm: FormGroup;
    locationForm: FormGroup;
    customerUpdateData: any;
    successMsg: any;
    errorMsg: any;
    citiesList: any;

    constructor(private customerService: CustomerService, private locationService: LocationService,
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
            this.customerForm.controls['cityName'].setValue(this.customerUpdateData.location.cityName);
        }
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.fetchData();
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
        const selectedCategoryName = this.customerForm.controls.cityName.value;
        let location = this._findCategory(selectedCategoryName);

        if (location == undefined) {
            location = { 'cityName': selectedCategoryName };
        }

        let data = {
            customerName: this.customerForm.controls.customerName.value,
            gstIn: this.customerForm.controls.gstIn.value,
            location,
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
        const selectedCategoryName = this.customerForm.controls.cityName.value;
        let location = this._findCategory(selectedCategoryName);

        if (location == undefined) {
            location = { 'cityName': selectedCategoryName };
        }

        let data = {
            id: this.customerUpdateData?.id,
            customerName: this.customerForm.controls.customerName.value,
            gstIn: this.customerForm.controls.gstIn.value,
            location,
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
        this.filteredOptions = this.customerForm.controls['cityName'].valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }
}
