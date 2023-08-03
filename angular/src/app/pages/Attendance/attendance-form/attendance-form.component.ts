import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { EmployeesDto } from '@shared/Dto/EmployeesDto';

//import { Component, OnInit } from '@angular/core';
// import { Component, Injector, OnInit } from '@angular/core';
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
  isChecked = false;
  public userList1 = [];

public Employees: string;
  editid : number;
id : number;
  public btnshow : boolean = true
  public attendance : AttendanceDto = new AttendanceDto()
  Attendanceform = new FormGroup({
      AttendanceMark: new FormControl(""),
      Date: new FormControl(""),
      EmployeesId: new FormControl(""),
      isChecked: new FormControl(""),
      // email: new FormControl(""),
      // Address: new FormControl(""),
      // Pay: new FormControl(""),
      // Rank: new FormControl(""),
      // Phone: new FormControl(""),
      // DateOfJoinning: new FormControl(""),


  });
  ngOnInit(): void {
    debugger
    let today = new Date();
   
    this.getpatientListByName();
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.attendanceService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        // this.Attendanceform.controls.AttendanceMark.setValue(Response.result.attendanceMark);
        this.Attendanceform.controls.EmployeesId.setValue(Response.result.employeesId);
        // this.Attendanceform.controls.isChecked.setValue(Response.result.isChecked);


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
      // AttendanceMark: [""],
      EmployeesId:[""],
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



  onSelectChange(name): void {
    this.Employees =name;
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
    this.Employees =name;
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
              this.attendanceService.getList().subscribe((Response) => {
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
this.attendance.Id= this.id;
  // this.attendance.AttendanceMark = this.Attendanceform.get("AttendanceMark").value;
  this.attendance.EmployeesId = this.Attendanceform.get("EmployeesId").value;
  // this.attendance.isChecked = this.Attendanceform.get("isChecked").value;


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
      abp.message.info("Attendance Already Marked", "Status");

    }

    window.history.back();
      
      
      
      
    },
    
    err => {
      abp.message.error(err);
    });
  
    
   

}
}

