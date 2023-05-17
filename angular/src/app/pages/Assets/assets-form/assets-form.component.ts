import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';
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
import { AssetsDto } from '@shared/Dto/AssetsDto';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AssetsService } from '@shared/services/Assets-service';
@Component({
  selector: 'app-assets-form',
  templateUrl: './assets-form.component.html',
  styleUrls: ['./assets-form.component.css']
})
export class AssetsFormComponent implements OnInit {


  public btnshow : boolean = true
  public assets : AssetsDto = new AssetsDto()
     Assetsform = new FormGroup({
      FirstName: new FormControl(""),
      Cost: new FormControl(""),
      Date: new FormControl(""),
  });
  ngOnInit(): void {
    this.Assetsform = this._formBuilder.group({
     
      FirstName: [""],
      Cost: [""],
      DateOfBuying: [""],

      // DateOfBuying: [
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
    private assetsService : AssetsService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
  this.assets.FirstName = this.Assetsform.get("FirstName").value;
 this.assets.Cost = this.Assetsform.get("Cost").value;
 this.assets.DateOfBuying = this.pipe.transform(this.Assetsform.get("DateOfBuying").value, 'MM/dd/yyyy');

 debugger
  this.assetsService.create(this.assets)
  
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

