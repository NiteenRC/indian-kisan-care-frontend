import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from 'src/app/_services/company.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { CreateCompanyComponent } from '../create-company/create-company.component';

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['companyName', 'phoneNumber', 'id'];
    dataSource;

    constructor(public dialog: MatDialog, private customerService: CustomerService, private companyService: CompanyService) {
    }

    ngOnInit(): void {
        this.getCompanyList();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateCompanyComponent, {
            width: '550px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getCompanyList();
        });
    }

    updateComapny(updateComapny): void {
        const dialogRef = this.dialog.open(CreateCompanyComponent, {
            width: '550px',
            disableClose: true,
            data: { data: updateComapny }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getCompanyList();
        });
    }

    getCompanyList() {
        this.companyService.getCompanyList().subscribe(data => {
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
            error => {
                console.log(error)
                alert(JSON.parse(error.error).errorMessage);
            });
    }
}
