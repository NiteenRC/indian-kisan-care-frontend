import { Observable } from 'rxjs';
import { ProductService } from './../_services/product.service';
import { Product } from './../_model/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Category } from '../_model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  [x: string]: any;
  products = null;
  categories: Observable<Category[]>;
  title = 'modal2';
  editProfileForm: FormGroup;
  product: Product = new Product();
  dtOptions = null;
  pipeData = null;
  p = 1;

  constructor(private productService: ProductService,
              private modalService: NgbModal,
              private categoryService: CategoryService,
              public fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.reloadData();

    this.editProfileForm = this.fb.group({
      productID:'',
      productName: '',
      price: '',
      qty: '',
      category: ''
    });
  }

  reloadData() {
    this.productService.getProductsList().subscribe(response => {
      this.products = response;
    });
    this.categories = this.categoryService.getCategoryList();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.modalService.dismissAll();
      }, error => console.log(error));
  }

  openModal(targetModal: any, product) {
    this.product = product;
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
   
  }

  sort(e) {
    // this.product =  ?
  }

  closeModal() {
    this.reloadData();
    this.modalService.dismissAll();
  }
}
