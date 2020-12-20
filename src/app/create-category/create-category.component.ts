import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { Category } from '../_model/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit {
  categories: Observable<Category[]>;
  id: number;
  category: Category = new Category();
  router: any;
  submitted = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }

  newCategory(): void {
    this.category = new Category();
  }

  save() {
    this.categoryService
      .createCategory(this.category).subscribe(data => {
        console.log(data);
        this.category = new Category();
        this.reloadData();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Categories']);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getCategory(id: number) {
    this.submitted = true;
    this.categoryService.getCategory(id)
      .subscribe(data => {
        console.log(data);
        this.category = data;
        this.gotoList();
      }, error => console.log(error));
  }

  updateCategory(category: Category) {
    this.categoryService.updateCategory(category)
      .subscribe(data => {
        console.log(data);
        this.category = new Category();
        this.reloadData();
      }, error => console.log(error));
  }
}
