import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Category } from 'src/app/_model/category';
import { Product } from 'src/app/_model/product';
import { CategoryService } from 'src/app/_services/category.service';
import { CompanyService } from 'src/app/_services/company.service';
import { ProductService } from 'src/app/_services/product.service';
import { CreateProductComponent } from '../create-product/create-product.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['productID', 'productName', 'price', 'category','qty','productDesc'];
  dataSource ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {

   this.getProductList();
  }
  constructor(public dialog: MatDialog,private productService: ProductService, private companyService: CompanyService) { }
  getProductList() {
    this.productService.getProductsList().subscribe(res => {
      this.dataSource = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    }, error => console.log(error));
  }

  createProduct(updateProduct):void{
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '550px',
      data:updateProduct
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}



