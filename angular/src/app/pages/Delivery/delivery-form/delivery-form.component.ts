import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryDto } from '@shared/Dto/DeliveryDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { DeliveryService } from '@shared/services/Delivery-service';
import { SalesService } from '@shared/services/sales-service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {  
  editid : number;
id : number;

  public btnshow : boolean = true
  public delivery : DeliveryDto = new DeliveryDto()
     Deliveryform = new FormGroup({
      DeliveryDate: new FormControl(""),
      // LastName: new FormControl(""),
      // Phone: new FormControl(""),
      // email: new FormControl(""),
      Address: new FormControl(""),
  });
  ngOnInit(): void {
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.DeliveryService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Deliveryform.controls.Address.setValue(Response.result.address);
        
        this.Deliveryform.controls.DeliveryDate.setValue(Response.result.deliveryDate);
        // this.Deliveryform.controls.Phone.setValue(Response.result.phone);
        // this.Deliveryform.controls.email.setValue(Response.result.email);
        // this.Deliveryform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }
    this.Deliveryform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      //DeliveryDate: [""],
      // LastName: [""],
      // Phone: [""],
      // email: [""],
      Address: [""],
      DeliveryDate: [
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
    private DeliveryService : DeliveryService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
this.delivery.Id = this.id;


// const currentDate = this.Deliveryform.get("DeliveryDate").value; // Replace this with your DateTime object
// const hoursToAdd =5; // Replace this with the number of hours you want to add

// const newDate = addHours(currentDate, hoursToAdd);
// console.log(newDate);

  //this.delivery.DeliveryDate = this.Deliveryform.get("DeliveryDate").value;
//  this.vendors.lastName = this.Vendorsform.get("LastName").value; 
//  this.vendors.phone = this.Vendorsform.get("Phone").value;
//  this.vendors.email = this.Vendorsform.get("email").value;
 this.delivery.Address = this.Deliveryform.get("Address").value;
  this.delivery.DeliveryDate = this.pipe.transform(this.Deliveryform.get("DeliveryDate").value, 'MM/dd/yyyy');

 debugger
  this.DeliveryService.create(this.delivery)
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

