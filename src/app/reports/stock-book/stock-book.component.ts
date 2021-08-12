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

  searchText: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private salesOrderService: SalesOrderService, private productService: ProductService) {
    this.productForm = new FormGroup({
      productName: new FormControl(null),
      totalProfit: new FormControl(),
      totalQtySold: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getSalesOrderList('0', '0');
    //alert('Please select dropdown')

    this.productService.getProductsList().subscribe(data => {
      this.products = data;
      this._valueChangesListner();
    });

    this.range.valueChanges.subscribe(dateRange => {
      if (this.range.valid) {
        this.searchData();
      }
    })
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

  selectedProduct(selectedProduct: string) {
    //this.productForm.controls['productName'].setValue(null);
    this._findProduct(selectedProduct);
    //this.getSalesOrderList('0','0');
  }

  private _findProduct(value: string): Product {
    return this.products.find(option => option.productName === value);
  }

  private _setData(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  clearDate() {
    this.range.reset();
  }

  searchData() {
    const searchText = this.searchText;
    const { start, end } = this.range.value || {};

    if (start && end) {
      const startTime = start.getTime();
      const endTime = end.getTime() + 86399999;
      this.getSalesOrderList(startTime, endTime);
    };
  }

  getSalesOrderList(startDate: string, endDate: string) {
    this.salesOrderService.getStockBookByDate(startDate, endDate).subscribe(res => {
      this._setData(res.stockBooks);
      this.productForm.controls['totalProfit'].setValue(res.totalProfit);
      this.productForm.controls['totalQtySold'].setValue(res.totalQtySold);
    }, error => console.log(error));
  }
}
