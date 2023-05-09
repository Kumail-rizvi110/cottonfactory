import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationService } from './pagination.service';
// import { PatientService } from './patient-service';
// import { ReportService } from './report.service';

@NgModule({
  providers: [PaginationService //, PatientService,ReportService
],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
