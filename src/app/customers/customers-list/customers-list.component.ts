import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from 'src/app/_services/company.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['customerName', 'phoneNumber', 'customerID'];
  dataSource;
  constructor(public dialog: MatDialog,private customerService: CustomerService, private companyService: CompanyService) { }
  ngOnInit(): void {
    this.getCompanyList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  updateCustomer(updateCustomer):void{
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '550px',
      data: {data: updateCustomer}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getCompanyList() { 
    this.customerService.getCustomerList().subscribe(data => {
        this.dataSource = data;  
        this.dataSource = new MatTableDataSource(data);
         this.dataSource.paginator = this.paginator;
      }, error => console.log(error));
  }
  deleteCompany(event) {
    this.companyService.deleteCompany(event.id).subscribe(
        response => {
          this.getCompanyList();
        },
        error => console.log(error));
  }
}


