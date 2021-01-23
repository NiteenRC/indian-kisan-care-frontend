import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';

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
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'category', component: CreateCategoryComponent },
      { path: 'purchaseOrder', component: PurchaseOrderComponent },
      { path: 'salesOrder', component: SalesOrderComponent },
      { path: 'location', component: CreateLocationComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'supplier', component: SupplierComponent },
      { path: 'balance-sheet', component: BalanceSheetComponent },
      { path: 'customers-list', component: CustomersListComponent },
      { path: 'companies-list', component: CompanyListComponent },
      { path: 'suppliers-list', component: SupplierListComponent },
      { path: 'categories-list', component: CategoryListComponent },
      { path: 'locations-list', component: LocationListComponent },
    ]
    },
  { path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
