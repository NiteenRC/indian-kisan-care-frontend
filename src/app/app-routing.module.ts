import { TableComponent } from './ui_modules/table/table.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { DashboardCategoriesComponent } from './pages/dashboard-categories/dashboard-categories.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { CreateLocationComponent } from './locations/create-location/create-location.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CreateSupplierComponent } from './suppliers/create-supplier/create-supplier.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent,  },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotfoundComponent },

  {path: 'dashboard', pathMatch: 'prefix',  canActivate: [ AuthGuard ],
    component: DashboardComponent, 
    children : [

      { path: 'dashboard2', component: DashboardCategoriesComponent, canActivate: [ AuthGuard] },
      { path: 'products', component: ProductListComponent, canActivate: [ AuthGuard] },
      { path: 'add', component: CreateProductComponent },
      { path: 'category', component: CreateCategoryComponent },
      { path: 'purchaseOrder', component: PurchaseOrderComponent },
      { path: 'salesOrder', component: SalesOrderComponent },
      { path: 'location', component: CreateLocationComponent },
      { path: 'customer', component: CreateCustomerComponent },
      { path: 'supplier', component: CreateSupplierComponent },
      { path: 'balance-sheet', component: BalanceSheetComponent },
      { path: 'customers-list', component: CustomersListComponent },
      { path: 'companies-list', component: CompanyListComponent },
      { path: 'suppliers-list', component: SupplierListComponent },
      { path: 'categories-list', component: CategoryListComponent },
      { path: 'locations-list', component: LocationListComponent },
      { path: 'home', component: HomeComponent },
    ]
    },
  { path: 'table', component: TableComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
