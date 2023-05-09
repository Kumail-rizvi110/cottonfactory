// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersDto } from '@shared/Dto/CustomersDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
// import { VendorsService } from '@shared/services/Vendors-service';
import { CustomersService } from '@shared/services/Customers-service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css']
})
export class CustomersFormComponent implements OnInit {  
  public btnshow : boolean = true
  public customers : CustomersDto = new CustomersDto()
     Customersform = new FormGroup({
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      Phone: new FormControl(""),
      email: new FormControl(""),
      Address: new FormControl(""),
  });
  ngOnInit(): void {
    this.Customersform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      FirstName: [""],
      LastName: [""],
      Phone: [""],
      email: [""],
      Address: [""],
      // Date: [
      //   {
      //     value: new Date(),
      //     disabled: false,
      // },
      // Validators.required,
      // ],
     
    });
  }
  constructor(
   
    private userService: UserServiceProxy,

    private router: Router,
    private route: ActivatedRoute,
    private CustomersService : CustomersService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.customers.firstName = this.Customersform.get("FirstName").value;
 this.customers.lastName = this.Customersform.get("LastName").value;
 this.customers.phone = this.Customersform.get("Phone").value;
 this.customers.email = this.Customersform.get("email").value;
 this.customers.address = this.Customersform.get("Address").value;
//  this.vendors.Date = this.pipe.transform(this.Vendorsform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.CustomersService.create(this.customers)
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
 
   
      
      
      
      
    },
    
    err => {
      abp.message.error(err);
    });
  
    
   

}

}
