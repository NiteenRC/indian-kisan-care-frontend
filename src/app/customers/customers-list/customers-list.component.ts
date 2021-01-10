import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = ['customerName', 'phoneNumber', 'location'];
  dataSource;
  constructor(public dialog: MatDialog,private customerService: CustomerService, private locationService: LocationService) { }

  ngOnInit(): void {

    this.getCustomer();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCustomerComponent, {
      width: '550px',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  getCustomer() { 
    this.customerService.getCustomerList()
      .subscribe(data => {
        console.log(data);
        this.dataSource = data;
        
      }, error => console.log(error));
  }
}


