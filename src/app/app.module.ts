import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MobileMenuComponent } from './menu/mobile-menu/mobile-menu.component';
import { TableModule} from 'primeng/table';
import { ActionBarComponent } from './menu/action-bar/action-bar.component';
import { ActionBarItemComponent } from './menu/action-bar-item/action-bar-item.component';
import { NavigationBarComponent } from './menu/navigation-bar/navigation-bar.component';
import { DashboardCategoriesComponent } from './pages/dashboard-categories/dashboard-categories.component';
import { DemoMaterialModule } from './material.module';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCompanyComponent } from './companies/create-company/create-company.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CreateSupplierComponent } from './suppliers/create-supplier/create-supplier.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { CreateLocationComponent } from './locations/create-location/create-location.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent,
    CreateCategoryComponent,
    PurchaseOrderComponent,
    CreateCustomerComponent,
    CreateSupplierComponent,
    CreateLocationComponent,
    SalesOrderComponent,
    BalanceSheetComponent,
    ActionBarComponent,
    ActionBarItemComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NotfoundComponent,
    MobileMenuComponent,
    DashboardCategoriesComponent,
    CustomersListComponent,
    CreateCompanyComponent,
    CompanyListComponent,
    CategoryListComponent,
    CreateSupplierComponent,
    SupplierListComponent,
    LocationListComponent,
  ],
  imports: [
    TableModule,
    DemoMaterialModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    NgbModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
