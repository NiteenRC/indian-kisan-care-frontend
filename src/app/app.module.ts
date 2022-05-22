import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderComponent } from './purchase/purchase-order/purchase-order.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './setting/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MobileMenuComponent } from './menu/mobile-menu/mobile-menu.component';
import { TableModule } from 'primeng/table';
import { ActionBarComponent } from './menu/action-bar/action-bar.component';
import { ActionBarItemComponent } from './menu/action-bar-item/action-bar-item.component';
import { DemoMaterialModule } from './material.module';
import { CreateCustomerComponent } from './data/customers/create-customer/create-customer.component';
import { CustomersListComponent } from './data/customers/customers-list/customers-list.component';
import { CreateCompanyComponent } from './data/companies/create-company/create-company.component';
import { CompanyListComponent } from './data/companies/company-list/company-list.component';
import { CategoryListComponent } from './data/categories/category-list/category-list.component';
import { CreateSupplierComponent } from './data/suppliers/create-supplier/create-supplier.component';
import { SupplierListComponent } from './data/suppliers/supplier-list/supplier-list.component';
import { LocationListComponent } from './data/locations/location-list/location-list.component';
import { CreateLocationComponent } from './data/locations/create-location/create-location.component';
import { CreateCategoryComponent } from './data/categories/create-category/create-category.component';
import { ProductListComponent } from './data/products/product-list/product-list.component';
import { CreateProductComponent } from './data/products/create-product/create-product.component';
import { TableComponent } from './ui_modules/table/table.component';
import { SalesTableComponent } from './ui_modules/table/sales-table.component';
import { PurchaseReportComponent } from './purchase/purchase-report/purchase-report.component';
import { MatSortModule } from '@angular/material/sort';
import { SupplierBalanceSheetComponent } from './balance-sheet/supplier-balance-sheet/list-supplier-balance-sheet/supplier-balance-sheet.component';
import { SupplierUpdateBalanceSheetComponent } from './balance-sheet/supplier-balance-sheet/update-supplier-balance-sheet/supplier-update-balance-sheet.component';
import { DateAdapter } from '@angular/material/core';
import { ProfitSummaryComponent } from './reports/profit-summary/profit-summary.component';
import { StockBookComponent } from './reports/stock-book/stock-book.component';
import { UpdateBankInfoComponent } from './setting/update-bank-info/update-bank-info.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './setting/login/login.component';
import { NavigationBarComponent } from './menu/navigation-bar/navigation-bar.component';
import { SalesReportComponent } from './sales/sales-report/sales-report.component';
import { UpdateBalanceSheetComponent } from './sales/customer-balance-sheet/update-customer-balance-sheet/customer-update-balance-sheet.component';
import { PurchaseReportDetailsComponent } from './purchase/purchase-report-details/purchase-report-details.component';
import { SalesReportDetailsComponent } from './sales/sales-report-details/sales-report-details.component';
import { SalesOrderComponent } from './sales/salesoder/sales-order.component';
import { BalanceSheetComponent } from './sales/customer-balance-sheet/list-customer-balance-sheet/balance-sheet.component';
import { SupplierReportDetailsComponent } from './purchase/supplier-report-details/supplier-report-details.component';
import { SubscriptionComponent } from './subscription/register/subscription.component';

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
    SupplierUpdateBalanceSheetComponent,
    SupplierBalanceSheetComponent,
    ActionBarComponent,
    ActionBarItemComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NotfoundComponent,
    MobileMenuComponent,
    CustomersListComponent,
    CreateCompanyComponent,
    CompanyListComponent,
    CategoryListComponent,
    CreateSupplierComponent,
    SupplierListComponent,
    LocationListComponent,
    TableComponent,
    SalesTableComponent,
    SalesReportComponent,
    PurchaseReportComponent,
    UpdateBalanceSheetComponent,
    ProfitSummaryComponent,
    StockBookComponent,
    PurchaseReportDetailsComponent,
    SalesReportDetailsComponent,
    UpdateBankInfoComponent,
    SupplierReportDetailsComponent,
    SubscriptionComponent
  ],
  imports: [
    TableModule,
    DemoMaterialModule,
    MatTableModule,
    MatSortModule,
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
    RouterModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-in"); // DD/MM/YYYY
  }
}
