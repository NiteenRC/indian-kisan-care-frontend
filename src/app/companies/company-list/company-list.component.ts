import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/_services/company.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';
import { CreateCompanyComponent } from '../create-company/create-company.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  displayedColumns: string[] = ['companyName', 'phoneNumber', 'id'];
  dataSource;
  constructor(public dialog: MatDialog,private customerService: CustomerService, private companyService: CompanyService) { }

  ngOnInit(): void {

    this.getCompanyList();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCompanyComponent, {
      width: '550px',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  getCompanyList() { 
    this.companyService.getCompanyList()
      .subscribe(data => {
        console.log(data);
        this.dataSource = data;
        
      }, error => console.log(error));
  }

}
