import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      qty: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      
    })
  }
  save() {

    let data={
      productName:this.productForm.controls.productName.value,
      price: this.productForm.controls.price.value,
      qty: this.productForm.controls.qty.value,
      category: this.productForm.controls.category.value,
    }
    this.productService
      .createProduct(data).subscribe(data => {
        console.log(data);
      },
        error => console.log(error));
  }
}
