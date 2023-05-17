import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import { TopBarComponent } from '@app/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
import { SalesFormComponent } from './pages/sales/sales-form/sales-form.component';
import { SalesListComponent } from './pages/sales/sales-list/sales-list.component';

import { AssetsFormComponent } from './pages/Assets/assets-form/assets-form.component';
import { AssetsListComponent } from './pages/Assets/assets-list/assets-list.component';

import { AttendanceFormComponent } from './pages/Attendance/attendance-form/attendance-form.component';
import { AttendanceListComponent } from './pages/Attendance/attendance-list/attendance-list.component';

import { CustomersFormComponent } from './pages/Customers/customers-form/customers-form.component';
import { CustomersListComponent } from './pages/Customers/customers-list/customers-list.component';

import { EmployeesFormComponent } from './pages/Employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './pages/Employees/employees-list/employees-list.component';

import { DocumentsFormComponent } from './pages/ImportantDocuments/documents-form/documents-form.component';
import { DocumentsListComponent } from './pages/ImportantDocuments/documents-list/documents-list.component';

import { InventoryFormComponent } from './pages/Inventory/inventory-form/inventory-form.component';
import { InventoryListComponent } from './pages/Inventory/inventory-list/inventory-list.component';

import { OrdersFormComponent } from './pages/Orders/orders-form/orders-form.component';
import { OrdersListComponent } from './pages/Orders/orders-list/orders-list.component';

import { ProductionFormComponent } from './pages/Production/production-form/production-form.component';
import { ProductionListComponent } from './pages/Production/production-list/production-list.component';

import { PurchasingFormComponent } from './pages/Purchasing/purchasing-form/purchasing-form.component';
import { PurchasingListComponent } from './pages/Purchasing/purchasing-list/purchasing-list.component';

import { ReportsFormComponent } from './pages/Reports/reports-form/reports-form.component';
import { ReportsListComponent } from './pages/Reports/reports-list/reports-list.component';

import { PaymentFormComponent } from './pages/Payments/payment-form/payment-form.component';
import { PaymentListComponent } from './pages/Payments/payment-list/payment-list.component';

import { VendorsFormComponent } from './pages/Vendors/vendors-form/vendors-form.component';
import { VendorsListComponent } from './pages/Vendors/vendors-list/vendors-list.component';
import { DeliveryListComponent } from './pages/Delivery/delivery-list/delivery-list.component';
import { DeliveryFormComponent } from './pages/Delivery/delivery-form/delivery-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopBarComponent,
    TopBarLanguageSwitchComponent,
    SideBarUserAreaComponent,
    SideBarNavComponent,
    SideBarFooterComponent,
    RightSideBarComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    SalesFormComponent,
    SalesListComponent,
    AssetsFormComponent,
    AssetsListComponent,
    AttendanceFormComponent,
    AttendanceListComponent,
    CustomersFormComponent,
    CustomersListComponent,
    EmployeesFormComponent,
    EmployeesListComponent,
    DocumentsFormComponent,
    DocumentsListComponent,
    InventoryFormComponent,
    InventoryListComponent,
    OrdersFormComponent,
    OrdersListComponent,
    ProductionFormComponent,
    ProductionListComponent,
    PurchasingFormComponent,
    PurchasingListComponent,
    ReportsFormComponent,
    ReportsListComponent,
    PaymentFormComponent,
    PaymentListComponent,
    VendorsFormComponent,
    VendorsListComponent,
    DeliveryListComponent,
    DeliveryFormComponent,

    // PaymentFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forRoot(),
    AbpModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
    SalesFormComponent

  ]
})
export class AppModule {}
