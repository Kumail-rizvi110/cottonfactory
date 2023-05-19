import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { EmployeesDto } from '@shared/Dto/EmployeesDto';

//import { Component, OnInit } from '@angular/core';
// import { Component, Injector, OnInit } from '@angular/core';
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
// import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AttendanceDto } from '@shared/Dto/AttendanceDto';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SalesService } from '@shared/services/sales-service';
import { EmployeesService } from '@shared/services/Employees-service';
import { AttendanceService } from '@shared/services/Attendance-service';
@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit {

  editid : number;
id : number;
  public btnshow : boolean = true
  public attendance : AttendanceDto = new AttendanceDto()
  Attendanceform = new FormGroup({
      AttendanceMark: new FormControl(""),
      Date: new FormControl(""),
      // email: new FormControl(""),
      // Address: new FormControl(""),
      // Pay: new FormControl(""),
      // Rank: new FormControl(""),
      // Phone: new FormControl(""),
      // DateOfJoinning: new FormControl(""),


  });
  ngOnInit(): void {
    debugger
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.attendanceService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Attendanceform.controls.AttendanceMark.setValue(Response.result.attendanceMark);
       // this.Attendanceform.controls.Date.setValue(Response.result.date);

        
        let req = new Date(this.pipe.transform(Response.result.date, 'yyyy/MM/dd'))
        // this.LibraryForm.controls.Uploaddate.setValue(LBDate);
        this.Attendanceform.controls.Date.setValue(this.pipe.transform(req, 'yyyy-MM-dd'))

        // this.Attendanceform.controls.Phone.setValue(Response.result.phone);
        // this.Attendanceform.controls.email.setValue(Response.result.email);
        // this.Attendanceform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }

    this.Attendanceform = this._formBuilder.group({
      // NetCharge: ["", Validators.required,],
      AttendanceMark: [""],
       //Date: [""],
      // email: [""],
      // Address: [""],
      // Pay: [""],
      // Rank: [""],
      // Phone: [""],


     
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
    private attendanceService : AttendanceService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
this.attendance.Id= this.id;
  this.attendance.AttendanceMark = this.Attendanceform.get("AttendanceMark").value;
  this.attendance.Date = this.pipe.transform(this.Attendanceform.get("Date").value, 'MM/dd/yyyy');
  //  this.employees.email = this.Employeesform.get("email").value;
//  this.employees.Address = this.Employeesform.get("Address").value;
//  this.employees.Pay = this.Employeesform.get("Pay").value;
//  this.employees.Rank = this.Employeesform.get("Rank").value;
//  this.employees.Phone = this.Employeesform.get("Phone").value;
//  this.employees.DateOfJoinning = this.pipe.transform(this.Employeesform.get("DateOfJoinning").value, 'MM/dd/yyyy');


 debugger
  this.attendanceService.create(this.attendance)
  
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

