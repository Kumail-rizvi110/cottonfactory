import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorsDto } from '@shared/Dto/VendorsDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { VendorsService } from '@shared/services/Vendors-service';
import { PaymentService } from '@shared/services/Payment-service';
import { PaymentDto } from '@shared/Dto/PaymentDto';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit{  
  public btnshow : boolean = true
  public payments : PaymentDto = new PaymentDto()
     Paymentsform = new FormGroup({
      Amount: new FormControl(""),
      PaymentDate: new FormControl(""),
      // Phone: new FormControl(""),
      // email: new FormControl(""),
      // Address: new FormControl(""),
  });
  ngOnInit(): void {
    this.Paymentsform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      Amount: [""],
      PaymentDate: [""],
      // Phone: [""],
      // email: [""],
      // Address: [""],
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
    private PaymentService : PaymentService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.payments.Amount = this.Paymentsform.get("Amount").value;
  this.payments.PaymentDate = this.pipe.transform(this.Paymentsform.get("PaymentDate").value, 'MM/dd/yyyy');
//   this.vendors.phone = this.Vendorsform.get("Phone").value;
//  this.vendors.email = this.Vendorsform.get("email").value;
//  this.vendors.address = this.Vendorsform.get("Address").value;
//  this.vendors.Date = this.pipe.transform(this.Vendorsform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.PaymentService.create(this.payments)
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
