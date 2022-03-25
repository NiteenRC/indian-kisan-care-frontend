import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { BankService } from '../../_services/bank.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-bank-info',
  templateUrl: './update-bank-info.component.html',
  styleUrls: ['./update-bank-info.component.css']
})
export class UpdateBankInfoComponent implements OnInit {
  showMsg: boolean = false;
  form: any = {};
  errorMessage = '';
  roles: string[] = [];
  registerForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  bankDetails: any;
  favoriteSeason: string;

  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;

  constructor(private bankService: BankService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getBankDetails();

    this.registerForm = new FormGroup({
      'bankName': new FormControl(null),
      'branchName': new FormControl(null),
      'accountNo': new FormControl(null),
      'ifscCode': new FormControl(null),
      'gstNo': new FormControl(null),
      'panNo': new FormControl(null),
      'brandName': new FormControl(null),
      'phoneNumber': new FormControl(null),
      'email': new FormControl(null),
    });
  }

  getBankDetails() {
    this.bankService.getBankDetails(1).subscribe(data => {
      this.bankDetails = data;
      if (this.bankDetails != null) {
        this.registerForm.controls['bankName'].setValue(this.bankDetails.bankName);
        this.registerForm.controls['branchName'].setValue(this.bankDetails.branchName);
        this.registerForm.controls['accountNo'].setValue(this.bankDetails.accountNo);
        this.registerForm.controls['ifscCode'].setValue(this.bankDetails.ifscCode);
        this.registerForm.controls['gstNo'].setValue(this.bankDetails.gstNo);
        this.registerForm.controls['brandName'].setValue(this.bankDetails.brandName);
        this.registerForm.controls['phoneNumber'].setValue(this.bankDetails.phoneNumber);
        this.registerForm.controls['panNo'].setValue(this.bankDetails.panNo);
        this.registerForm.controls['email'].setValue(this.bankDetails.email);
        this.dbImage = this.viewImage();
      }
    });
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {
    if (this.uploadedImage === undefined) {
      return;
    }
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);

    this.http.post('http://localhost:8080/bank/image', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
  }

  viewImage() {
    this.http.get('http://localhost:8080/bank/image')
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }

  onSubmit() {
    let data = {
      "bankName": this.registerForm.controls.bankName.value ? this.registerForm.controls.bankName.value.toUpperCase() : '',
      "branchName": this.registerForm.controls.branchName.value,
      "accountNo": this.registerForm.controls.accountNo.value,
      "ifscCode": this.registerForm.controls.ifscCode.value ? this.registerForm.controls.ifscCode.value.toUpperCase() : '',
      "phoneNumber": this.registerForm.controls.phoneNumber.value,
      "gstNo": this.registerForm.controls.gstNo.value ? this.registerForm.controls.gstNo.value.toUpperCase() : '',
      "panNo": this.registerForm.controls.panNo.value ? this.registerForm.controls.panNo.value.toUpperCase() : '',
      "brandName": this.registerForm.controls.brandName.value ? this.registerForm.controls.brandName.value.toUpperCase() : '',
      "email": this.registerForm.controls.email.value,
    };

    this.imageUploadAction();

    this.bankService.createBank(data).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        window.location.reload();
        this.viewImage();

        this.showMsg = true;
        setTimeout(() => {
          this.showMsg = false;
        }, 2000);
      },
      err => {
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true;
      }
    );
  }
}
