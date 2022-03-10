import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_model/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  companies: Observable<Category[]>;
  category: Category = new Category();
  categoryUpdateData: any;
  successMsg: any;
  errorMsg: any;
  constructor(private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CreateCategoryComponent>,

    @Inject(MAT_DIALOG_DATA) private data) {
    this.categoryUpdateData = data;

    this.categoryForm = new FormGroup({
      categoryName: new FormControl(null, [Validators.required]),
      categoryDesc: new FormControl(null),
    })

    if (data != null) {
      this.categoryForm.controls["categoryName"].setValue(this.categoryUpdateData.data.categoryName);
      this.categoryForm.controls["categoryDesc"].setValue(this.categoryUpdateData.data.categoryDesc);
    }
  }

  closeModal(): void {
      this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      if (this.categoryUpdateData?.data.id != null) {
        this.updateCategory();
      } else {
        this.saveCategory();
      }
    }
  }

  saveCategory() {
    let data = {
      id: this.categoryUpdateData?.data.id,
      categoryName: this.categoryForm.controls.categoryName.value,
      categoryDesc: this.categoryForm.controls.categoryDesc.value
    }
    this.categoryService.createCategory(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Category Successfully Created..!";
        this.closeModal();
      }
    }, error => {
      this.errorMsg = error.error.errorMessage;
    })
  }

  updateCategory() {
    let data = {
      id: this.categoryUpdateData?.data.id,
      categoryName: this.categoryForm.controls.categoryName.value,
      categoryDesc: this.categoryForm.controls.categoryDesc.value
    }
    this.categoryService.updateCategory(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Category Successfully Updated..!";
        this.closeModal();
      }
    }, error => {
      this.errorMsg = error.error.errorMessage;
    })
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
    }, error => console.log(error));
  }
}
