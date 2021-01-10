import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Company } from 'src/app/_model/company';
import { CategoryService } from 'src/app/_services/category.service';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  companyForm:FormGroup;
  companies: Observable<Company[]>;
  company: Company = new Company();
  constructor(private companyService: CompanyService,
    public dialogRef: MatDialogRef<CreateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }
  closeModal(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.companyForm= new FormGroup({
      companyName:new FormControl(null,[Validators.required]),
      phoneNumber:new FormControl(null,[Validators.required]),
    })

    
  }

  saveCompany() {
    this.companyService
      .createCompany(this.company).subscribe(data => {
        console.log(data);
        this.company = new Company();
      },
        error => console.log(error));
  }
}
