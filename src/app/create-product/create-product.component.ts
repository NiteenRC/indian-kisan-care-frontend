import { Observable } from 'rxjs';
import { Category } from '../_model/category';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-create-productt',
  templateUrl: './create-product.component.html'
})

export class CreateProductComponent implements OnInit {
  categories: Observable<Category[]>;

  product: Product = new Product();
  submitted = false;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.productService
      .createProduct(this.product).subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.product)
    this.save();
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}

