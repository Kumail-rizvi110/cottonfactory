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
  editid : number;
  id : number;
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
debugger
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.VendorsService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Vendorsform.controls.FirstName.setValue(Response.result.firstName);
        this.Vendorsform.controls.LastName.setValue(Response.result.lastName);
        this.Vendorsform.controls.Phone.setValue(Response.result.phone);
        this.Vendorsform.controls.email.setValue(Response.result.email);
        this.Vendorsform.controls.Address.setValue(Response.result.address);
        // this.Vendorsform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }

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
// this.vendors.id = this.id;
this.vendors.Id= this.id;
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
