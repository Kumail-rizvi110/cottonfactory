import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';

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

import { SetmanagerFormComponent } from './pages/SetManager/setmanager-form/setmanager-form.component';
import { SetmanagerListComponent } from './pages/SetManager/setmanager-list/setmanager-list.component';

import { VendorsFormComponent } from './pages/Vendors/vendors-form/vendors-form.component';
import { VendorsListComponent } from './pages/Vendors/vendors-list/vendors-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/sales/sales-form', component: SalesFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/sales/sales-list', component: SalesListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    
                    { path: 'pages/Assets/assets-form', component: AssetsFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Assets/assets-list', component: AssetsListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Attendance/attendance-form', component: AttendanceFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Attendance/attendance-list', component: AttendanceListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Customers/customers-form', component: CustomersFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Customers/customers-list', component: CustomersListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },


                    { path: 'pages/Employees/employees-form', component: EmployeesFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Employees/employees-list', component: EmployeesListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/ImportantDocuments/documents-form', component: DocumentsFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/ImportantDocuments/documents-list', component: DocumentsListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                  
                    { path: 'pages/Inventory/inventory-form', component: InventoryFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Inventory/inventory-list', component: InventoryListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Orders/orders-form', component: OrdersFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Orders/orders-list', component: OrdersListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Production/production-form', component: ProductionFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Production/production-list', component: ProductionListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Purchasing/purchasing-form', component: PurchasingFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Purchasing/purchasing-list', component: PurchasingListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Reports/reports-form', component: ReportsFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Reports/reports-list', component: ReportsListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Setmanager/setmanager-form', component: SetmanagerFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Setmanager/setmanager-list', component: SetmanagerListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'pages/Vendors/vendors-form', component: VendorsFormComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'pages/Vendors/vendors-list', component: VendorsListComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },

                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
