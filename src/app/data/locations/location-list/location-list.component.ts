import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/_services/customer.service';
import { LocationService } from 'src/app/_services/location.service';
import { CreateLocationComponent } from '../create-location/create-location.component';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['cityName', 'id'];
    dataSource;

    constructor(public dialog: MatDialog, private customerService: CustomerService, private locationService: LocationService) {
    }

    ngOnInit(): void {
        this.getLocationList();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateLocationComponent, {
            width: '550px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getLocationList();
        });
    }

    updateLocationModal(updateLocationModal): void {
        const dialogRef = this.dialog.open(CreateLocationComponent, {
            width: '550px',
            disableClose: true,
            data: { data: updateLocationModal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getLocationList();
        });
    }

    getLocationList() {
        this.locationService.getLocationList().subscribe(data => {
            this.dataSource = data;
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
        }, error => console.log(error));
    }

    deleteLocation(event) {
        this.locationService.deleteLocation(event.id).subscribe(
            response => {
                this.getLocationList();
            },
            error => {
                console.log(error)
                alert(JSON.parse(error.error).errorMessage);
            });
    }
}
