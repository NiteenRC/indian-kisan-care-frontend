import { SalesOrderService } from '../../_services/sales-order.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { PurchaseOrderService } from 'src/app/_services/purchase-order.service';

@Component({
  selector: 'app-current-stock',
  templateUrl: './current-stock.component.html',
  styleUrls: ['./current-stock.component.css']
})
export class CurrentStockComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'price', 'qtyOrdered', 'totalPurchaseAmount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  dataSourceProduct: any;
  listOfCategories = [];
  products: Product[];
  filteredProducts: Observable<Product[]>;
  productForm: FormGroup;

  searchText: string;
  startDate: string;
  endDate: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private purchaseOrderService: PurchaseOrderService, private productService: ProductService) {
    this.productForm = new FormGroup({
      productName: new FormControl(null),
      totalProfit: new FormControl(null),
      totalQtySold: new FormControl(null)
    })
  }

  ngOnInit(): void {
    //this.getSalesOrderList(1, '0', '0');
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
      this.searchText = null;
      this.getSalesOrderList(null, this.startDate, this.endDate);
      return this.products;
    }
    const filterValue = value.toLowerCase();
    return this.products.filter(option => option.productName.toLowerCase().includes(filterValue));
  }

  @ViewChild('searchProduct') searchProduct: ElementRef;

  selectedProduct(selectedProduct: string) {
    //this.productForm.controls['productName'].setValue(null);
    this.searchProduct.nativeElement.blur();
    this.getSalesOrderList(selectedProduct, this.startDate, this.endDate);
    this.searchText = selectedProduct;
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
    this.startDate = null;
    this.endDate = null;
    this.getSalesOrderList(this.searchText, null, null);
  }

  searchData() {
    const searchText = this.searchText;
    const { start, end } = this.range.value || {};

    if (start && end) {
      this.startDate = start.getTime() + 86399999;
      this.endDate = end.getTime() + 86399999;
      if (this.searchText == undefined) {
        this.searchText = null;
      }
      this.getSalesOrderList(this.searchText, this.startDate, this.endDate);
    };
  }

  getSalesOrderList(productName, startDate: string, endDate: string) {
    // if(startDate != "0" && endDate != "0"){
    if (startDate == undefined || endDate == undefined) {
      startDate = null;
      endDate = null;
    }
    //this.searchText = productName; 
    this.purchaseOrderService.getCurrentStock(productName).subscribe(res => {
      this.dataSource = res.productDetails;
      this.dataSource = new MatTableDataSource(res.productDetails);
      this.dataSource.paginator = this.paginator;
      //this.clearDate();
      this.productForm.controls['totalProfit'].setValue(res.totalPurchasePrice.toLocaleString( 'en-IN') || 0);
      this.productForm.controls['totalQtySold'].setValue(res.totalQtyPurchased.toLocaleString( 'en-IN') || 0);


    }, error => console.log(error));
    // }
  }
}
