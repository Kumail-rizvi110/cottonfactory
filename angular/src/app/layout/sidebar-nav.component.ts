import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {

    menuItems: MenuItem[] = [
        new MenuItem(this.l('HomePage'), '', 'home', '/app/home'),

       // new MenuItem(this.l('Tenants'), 'Pages.Tenants', 'business', '/app/tenants'),
        new MenuItem(this.l('Users'), 'Pages.Users', 'people', '/app/users'),
        new MenuItem(this.l('Roles'), 'Pages.Roles', 'local_offer', '/app/roles'),
       // new MenuItem(this.l('About'), '', 'info', '/app/about'),
        new MenuItem(this.l('Sales'), '', 'info', '/app/pages/sales/sales-list'),
        new MenuItem(this.l('More Menu'), '', 'menu', '', [

            new MenuItem(this.l('Customers'), '', 'info', '/app/pages/Customers/customers-list'),
            new MenuItem(this.l('Vendors'), '', 'info', '/app/pages/Vendors/vendors-list'),
            new MenuItem(('Assets'), '', 'info', '/app/pages/Assets/assets-list'),
            new MenuItem(this.l('Employees'), '', 'info', '/app/pages/Employees/employees-list'),
            new MenuItem(this.l('Orders'), '', 'info', '/app/pages/Orders/orders-list'),
            new MenuItem(this.l('Important Documents'), '', 'info', '/app/pages/ImportantDocuments/documents-list'),
        

            
            
            new MenuItem(this.l('Inventory'), '', 'info', '/app/pages/Inventory/inventory-list'),

            new MenuItem(this.l('Production'), '', 'info', '/app/pages/Production/production-list'),
    
            new MenuItem(this.l('Purchasing'), '', 'info', '/app/pages/Purchasing/purchasing-list'),
    
            new MenuItem(this.l('Reports'), '', 'info', '/app/pages/Reports/reports-list'),
     
            new MenuItem(this.l('SetManager'), '', 'info', '/app/pages/Setmanager/setmanager-list'),

        

        
 
        ]),
   //     new MenuItem(this.l('Assets'), '', 'info', '/app/pages/Assets/assets-list'),

    //    new MenuItem(this.l('Attendance'), '', 'info', '/app/pages/Attendance/attendance-list'),

        // new MenuItem(this.l('Customers'), '', 'info', '/app/pages/Customers/customers-list'),

        // new MenuItem(this.l('Employees'), '', 'info', '/app/pages/Employees/employees-list'),

        // new MenuItem(this.l('Important Documents'), '', 'info', '/app/pages/ImportantDocuments/documents-list'),

        // new MenuItem(this.l('Inventory'), '', 'info', '/app/pages/Inventory/inventory-list'),

        // new MenuItem(this.l('Orders'), '', 'info', '/app/pages/Orders/orders-list'),
 
        // new MenuItem(this.l('Production'), '', 'info', '/app/pages/Production/production-list'),

        // new MenuItem(this.l('Purchasing'), '', 'info', '/app/pages/Purchasing/purchasing-list'),

        // new MenuItem(this.l('Reports'), '', 'info', '/app/pages/Reports/reports-list'),
 
        // new MenuItem(this.l('SetManager'), '', 'info', '/app/pages/Setmanager/setmanager-list'),

        // new MenuItem(this.l('Vendors'), '', 'info', '/app/pages/Vendors/vendors-list'),


        
    ];

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }

        return true;
    }
}
