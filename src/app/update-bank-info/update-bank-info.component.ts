import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MatRadioModule } from '@angular/material/radio';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BankService } from '../_services/bank.service';
@Component({
  selector: 'app-update-bank-info',
  templateUrl: './update-bank-info.component.html',
  styleUrls: ['./update-bank-info.component.css']
})
export class UpdateBankInfoComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  roles: string[] = [];
  registerForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;

  favoriteSeason: string;
  constructor(private bankService: BankService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'bankName': new FormControl(null),
      'branchName': new FormControl(null),
      'accountNo': new FormControl(null),
      'ifscCode': new FormControl(null),
      'gstNo': new FormControl(null),
      'panNo': new FormControl(null),
      'brandName': new FormControl(null),
      'phoneNumber': new FormControl(null),
    });
  }

  onSubmit() {
    let data = {
      "bankName": this.registerForm.controls.bankName.value.toUpperCase(),
      "branchName": this.registerForm.controls.branchName.value,
      "accountNo": this.registerForm.controls.accountNo.value,
      "ifscCode": this.registerForm.controls.ifscCode.value.toUpperCase(),
      "phoneNumber": this.registerForm.controls.phoneNumber.value,
      "gstNo": this.registerForm.controls.gstNo.value.toUpperCase(),
      "panNo": this.registerForm.controls.panNo.value.toUpperCase(),
      "brandName": this.registerForm.controls.brandName.value.toUpperCase(),
    };

    this.bankService.createBank(data).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true;
      }
    );
  }










}
