import { SalesOrderService } from '../../_services/sales-order.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-stock-book',
  templateUrl: './stock-book.component.html',
  styleUrls: ['./stock-book.component.css']
})
export class StockBookComponent implements OnInit {
  displayedColumns: string[] = ['date', 'productName', 'soldStock', 'profit'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  dataSourceProduct: any;
  listOfCategories = [];
  products: Product[];
  filteredProducts: Observable<Product[]>;
  productForm: FormGroup;

  constructor(private salesOrderService: SalesOrderService, private productService: ProductService) {
    this.productForm = new FormGroup({
      productName: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.getSalesOrderList('');
    //alert('Please select dropdown')

    this.productService.getProductsList().subscribe(data => {
      this.products = data;
      this._valueChangesListner();
    });
  }

  private _valueChangesListner() {
    this.filteredProducts = this.productForm.controls['productName'].valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value))
    );
  }

  private _filterProduct(value: string): Product[] {
    if (!value) {
      return this.products;
    }
    const filterValue = value.toLowerCase();
    return this.products.filter(option => option.productName.toLowerCase().indexOf(filterValue) === 0);
  }

  getSalesOrderList(productName: string) {
    this.salesOrderService.getStockBook(productName).subscribe(res => {
      this._setData(res);
    }, error => console.log(error));
  }

  selectedProduct(selectedProduct: string) {
    //this.productForm.controls['productName'].setValue(null);
    this._findProduct(selectedProduct);
    this.getSalesOrderList(selectedProduct)
  }

  private _findProduct(value: string): Product {
    return this.products.find(option => option.productName === value);
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
}
