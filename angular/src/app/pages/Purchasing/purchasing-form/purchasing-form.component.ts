import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchasingDto } from '@shared/Dto/PurchasingDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { VendorsService } from '@shared/services/Vendors-service';
import { PurchasingService } from '@shared/services/Purchasing-service';

@Component({
  selector: 'app-purchasing-form',
  templateUrl: './purchasing-form.component.html',
  styleUrls: ['./purchasing-form.component.css']
})
export class PurchasingFormComponent implements OnInit {  
  public btnshow : boolean = true
  public purchasing : PurchasingDto = new PurchasingDto()
  Purchasingform = new FormGroup({
      amount: new FormControl(""),
      PurchaseDate: new FormControl(""),
      // Phone: new FormControl(""),
      // email: new FormControl(""),
      // Address: new FormControl(""),
  });
  ngOnInit(): void {
    this.Purchasingform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      amount: [""],
      PurchaseDate: [""],
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
    private PurchasingService : PurchasingService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.purchasing.amount = this.Purchasingform.get("amount").value;
  this.purchasing.PurchaseDate = this.Purchasingform.get("PurchaseDate").value;

//  this.vendors.lastName = this.Vendorsform.get("LastName").value;
//  this.vendors.phone = this.Vendorsform.get("Phone").value;
//  this.vendors.email = this.Vendorsform.get("email").value;
//  this.vendors.address = this.Vendorsform.get("Address").value;
//  this.vendors.Date = this.pipe.transform(this.Vendorsform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.PurchasingService.create(this.purchasing)
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

