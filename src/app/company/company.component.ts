import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../_services/company.service';
import { Company } from '../_model/company';
import { Location } from '../_model/location';
import { Observable } from 'rxjs';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
  companies: Observable<Company[]>;
  locations: Observable<Location[]>;
  company: Company = new Company();
  location: Location = new Location();
  router: any;
  submitted = false;
  selectedgroup: any;

  constructor(private companyService: CompanyService, private locationService: LocationService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.companies = this.companyService.getCompanyList();
    this.locations = this.locationService.getLocationList();
  }

  save() {
    this.companyService
      .createCompany(this.company).subscribe(data => {
        console.log(data);
        this.company = new Company();
        this.reloadData();
      },
        error => console.log(error));
  }

  selectedValue(val: any) {
    console.log(val);
    this.selectedgroup = val;
  }

  onSubmit() {
    this.save();
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getCompany(id: number) {
    this.submitted = true;
    this.companyService.getCompany(id)
      .subscribe(data => {
        console.log(data);
        this.company = data;
      }, error => console.log(error));
  }

  updateCompany(company: Company) {
    this.companyService.updateCompany(company)
      .subscribe(data => {
        console.log(data);
        this.company = new Company();
        this.reloadData();
      }, error => console.log(error));
  }
}
