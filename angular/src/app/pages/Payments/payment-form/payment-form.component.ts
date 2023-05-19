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
  
  editid : number;
  id : number;
  
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
    debugger
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.PaymentService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Paymentsform.controls.Amount.setValue(Response.result.amount);
        // let date=this.pipe.transform(Response.result.paymentDate, 'MM/dd/yyyy');
        // this.Paymentsform.controls.PaymentDate.setValue(date);


        let req = new Date(this.pipe.transform(Response.result.paymentDate, 'yyyy/MM/dd'))
        // this.LibraryForm.controls.Uploaddate.setValue(LBDate);
        this.Paymentsform.controls.PaymentDate.setValue(this.pipe.transform(req, 'yyyy-MM-dd'))
        // this.Paymentsform.controls.Phone.setValue(Response.result.phone);
        // this.Paymentsform.controls.email.setValue(Response.result.email);
        // this.Paymentsform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }
    this.Paymentsform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      Amount: [""],
      //PaymentDate: [""],
      // Phone: [""],
      // email: [""],
      // Address: [""],
      PaymentDate: [
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
    private PaymentService : PaymentService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')
  // datePipe = new DatePipe("en-US");



  
 save(){
debugger
this.payments.Id= this.id;
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
