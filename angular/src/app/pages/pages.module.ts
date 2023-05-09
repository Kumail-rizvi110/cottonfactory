import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    SalesModule
  ],
   providers:[CurrencyPipe]
})
export class PagesModule { }
