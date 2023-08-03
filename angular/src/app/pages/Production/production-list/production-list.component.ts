// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';
import { MatDialogRef, MatCheckboxChange, MatTableDataSource, MatPaginator } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  UserServiceProxy,
  CreateUserDto,
  RoleDto
} from '@shared/service-proxies/service-proxies';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { PaymentDto } from '@shared/Dto/PaymentDto';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ProductionService } from '@shared/services/Production-service';

// import {Component, Input, OnInit, ViewChild} from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
//import { PaginationService } from '@shared/services/pagination.service';
import { VendorsService } from '@shared/services/Vendors-service';
import { PaginationService } from 'ngx-pagination';
/**
 * @title Table with pagination
 */
class AdvanceQueryParameterDto {
  keyword: string;
  product:number;
  DateFrom: Date;
  DateTo:Date;

}
@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit  {



  filterForm = new FormGroup({
    keyword: new FormControl(""),
    product: new FormControl(""),
    DateFrom: new FormControl(""),
    DateTo: new FormControl("")
  });
  public itemSearchStatus;
  displayedColumns: string[] = ['Quality', 'ProductionDate', 'Actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @Input() public filterdValues;
  public Datefrom: string
  public Dateto: string
  @Input() totalCount: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    // private userService: UserServiceProxy,
    // private paginationService: PaginationService,
    // private issueService: IssueService,
    // private pharmacyReportService: PharmacyReportService,
    // private itemRequestService: ItemRequestService,
    // private storeService: StoreService,
    //private paginationService: PaginationService,
    private paginationService: PaginationService,
    private router: Router,
    private ProductionService: ProductionService,


  ) { }

  ngOnInit() {
    let today = new Date();
    
    var fromdate = new Date();
    console.log(fromdate.toLocaleDateString());
    fromdate.setMonth(fromdate.getMonth() - 3);
    console.log(fromdate.toLocaleDateString());

    this.filterForm.controls.DateFrom.setValue(fromdate.toISOString().substring(0, 10));
    this.filterForm.controls.DateTo.setValue(today.toISOString().substring(0, 10));
    
    this.dataSource.paginator = this.paginator;
   this.Submit();
  }

  checkRequiredFields(): boolean {
    if (this.filterForm.controls.DateFrom.value) {
      return true;
    }
    else
      return true;
  }

  edit(id: number){
    
    const editid = id.toString();
    localStorage.setItem('editid', editid);
  }

  delete(id: number){
    abp.message.confirm((""),
    undefined,
    (result: boolean) => {
      if (result) {
        this.ProductionService.Delete(id).subscribe(res => {
          return abp.message.info("Deleted successfully", "Status");
        })
      }
    }
  )
  }
// Submit(){
//   debugger
//  // if (this.checkRequiredFields()) {
//     if (this.filterForm.controls.DateFrom.value > this.filterForm.controls.DateTo.value) {
//       abp.message.error("", "Invalid Date Range");
//       return;
//     }
    
//     debugger
    
   

//     const req = new AdvanceQueryParameterDto();
//     req.DateFrom =this.filterForm.controls.DateFrom.value;
//     req.DateTo = this.filterForm.controls.DateTo.value;
//     req.keyword = this.filterForm.controls.keyword.value;
//     req.product = this.filterForm.controls.product.value;
    

//     debugger
//     this.VendorsService.PostVendorsListPagination(req).subscribe(      
//     )
//     this.Datefrom = this.filterForm.controls.DateFrom.value
//     this.Dateto = this.filterForm.controls.DateTo.value
//     this.VendorsService.$isDataLoaded.subscribe(result => {
//       debugger
//         //  this.isLoading = false;
       
    
//       this.filterdValues = this.filterForm.value
//       this.dataSource = new MatTableDataSource(result.VendorsModel)
//       debugger
//       this.totalCount = result.totalCount;
     
//     });
//     debugger
//  // }
//  // else {
//   //  abp.message.error("Please Provide Valid Data");
//  // }
// }
// edit(id: number){
//   debugger
//   this.router.navigate(["/pages/Payments/payment-form"]);      
// }
 
Submit(){
  debugger
 // if (this.checkRequiredFields()) {
    if (this.filterForm.controls.DateFrom.value > this.filterForm.controls.DateTo.value) {
      abp.message.error("", "Invalid Date Range");
      return;
    }
    
    debugger
    
   

    const req = new AdvanceQueryParameterDto();
    req.DateFrom =this.filterForm.controls.DateFrom.value;
    req.DateTo = this.filterForm.controls.DateTo.value;
    req.keyword = this.filterForm.controls.keyword.value;
    req.product = this.filterForm.controls.product.value;
    

    debugger
    this.ProductionService.PostSalesListPagination(req).subscribe(      
    )
    this.Datefrom = this.filterForm.controls.DateFrom.value
    this.Dateto = this.filterForm.controls.DateTo.value
    this.ProductionService.$isDataLoaded.subscribe(result => {
      debugger
        //  this.isLoading = false;
       
    
      this.filterdValues = this.filterForm.value
      this.dataSource = new MatTableDataSource(result.productionModel)
      debugger
      this.totalCount = result.totalCount;
     
    });
    debugger
 // }
 // else {
  //  abp.message.error("Please Provide Valid Data");
 // }
}
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
