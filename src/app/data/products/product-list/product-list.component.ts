import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { CompanyService } from 'src/app/_services/company.service';
import { ProductService } from 'src/app/_services/product.service';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    super_admin = AppComponent.role_super_admin;
    admin = AppComponent.role_admin;
    user = AppComponent.role_user;
    displayedColumns: string[];
    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog, private productService: ProductService, private companyService: CompanyService) {
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit(): void {
        this.displayColumns();
        this.getProductList();
    }

    displayColumns() {
        if (this.super_admin || this.admin) {
            this.displayedColumns = ['SNo', 'productName', 'qty', 'salePrice', 'price', 'GST', 'productDesc'];
        } else {
            this.displayedColumns = ['SNo', 'productName', 'qty', 'salePrice', 'GST', 'productDesc'];
        }
    }

    getProductList() {
        this.productService.getProductsList().subscribe(res => {
            this.dataSource = res;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
        }, error => console.log(error));
    }

    createProduct(): void {
        const dialogRef = this.dialog.open(CreateProductComponent, {
            width: '550px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getProductList();
        });
    }

    updateProduct(updateProduct): void {
        const dialogRef = this.dialog.open(CreateProductComponent, {
            width: '550px',
            disableClose: true,
            data: { data: updateProduct }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getProductList();
        });
    }

    deleteProduct(productId) {
        this.productService.deleteProduct(productId).subscribe(
            response => {
                this.getProductList();
            },
            error => console.log(error));
    }
}



