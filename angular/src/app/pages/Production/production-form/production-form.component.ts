import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorsDto } from '@shared/Dto/VendorsDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { VendorsService } from '@shared/services/Vendors-service';
import { ProductionService } from '@shared/services/Production-service';
import { ProductionDto } from '@shared/Dto/ProductionDto';
import { MatAutocompleteSelectedEvent } from '@angular/material';
@Component({
  selector: 'app-production-form',
  templateUrl: './production-form.component.html',
  styleUrls: ['./production-form.component.css']
})
export class ProductionFormComponent implements OnInit { 
  public userList1 = [];

  public Production: string;
  editid : number;
  id : number;
  
  public btnshow : boolean = true
  public production : ProductionDto = new ProductionDto()
     Productionform = new FormGroup({
      ProductionDate: new FormControl(""),
      EmployeesTeamId: new FormControl(""),
      TimeTaken: new FormControl(""),
      Quality: new FormControl(""),
      CottonProduced: new FormControl(""),
      CottonFiberUsed: new FormControl(""),
      // Phone: new FormControl(""),
      // email: new FormControl(""),
      // Address: new FormControl(""),
  });
  ngOnInit(): void {
    debugger
    this.getpatientListByName();

    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.ProductionService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Productionform.controls.EmployeesTeamId.setValue(Response.result.employeesTeamId);
        this.Productionform.controls.TimeTaken.setValue(Response.result.timeTaken);

        this.Productionform.controls.Quality.setValue(Response.result.quality);

        this.Productionform.controls.CottonProduced.setValue(Response.result.cottonProduced);
        this.Productionform.controls.CottonFiberUsed.setValue(Response.result.cottonFiberUsed);


        // let date=this.pipe.transform(Response.result.paymentDate, 'MM/dd/yyyy');
        // this.Paymentsform.controls.PaymentDate.setValue(date);


        let req = new Date(this.pipe.transform(Response.result.productionDate, 'yyyy/MM/dd'))
        // this.LibraryForm.controls.Uploaddate.setValue(LBDate);
        this.Productionform.controls.ProductionDate.setValue(this.pipe.transform(req, 'yyyy-MM-dd'))
        // this.Paymentsform.controls.Phone.setValue(Response.result.phone);
        // this.Paymentsform.controls.email.setValue(Response.result.email);
        // this.Paymentsform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }
    this.Productionform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      EmployeesTeamId: [""],
      TimeTaken: [""],
      Quality: [""],
      CottonProduced: [""],
      CottonFiberUsed: [""],
       ProductionDate: [
        {
          value: new Date(),
          disabled: false,
      },
      Validators.required,
      ],
     
    });
  }
  constructor(
   
    private userService: UserServiceProxy,

    private router: Router,
    private route: ActivatedRoute,
    private ProductionService : ProductionService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')
  // datePipe = new DatePipe("en-US");


  onSelectChange(name): void {
    this.Production =name;
      }
      
      // onOptionSelected(event: MatAutocompleteSelectedEvent) {
      //   // Handle the selected option
      //   console.log(event.option.value);
      // }
    
    
      // get(id: number) {
      //   debugger;
      //   console.log(id);
      //   // Your logic here
      // }
      selectedUserName: string;
      selectedUserId: number;
    
      onOptionSelected(event: MatAutocompleteSelectedEvent) {
        const selectedUser = this.userList1.find(user => user.id === event.option.value);
        this.selectedUserName = selectedUser.name;
        this.selectedUserId = selectedUser.id;
        console.log(selectedUser.name);
        // Your logic here
      }
    
    
      getname(name): void {
        debugger
    this.Production =name;
    }

     getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
    getpatientListByName(): void {
      debugger
              this.ProductionService.getList().subscribe((Response) => {
                Response.forEach((element) => {
                  const user = {
                      id: element.id,
                      name: element.name,
                  };
                  debugger
                  this.userList1.push(user);
              });
              console.log(this.userList1);
              
        });
  }


  
 save(){
debugger
this.production.Id= this.id;
  this.production.EmployeesTeamId = this.Productionform.get("EmployeesTeamId").value;

  this.production.TimeTaken = this.Productionform.get("TimeTaken").value;

  this.production.Quality = this.Productionform.get("Quality").value;

  this.production.CottonProduced = this.Productionform.get("CottonProduced").value;
  this.production.CottonFiberUsed = this.Productionform.get("CottonFiberUsed").value;



  this.production.ProductionDate = this.pipe.transform(this.Productionform.get("ProductionDate").value, 'MM/dd/yyyy');
//   this.vendors.phone = this.Vendorsform.get("Phone").value;
//  this.vendors.email = this.Vendorsform.get("email").value;
//  this.vendors.address = this.Vendorsform.get("Address").value;
//  this.vendors.Date = this.pipe.transform(this.Vendorsform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.ProductionService.create(this.production)
  .subscribe((res) => {
    debugger
    var mes = res['result'];
    debugger
    var mes1=mes.split("_")[0]
    debugger
    var mes2=mes.split("_")[1]
    debugger

    if (mes == 1) {

      abp.message.info("SuccessFully Create", "Status");
     
    }
 
    else if(mes==2){
      abp.message.success("SuccessFully Update", "Status");

    }

    window.history.back();
      
      
      
      
    },
    
    err => {
      abp.message.error(err);
    });
  
    
   

}

}

