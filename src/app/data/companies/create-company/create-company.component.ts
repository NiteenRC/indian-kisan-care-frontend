import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {Company} from 'src/app/_model/company';
import {CompanyService} from 'src/app/_services/company.service';

@Component({
    selector: 'app-create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
    companyForm: FormGroup;
    companies: Observable<Company[]>;
    company: Company = new Company();
    companyUpdateData: any;
    successMsg: any;
    errorMsg: any;

    constructor(private companyService: CompanyService,
                public dialogRef: MatDialogRef<CreateCompanyComponent>,
                @Inject(MAT_DIALOG_DATA) private data) {
        this.companyUpdateData = data;

        this.companyForm = new FormGroup({
            companyName: new FormControl(null, [Validators.required]),
            phoneNumber: new FormControl(null),
        });
        if (data != null) {
            this.companyForm.controls['companyName'].setValue(this.companyUpdateData.data.companyName);
            this.companyForm.controls['phoneNumber'].setValue(this.companyUpdateData.data.phoneNumber);
        }
    }

    closeModal(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
    }

    onSubmit() {
        if (this.companyUpdateData?.data.id != null) {
            this.updateCompany();
        } else {
            this.saveCompany();
        }
    }

    saveCompany() {
        let data = {
            id: this.companyUpdateData?.data.id,
            companyName: this.companyForm.controls.companyName.value,
            phoneNumber: this.companyForm.controls.phoneNumber.value
        };
        this.companyService.createCompany(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Company Successfully Created..!';
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });
    }

    updateCompany() {
        let data = {
            id: this.companyUpdateData?.data.id,
            companyName: this.companyForm.controls.companyName.value,
            phoneNumber: this.companyForm.controls.phoneNumber.value
        };
        this.companyService.updateCompany(data).subscribe(res => {
            if (res != null) {
                this.successMsg = 'Company Successfully Updated..!';
                this.closeModal();
            }
        }, error => {
            this.errorMsg = error.error.errorMessage;
        });
    }

    getCompanyList() {
        this.companyService.getCompanyList().subscribe(data => {
        }, error => console.log(error));
    }
}
