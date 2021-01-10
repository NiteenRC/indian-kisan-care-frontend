import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSupplierComponent } from 'src/app/suppliers/create-supplier/create-supplier.component';
import { CategoryService } from 'src/app/_services/category.service';
import { CompanyService } from 'src/app/_services/company.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';
import { CreateCategoryComponent } from '../create-category/create-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['categoryName', 'categoryDesc', 'categoryID'];
  dataSource;
  constructor(private categoryService: CategoryService,public dialog: MatDialog,private customerService: CustomerService, private companyService: CompanyService) { }

  ngOnInit(): void {

    this.getCompanyList();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '550px',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  getCompanyList() { 
    this.categoryService.getCategoryList()
      .subscribe(data => {
        this.dataSource = data;
        
      }, error => console.log(error));
  }

}
