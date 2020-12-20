
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./menu/shared.module";

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { LocationComponent } from './location/location.component';
import { CompanyComponent } from './company/company.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SortPipe } from './pipe/sort.pipe';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MobileMenuComponent } from './menu/mobile-menu/mobile-menu.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CreateCategoryComponent,
    PurchaseOrderComponent,
    CustomerComponent,
    SupplierComponent,
    LocationComponent,
    CompanyComponent,
    SalesOrderComponent,
    BalanceSheetComponent,

    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SortPipe,
    NotfoundComponent,
    MobileMenuComponent
  ],
  imports: [
    TableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
