import { Component, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';
import { Location } from '../_model/location';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {
  locations: Observable<Location[]>;
  id: number;
  location: Location = new Location();
  router: any;
  submitted = false;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.locations = this.locationService.getLocationList();
  }

  newLocation(): void {
    this.location = new Location();
  }

  save() {
    this.locationService
      .createLocation(this.location).subscribe(data => {
        console.log(data);
        this.location = new Location();
        this.reloadData();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['/locations']);
  }

  deleteLocation(id: number) {
    this.locationService.deleteLocation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getLocation(id: number) {
    this.submitted = true;
    this.locationService.getLocation(id)
      .subscribe(data => {
        console.log(data);
        this.location = data;
        this.gotoList();
      }, error => console.log(error));
  }

  updateLocation(location: Location) {
    this.locationService.updateLocation(location)
      .subscribe(data => {
        console.log(data);
        this.location = new Location();
        this.reloadData();
      }, error => console.log(error));
  }
}
