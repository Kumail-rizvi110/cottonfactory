// import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
// import { PaginationService } from '@shared/services/pagination.service';
// import { SalesService } from '@shared/services/sales-service';

// @Component({
//   selector: 'app-sales-list',
//   templateUrl: './sales-list.component.html',
//   styleUrls: ['./sales-list.component.css']
// })
// class AdvanceQueryParameterDto {
//   keyword: string;
//   ProductId:number;
//   DateFrom: Date;
//   DateTo:Date;

// }
// export class SalesListComponent implements OnInit {

  
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//   }
// }

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

// //   @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
// //   @ViewChildren('innerTables') innerTables: QueryList<MatTable<any>>;
// //   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
// //   @ViewChild(MatSort, { static: true }) sort: MatSort;

// //   @Output() change = new EventEmitter();
// //   dataSource: any
// //   isLoading = true;
// //   public DateFrom: string
// //   public DateTo: string
// //   @Input() public filterdValues;
// //   @Input() totalCount: number;
// //   public show: boolean = true
// //   displayedColumns: string[] = [
// //     "Customers",
// //     "Price",
// //     "Product",
// //     "Date",
// //     "NetCharge",
// //     "Actions"
// //   ]
// //   filterForm = new FormGroup({
// //     Keyword: new FormControl(""),
// //     barcode: new FormControl(""),
// //     DoctorId: new FormControl(""),
// //     IssueDateFrom: new FormControl(""),
// //     IssueDateTo: new FormControl(""),
// //     WardId: new FormControl("")
// //   });
  
// //   constructor(
// //     private salesService: SalesService,
// //     private paginationService: PaginationService,
// //   ) {
    
// //    }
// //   ngOnInit() {
// //     debugger
  
// //     let today = new Date();
    
// //     var fromdate = new Date();
// //     console.log(fromdate.toLocaleDateString());
// //     fromdate.setMonth(fromdate.getMonth() - 3);
// //     console.log(fromdate.toLocaleDateString());

// //     this.filterForm.controls.DateFrom.setValue(fromdate.toISOString().substring(0, 10));
// //     this.filterForm.controls.DateTo.setValue(today.toISOString().substring(0, 10));
   
// //   }
// //   checkRequiredFields(): boolean {
// //     if (this.filterForm.controls.DateFrom.value) {
// //       return true;
// //     }
// //     else
// //       return true;
// //   }
   
// //   onSubmit() {
// //     debugger
// //     this.dataSource = null
// //     this.isLoading = true;
// //     debugger
// //     if (this.checkRequiredFields()) {
// //       if (this.filterForm.controls.IssueDateFrom.value > this.filterForm.controls.IssueDateTo.value) {
// //         abp.message.error("", "Invalid Date Range");
// //         return;
// //       }
      
// //       debugger
     

// //       const req = new AdvanceQueryParameterDto();
// //       req.DateFrom =this.filterForm.controls.DateFrom.value;
// //       req.DateTo = this.filterForm.controls.DateTo.value;
// //       req.keyword = this.filterForm.controls.keyword.value;
     

// //       debugger
// //       this.salesService.PostSalesListPagination(req, 0, this.paginationService.pageCount).subscribe(      
// //       )
// //       this.DateFrom = this.filterForm.controls.DateFrom.value
// //       this.DateTo = this.filterForm.controls.DateTo.value
// //       this.salesService.$isDataLoaded.subscribe(res => {
      
// //             this.isLoading = false;
         
      
// //         this.filterdValues = this.filterForm.value
// //         this.dataSource = new MatTableDataSource(res.issueDtos)
// //         debugger
// //         this.totalCount = res.totalCount;
        
// //       });
// //       debugger
// //     }
// //     else {
// //       abp.message.error("Please Provide Valid Data");
// //     }
// //   }

// // }


import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
//import { PaginationService } from '@shared/services/pagination.service';
import { SalesService } from '@shared/services/sales-service';
/**
 * @title Table with pagination
 */
class AdvanceQueryParameterDto {
  keyword: string;

  Name: string;
  product:number;
  DateFrom: Date;
  DateTo:Date;

}
@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  filterForm = new FormGroup({
    keyword: new FormControl(""),
    Name: new FormControl(""),

    product: new FormControl(""),
    DateFrom: new FormControl(""),
    DateTo: new FormControl("")
  });
  public itemSearchStatus;
  displayedColumns: string[] = ['Customers', 'Product', 'Date', 'Price', 'Quantity','NetCharge','Actions'];
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
  
    private salesService: SalesService,


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
        this.salesService.Delete(id).subscribe(res => {
          return abp.message.info("Deleted successfully", "Status");
        })
      }
    }
  )
  }
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
    req.Name = this.filterForm.controls.Name.value;

    req.product = this.filterForm.controls.product.value;
    

    debugger
    this.salesService.PostSalesListPagination(req).subscribe(      
    )
    this.Datefrom = this.filterForm.controls.DateFrom.value
    this.Dateto = this.filterForm.controls.DateTo.value
    this.salesService.$isDataLoaded.subscribe(result => {
      debugger
        //  this.isLoading = false;
       
    
      this.filterdValues = this.filterForm.value
      this.dataSource = new MatTableDataSource(result.salesModel)
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


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
