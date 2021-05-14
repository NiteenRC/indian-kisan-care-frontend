import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SupplierService} from 'src/app/_services/supplier.service';
import {CreateSupplierComponent} from '../create-supplier/create-supplier.component';

@Component({
    selector: 'app-supplier-list',
    templateUrl: './supplier-list.component.html',
    styleUrls: ['./supplier-list.component.css'],

})
export class SupplierListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['supplierName', 'GSTIN', 'company', 'location', 'phoneNumber', 'id'];
    dataSource;

    constructor(public dialog: MatDialog, private supplierService: SupplierService) {
    }

    ngOnInit(): void {
        this.getSupplierList();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateSupplierComponent, {
            width: '550px',
            // data: {name: this.name, animal: this.animal}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getSupplierList();
        });
    }

    getSupplierList() {
        this.supplierService.getSupplierList()
            .subscribe(data => {
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource = data;
            }, error => console.log(error));
    }

    deleteSupllier(event) {
        this.supplierService.deleteSupplier(event.id).subscribe(
            response => {
                this.getSupplierList();
            },
            error => console.log(error));
    }

    updateSuppliers(updateSupplier): void {
        const dialogRef = this.dialog.open(CreateSupplierComponent, {
            width: '550px',
            data: {data: updateSupplier}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getSupplierList();
        });
    }
}
