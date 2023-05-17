import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from '@shared/shared.module';
import { VendorsModule } from './Vendors/Vendors.module';
import { VendorsFormComponent } from './Vendors/vendors-form/vendors-form.component';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    SalesModule,
    VendorsModule,
    VendorsFormComponent
  ],
   providers:[CurrencyPipe]
})
export class PagesModule { }
