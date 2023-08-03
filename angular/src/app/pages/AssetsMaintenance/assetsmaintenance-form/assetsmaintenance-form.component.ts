import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';
import { MatDialogRef, MatCheckboxChange, MatAutocompleteSelectedEvent } from '@angular/material';
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
import { AssetsMaintenanceDto } from '@shared/Dto/AssetsMaintenanceDto';
import { AssetsMaintenanceService } from '@shared/services/AssetsMaintenance-service';
@Component({
  selector: 'app-assetsmaintenance-form',
  templateUrl: './assetsmaintenance-form.component.html',
  styleUrls: ['./assetsmaintenance-form.component.css']
})
export class AssetsmaintenanceFormComponent implements OnInit {
  public userList1 = [];

public Assets: string;
  editid : number;
  id : number;

  public btnshow : boolean = true
  public assets : AssetsMaintenanceDto = new AssetsMaintenanceDto()
     AssetsMaintenanceform = new FormGroup({
      Description: new FormControl(""),
      Cost: new FormControl(""),
      MaintenanceDate: new FormControl(""),
      MaintenanceTime: new FormControl(""),
      AssetsId: new FormControl(""),


  });
  ngOnInit(): void {
debugger
this.getpatientListByName();

    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.assetsmaintenanceService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.AssetsMaintenanceform.controls.Description.setValue(Response.result.description);
        this.AssetsMaintenanceform.controls.Cost.setValue(Response.result.cost);
        this.AssetsMaintenanceform.controls.AssetsId.setValue(Response.result.assetsId);
        this.AssetsMaintenanceform.controls.MaintenanceTime.setValue(Response.result.maintenanceTime);


        // this.Assetsform.controls.DateOfBuying.setValue(Response.result.dateOfBuying);

        let req = new Date(this.pipe.transform(Response.result.maintenanceDate, 'yyyy/MM/dd'))
        // this.LibraryForm.controls.Uploaddate.setValue(LBDate);
        this.AssetsMaintenanceform.controls.MaintenanceDate.setValue(this.pipe.transform(req, 'yyyy-MM-dd'))

        // this.Attendanceform.controls.Phone.setValue(Response.result.phone);
        // this.Attendanceform.controls.email.setValue(Response.result.email);
        // this.Attendanceform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }

    this.AssetsMaintenanceform = this._formBuilder.group({
     
      MaintenanceTime: [""],
      Cost: [""],
      Description: [""],
      AssetsId: [""],

      //DateOfBuying: [""],

      MaintenanceDate: [
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
    private assetsmaintenanceService : AssetsMaintenanceService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')

  onSelectChange(name): void {
    this.Assets =name;
      }
      
      // onOptionSelected(event: MatAutocompleteSelectedEvent) {
      //   // Handle the selected option
      //   console.log(event.option.value);
      // }
    
    
      // get(id: number) {
      //   debugger;
      //   console.log(id);
      //   // Your logic here
      // }
      selectedUserName: string;
      selectedUserId: number;
    
      onOptionSelected(event: MatAutocompleteSelectedEvent) {
        const selectedUser = this.userList1.find(user => user.id === event.option.value);
        this.selectedUserName = selectedUser.name;
        this.selectedUserId = selectedUser.id;
        console.log(selectedUser.name);
        // Your logic here
      }
    
    
      getname(name): void {
        debugger
    this.Assets =name;
    }

     getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
    getpatientListByName(): void {
      debugger
              this.assetsmaintenanceService.getList().subscribe((Response) => {
                Response.forEach((element) => {
                  const user = {
                      id: element.id,
                      name: element.name,
                  };
                  debugger
                  this.userList1.push(user);
              });
              console.log(this.userList1);
              
        });
  }


  
 save(){
debugger
this.assets.Id= this.id;
 this.assets.Cost = this.AssetsMaintenanceform.get("Cost").value;
 this.assets.AssetsId = this.AssetsMaintenanceform.get("AssetsId").value;
 this.assets.Description = this.AssetsMaintenanceform.get("Description").value;

 this.assets.MaintenanceTime = this.AssetsMaintenanceform.get("MaintenanceTime").value;


 this.assets.MaintenanceDate = this.pipe.transform(this.AssetsMaintenanceform.get("MaintenanceDate").value, 'MM/dd/yyyy');

 debugger
  this.assetsmaintenanceService.create(this.assets)
  
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

