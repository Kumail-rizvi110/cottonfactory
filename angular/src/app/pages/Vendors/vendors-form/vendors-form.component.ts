import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorsDto } from '@shared/Dto/VendorsDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { VendorsService } from '@shared/services/Vendors-service';
import { SalesService } from '@shared/services/sales-service';

@Component({
  selector: 'app-vendors-form',
  templateUrl: './vendors-form.component.html',
  styleUrls: ['./vendors-form.component.css']
})
export class VendorsFormComponent implements OnInit {  
  public btnshow : boolean = true
  public vendors : VendorsDto = new VendorsDto()
     Vendorsform = new FormGroup({
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      Phone: new FormControl(""),
      email: new FormControl(""),
      Address: new FormControl(""),
  });
  ngOnInit(): void {
    this.Vendorsform = this._formBuilder.group({
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
    private VendorsService : VendorsService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.vendors.firstName = this.Vendorsform.get("FirstName").value;
 this.vendors.lastName = this.Vendorsform.get("LastName").value;
 this.vendors.phone = this.Vendorsform.get("Phone").value;
 this.vendors.email = this.Vendorsform.get("email").value;
 this.vendors.address = this.Vendorsform.get("Address").value;
//  this.vendors.Date = this.pipe.transform(this.Vendorsform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.VendorsService.create(this.vendors)
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
