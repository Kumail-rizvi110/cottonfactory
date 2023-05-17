//import { Component, OnInit } from '@angular/core';
import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MatCheckboxChange } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppComponentBase } from '@shared/app-component-base';
import {
  UserServiceProxy,
  CreateUserDto,
  RoleDto
} from '@shared/service-proxies/service-proxies';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { SaleDto } from '@shared/Dto/SaleDto';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SalesService } from '@shared/services/sales-service';
@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {


  public btnshow : boolean = true
  public sales : SaleDto = new SaleDto()
  Salesform = new FormGroup({
      NetCharge: new FormControl(""),
      product_id: new FormControl(""),
      customer_id: new FormControl(""),
      quantity: new FormControl(""),
      price: new FormControl(""),
      Date: new FormControl(""),
  });
  ngOnInit(): void {
    this.Salesform = this._formBuilder.group({
      NetCharge: ["", Validators.required,],
      product_id: [""],
      customer_id: [""],
      quantity: [""],
      price: [""],
     
      Date: [
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
    private SalesService : SalesService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.sales.price = this.Salesform.get("price").value;
 this.sales.quantity = this.Salesform.get("quantity").value;
//  this.sales.customer_id = this.Salesform.get("customer_id").value;
//  this.sales.product_id = this.Salesform.get("product_id").value;
 this.sales.NetCharge = this.Salesform.get("NetCharge").value;
 this.sales.Date = this.pipe.transform(this.Salesform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.SalesService.create(this.sales)
  
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
