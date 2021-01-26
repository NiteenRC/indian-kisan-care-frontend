import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/_services/category.service';
import { CompanyService } from 'src/app/_services/company.service';
import { LocationService } from 'src/app/_services/location.service';
import { SupplierService } from 'src/app/_services/supplier.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  listOfCategories = [];
  supplierForm: FormGroup;
  locationForm: FormGroup;
  supplierUpdateData: any;
  successMsg: any;
  errorMsg: any;
  citiesList: any;
  companies: any;

  constructor(private supplierService: SupplierService, private location: LocationService,
    private companyService: CompanyService,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.supplierUpdateData = data;

    this.supplierForm = new FormGroup({
      cityName: new FormControl(null, [Validators.required]),
      supplierName: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10), Validators.maxLength(10)]),
    })

    this.locationForm = new FormGroup({
      cityName: new FormControl(null, [Validators.required]),
    })

    if (data != null) {
      this.supplierForm.controls["supplierName"].setValue(this.supplierUpdateData.data.supplierName);
      this.supplierForm.controls["phoneNumber"].setValue(this.supplierUpdateData.data.phoneNumber);
      this.supplierForm.controls["cityName"].setValue(this.supplierUpdateData.data.location.cityName);
      this.supplierForm.controls["companyName"].setValue(this.supplierUpdateData.data.location.companyName);
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.getCategoryList();
    this.getlocationList();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
      location: this.supplierForm.controls.cityName.value,
      company: this.supplierForm.controls.companyName.value,
      phoneNumber: this.supplierForm.controls.phoneNumber.value,
    }

    this.supplierService.createSupplier(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Supplier Successfully Created..!";
        // this.getCategoryList();
        this.closeModal();
      }
    }, error => {
      this.errorMsg = error.error.errorMessage;
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
  //       this.getCategoryList();
  //       this.closeModal();
  //     }
  //   }, error => {
  //     this.errorMsg = error.error.errorMessage; "Company Unsuccessfully Updated..";
  //   })
  // }

  getlocationList() {
    this.location.getLocationList().subscribe(res => {
      this.citiesList = res;
    })
  }

  getCategoryList() {
    this.filteredOptions = this.categoryService.getCategoryList();
  }

}
