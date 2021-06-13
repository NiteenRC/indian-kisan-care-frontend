import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/_services/category.service';
import { CreateCategoryComponent } from '../create-category/create-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['categoryName', 'categoryDesc', 'id'];
  dataSource;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '550px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getCategoryList();
    });
  }

  updateCategory(updateCategory): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '550px',
      disableClose: true,
      data: { data: updateCategory }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getCategoryList();
    });
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.dataSource = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    }, error => console.log(error));
  }

  deleteCategory(event) {
    this.categoryService.deleteCategory(event.id).subscribe(
      response => {
        this.getCategoryList();
      },
      error => {
        console.log(JSON.parse(error.error).errorMessage);
        alert(JSON.parse(error.error).errorMessage);
      });
  }
}
