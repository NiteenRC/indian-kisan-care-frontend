import { Location } from './../_model/location';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { Customer } from '../_model/customer';
import { Observable } from 'rxjs';
import { LocationService } from '../_services/location.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  customers: Observable<Customer[]>;
  locations: Observable<Location[]>;
  customer: Customer = new Customer();
  location: Location = new Location();
  router: any;
  submitted = false;
  selectedgroup: any;
  option: string;

  //work in progress
  myControl = new FormControl();
  options: Array<Location> = [];
  filteredOptions: Observable<Location[]>;

  private _filter(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.cityName.toLowerCase().includes(filterValue));
  }
  //

  constructor(private customerService: CustomerService, private locationService: LocationService) { }

  ngOnInit() {
    this.reloadData();
    this.dropDownAutoComplete();
  }

  //work in progress
  dropDownAutoComplete() {
    this.locations.subscribe(data => {
      console.log(data);
      data.forEach(x => {
        this.options.push(x);
      });

      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    },
      error => console.log(error));
  }

  reloadData() {
    this.customers = this.customerService.getCustomerList();
    this.locations = this.locationService.getLocationList();
  }

  save() {
    this.customer.location.cityName = this.option;
    this.customerService
      .createCustomer(this.customer).subscribe(data => {
        console.log(data);
        this.customer = new Customer();
        this.reloadData();
      },
        error => console.log(error));
  }

  changeOption(option) {
    alert(option);
  }

  selectedValue(val: any) {
    console.log(val);
    this.selectedgroup = val;
  }

  onSubmit() {
    this.save();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getCustomer(id: number) {
    this.submitted = true;
    this.customerService.getCustomer(id)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
      }, error => console.log(error));
  }

  updateCustomer(customer: Customer) {
    this.customerService.updateCustomer(customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
        this.reloadData();
      }, error => console.log(error));
  }
}
