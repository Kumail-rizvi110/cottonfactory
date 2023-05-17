import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';
//import { SalesListComponent } from './sales-list/sales-list.component';
import { SharedModule } from '@shared/shared.module';
import { ServiceModule } from '@shared/services/service.module';

// const routes = [
//   {
//       path: "sales/sales-form",
//       component: SalesFormComponent,
//   },
//   {
//     path: "sales/sales-form/:id",
//     component: SalesListComponent,
//   },
//   {
//     path: "sales/sales-list",
//     component: SalesListComponent,
// }
// ];




@NgModule({
  declarations: [OrdersFormComponent],//SalesListComponent
  imports: [
  //  RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
   // TextMaskModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    //ComponentsModule,
    Component,
    // FuseSharedModule,
    MatTabsModule,
    SharedModule,
    ServiceModule
],
providers: [MatDatepickerModule],
})
export class OrdersModule { }
