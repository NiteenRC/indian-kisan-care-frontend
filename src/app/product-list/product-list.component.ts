import { Observable } from 'rxjs';
import { ProductService } from './../_services/product.service';
import { Product } from './../_model/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CategoryService } from '../_services/category.service';
import { Category } from '../_model/category';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { JsonpClientBackend } from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['productID', 'productName', 'price', 'category','qty','productDesc'];
  dataSource ;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matsort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  categories: Observable<Category[]>;

  product: Product = new Product();
  submitted = false;
  [x: string]: any;
  products = null;
  
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
              private router: Router) { 
              //  this.dataSource.paginator = this.paginator;
              }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
   // this.dataSource = new MatTableDataSource(this.products);
  //  this.dataSource.paginator = this.paginator;
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
private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  reloadData() {
    this.productService.getProductsList().subscribe(response => {
      this.products = response;
     // this.dataSource=this.products;
      this.dataSource = new MatTableDataSource(response);
     // this.ELEMENT_DATA = response;
      this.dataSource.paginator = this.paginator;
     // this.dataSource.sort = this.sort;
      //console.log("json resp"+JSON.stringify(this.products))
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

  addProduct(targetModal: any, product) {
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

  // reloadData() {
  //   this.categories = this.categoryService.getCategoryList();
  // }

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
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];