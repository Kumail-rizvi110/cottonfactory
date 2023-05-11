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
  product:number;
  DateFrom: Date;
  DateTo:Date;

}
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
 
  filterForm = new FormGroup({
    keyword: new FormControl(""),
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

  pageSize: number;
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

