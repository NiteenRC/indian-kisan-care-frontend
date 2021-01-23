
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Location } from 'src/app/_model/location';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  locationForm: FormGroup;
  locations: Observable<Location[]>;
  location: Location = new Location();
  locationUpdateData: any;
  successMsg: any;
  errorMsg: any;
  constructor(private locationService: LocationService,
    public dialogRef: MatDialogRef<CreateLocationComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.locationUpdateData = data;
    this.locationForm = new FormGroup({
      cityName: new FormControl(null, [Validators.required])
    })
    if (data != null) {
      this.locationForm.controls["cityName"].setValue(this.locationUpdateData.data.cityName);
    }
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.locationUpdateData?.data.id != null) {
      this.updateLocation();
    } else {
      this.saveLocation();
    }
  }
  saveLocation() {
    let data = {
      locationID: this.locationUpdateData?.data.id,
      cityName: this.locationForm.controls.cityName.value
    }
    this.locationService.createLocation(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Location Successfully Created..!";
        this.getLocationList();
        this.closeModal();
      }
    }, error => {
      this.errorMsg = "Location Unsuccessfully Created.."
    })

  }
  updateLocation() {
    let data = {
      locationID: this.locationUpdateData?.data.id,
      cityName: this.locationForm.controls.cityName.value
    }
    this.locationService.updateLocation(data).subscribe(res => {
      if (res != null) {
        this.successMsg = "Location Successfully Updated..!";
        this.getLocationList();
        this.closeModal();
      }
    }, error => {
      this.errorMsg = "Location Unsuccessfully Updated..";
    })
  }

  getLocationList() {
    this.locationService.getLocationList().subscribe(data => {
    }, error => console.log(error));
  }
}
