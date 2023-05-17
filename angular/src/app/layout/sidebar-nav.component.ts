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
      //  new MenuItem(this.l('HomePage'), '', 'home', '/app/home'),
      new MenuItem('More', '', 'route', '', [
        new MenuItem(this.l('Reports'), 'Pages.Reports', 'people', '/app/pages/Reports/reports-list'),
        new MenuItem(this.l('Production'), 'Pages.Production', 'people', '/app/pages/Production/production-list'),
        new MenuItem(this.l('Assets'), 'Pages.Assets', 'people', '/app/pages/Assets/assets-list'),
        new MenuItem(this.l('Attendance'), 'Pages.Attendance', 'people', '/app/pages/Attendance/attendance-list'),
        new MenuItem(this.l('Orders'), 'Pages.Orders', 'people', '/app/pages/Orders/orders-list'),
        new MenuItem(this.l('ImportantDocuments'), 'Pages.ImportantDocuments', 'people', '/app/pages/ImportantDocuments/documents-list'),
 ]),
       // new MenuItem(this.l('Tenants'), 'Pages.Tenants', 'business', '/app/tenants'),
        new MenuItem(this.l('Users'), 'Pages.Users', 'people', '/app/users'),
        new MenuItem(this.l('Roles'), 'Pages.Roles', 'local_offer', '/app/roles'),
      //  new MenuItem(this.l('About'), '', 'info', '/app/about'),
      new MenuItem(this.l('Payments'), 'Pages.Payments', 'people', '/app/pages/Payments/payment-list'),

      new MenuItem(this.l('Sales'), 'Pages.Sales', 'people', '/app/pages/sales/sales-list'),
        new MenuItem(this.l('Customers'), 'Pages.Customers', 'people', '/app/pages/Customers/customers-list'),
        new MenuItem(this.l('Purchase'), 'Pages.Purchasing', 'people', '/app/pages/Purchasing/purchasing-list'),
        new MenuItem(this.l('Employees'), 'Pages.Employees', 'people', '/app/pages/Employees/employees-list'),
        new MenuItem(this.l('Delivery'), 'Pages.Delivery', 'people', '/app/pages/Delivery/delivery-list'),

        new MenuItem(this.l('Inventory'), 'Pages.Inventory', 'people', '/app/pages/Inventory/inventory-list'),
        new MenuItem(this.l('Vendors'), 'Pages.Vendors', 'people', '/app/pages/Vendors/vendors-list'),

        new MenuItem(this.l('Reports'), 'Pages.Reports', 'people', '/app/pages/Reports/reports-list'),

      

        new MenuItem(this.l('MultiLevelMenu'), '', 'menu', '', [
         
            // new MenuItem('ASP.NET Zero', '', '', '', [
            //     new MenuItem('Home', '', '', 'https://aspnetzero.com?ref=abptmpl'),
            //     new MenuItem('Description', '', '', 'https://aspnetzero.com/?ref=abptmpl#description'),
            //     new MenuItem('Features', '', '', 'https://aspnetzero.com/?ref=abptmpl#features'),
            //     new MenuItem('Pricing', '', '', 'https://aspnetzero.com/?ref=abptmpl#pricing'),
            //     new MenuItem('Faq', '', '', 'https://aspnetzero.com/Faq?ref=abptmpl'),
            //     new MenuItem('Documents', '', '', 'https://aspnetzero.com/Documents?ref=abptmpl')
            // ])
        ])
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