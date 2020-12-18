import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../_services/supplier.service';
import { CompanyService } from '../_services/company.service';
import { Supplier } from '../_model/supplier';
import { Location } from '../_model/location';
import { Observable } from 'rxjs';
import { LocationService } from '../_services/location.service';
import { Company } from '../_model/company';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html'
})
export class SupplierComponent implements OnInit {
  suppliers: Observable<Supplier[]>;
  locations: Observable<Location[]>;
  companies: Observable<Company[]>;
  supplier: Supplier = new Supplier();
  location: Location = new Location();
  router: any;
  submitted = false;

  constructor(private supplierService: SupplierService, private locationService: LocationService,
              private companyService: CompanyService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.suppliers = this.supplierService.getSupplierList();
    this.locations = this.locationService.getLocationList();
    this.companies = this.companyService.getCompanyList();
  }

  save() {
    this.supplierService
      .createSupplier(this.supplier).subscribe(data => {
        console.log(data);
        this.supplier = new Supplier();
        this.reloadData();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.save();
  }

  deleteSupplier(id: number) {
    this.supplierService.deleteSupplier(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getSupplier(id: number) {
    this.submitted = true;
    this.supplierService.getSupplier(id)
      .subscribe(data => {
        console.log(data);
        this.supplier = data;
      }, error => console.log(error));
  }

  updateSupplier(supplier: Supplier) {
    this.supplierService.updateSupplier(supplier)
      .subscribe(data => {
        console.log(data);
        this.supplier = new Supplier();
        this.reloadData();
      }, error => console.log(error));
  }
}
