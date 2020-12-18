import { Product } from '../_model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params.id;

    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data);
        this.product = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['products']);
  }
}
