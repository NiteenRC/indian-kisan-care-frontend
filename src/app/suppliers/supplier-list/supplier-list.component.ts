import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from 'src/app/_services/company.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';
import { SupplierService } from 'src/app/_services/supplier.service';
import { CreateSupplierComponent } from '../create-supplier/create-supplier.component';


@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  
})
export class SupplierListComponent implements OnInit {

  
  displayedColumns: string[] = ['supplierName', 'phoneNumber', 'supplierID'];
  dataSource;
  constructor(public dialog: MatDialog,private customerService: CustomerService, private supplierService: SupplierService) { }

  ngOnInit(): void {

    this.getSupplierList();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSupplierComponent, {
      width: '550px',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  getSupplierList() { 
    this.supplierService.getSupplierList()
      .subscribe(data => {
        console.log(data);
        this.dataSource = data;
        
      }, error => console.log(error));
  }
}
