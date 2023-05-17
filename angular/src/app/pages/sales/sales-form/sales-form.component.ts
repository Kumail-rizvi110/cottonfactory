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

editid : number;
  public btnshow : boolean = true
  public sales : SaleDto = new SaleDto()
     Saleform = new FormGroup({
      NetCharge: new FormControl(""),
      product_id: new FormControl(""),
      customer_id: new FormControl(""),
      quantity: new FormControl(""),
      price: new FormControl(""),
      Date: new FormControl(""),
  });
  ngOnInit(): void {
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.saleService.GetById(this.editid).subscribe((Response) => {
          
        this.Saleform.controls.price.setValue(Response.result.price);
        this.Saleform.controls.quantity.setValue(Response.result.quantity);
        this.Saleform.controls.customer_id.setValue(Response.result.customer_id);
        this.Saleform.controls.product_id.setValue(Response.result.product_id);
        this.Saleform.controls.Date.setValue(Response.result.date);
        this.Saleform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }
    this.Saleform = this._formBuilder.group({
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
    private saleService : SalesService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.sales.Price = this.Saleform.get("price").value;
 this.sales.Quantity = this.Saleform.get("quantity").value;
 this.sales.Customer_id = this.Saleform.get("customer_id").value;
 this.sales.Product_id = this.Saleform.get("product_id").value;
 this.sales.NetCharge = this.Saleform.get("NetCharge").value;
 this.sales.Date = this.pipe.transform(this.Saleform.get("Date").value, 'MM/dd/yyyy');

 debugger
  this.saleService.create(this.sales)
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
