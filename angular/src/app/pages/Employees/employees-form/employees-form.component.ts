import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { EmployeesDto } from '@shared/Dto/EmployeesDto';

//import { Component, OnInit } from '@angular/core';
// import { Component, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MatCheckboxChange, MatTableDataSource } from '@angular/material';
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
import { EmployeesDto } from '@shared/Dto/EmployeesDto';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { SalesService } from '@shared/services/sales-service';
import { EmployeesService } from '@shared/services/Employees-service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {
  editid : number;
  id : number;
  dataSource: any
  public EditItems = []
  public element = []

  public btnshow : boolean = true
  public employees : EmployeesDto = new EmployeesDto()
  Employeesform = new FormGroup({
      FirstName: new FormControl(""),
      LastName: new FormControl(""),
      email: new FormControl(""),
      Address: new FormControl(""),
      Pay: new FormControl(""),
      Rank: new FormControl(""),
      Phone: new FormControl(""),
      DateOfJoinning: new FormControl(""),


  });
  // id: number

  ngOnInit(): void {

    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.employeesService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Employeesform.controls.FirstName.setValue(Response.result.firstName);
        this.Employeesform.controls.LastName.setValue(Response.result.lastName);
        this.Employeesform.controls.email.setValue(Response.result.email);
        this.Employeesform.controls.Address.setValue(Response.result.address);
        this.Employeesform.controls.Pay.setValue(Response.result.pay);
        this.Employeesform.controls.Rank.setValue(Response.result.rank);
        this.Employeesform.controls.Phone.setValue(Response.result.phone);
        this.Employeesform.controls.DateOfJoinning.setValue(Response.result.dateOfJoinning);

        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }

    this.Employeesform = this._formBuilder.group({
      // NetCharge: ["", Validators.required,],
      FirstName: [""],
      LastName: [""],
      email: [""],
      Address: [""],
      Pay: [""],
      Rank: [""],
      Phone: [""],


     
      DateOfJoinning: [
        {
          value: new Date(),
          disabled: false,
      },
      Validators.required,
      ],
     
    });

    // if (window.location.href.split("/")[6] != undefined) {
    //   this.btnshow = false;
    // }
    // if (this.id == null) {
    //   this.id = this.route.snapshot.params.id;


    //   if (this.id) {
    //     debugger
    //     this.employeesService.EditIssue(this.id).subscribe((res) => {
    //       debugger
    //       console.log(res);
    //       this.Employeesform.controls.FirstName.setValue(res["result"].firstName);
    //       //this.currentPatientId = res['result'].patientId;
    //       this.Employeesform.controls.LastName.setValue(res['result'].lastName);
    //       debugger
         
    //       //this.IssueForm.controls.PatientId.setValue(res['result'].patientId);
    //       this.Employeesform.controls.email.setValue(res["result"].email);
    //       this.Employeesform.controls.Address.setValue(res["result"].address);
    //       this.Employeesform.controls.Pay.setValue(res['result'].pay);
    //       this.Employeesform.controls.Rank.setValue(res['result'].rank);
    //       this.Employeesform.controls.Phone.setValue(res['result'].phone);
    //       this.Employeesform.controls.DateOfJoinning.setValue(res['result'].dateOfJoinning);

    //       // this.loaditem(res['result'].storeId);
    //       // this.IssueForm.controls.Notes.setValue(res['result'].notes);
    //       // this.EditItems = res['result'].issueItems


    //       // this.mRNo=res["result"].mrno;
    //       // this.patName=res["result"].pName;
    //       // this.docName=res["result"].doctorName;
    //       // this.iDate=res["result"].issueDate
    //       var i;
    //       for (i = 0; i <= this.EditItems.length; i++) {
    //         const obj =
    //         {

    //           "firstName": res['result'].issueItems[i].firstName,
    //           "lastName": res["result"].issueItems[i].lastName,
    //           "email": res["result"].issueItems[i].email,
    //           "address": res["result"].issueItems[i].address,
    //           "pay":res["result"].issueItems[i].pay,
    //           "rank":res["result"].issueItems[i].rank,

    //           "phone":res["result"].issueItems[i].phone,

    //          // "pay":res["result"].issueItems[i].pay,

    //           "dateOfJoinning": formatDate( res["result"].issueItems[i].dateOfJoinning,'MM/dd/yyyy','en-US'),
    //           // "itemIssue":formatDate( res["result"].issueItems[i].itemIssue,'MM/dd/yyyy','en-US'),
    //           // "StockQty": res["result"].issueItems[i].stockQty,
    //           // "id":  res["result"].issueItems[i].id

              
    //         }
    //         this.element.push(obj);
    //         this.dataSource = new MatTableDataSource(this.element);
    //       }
         
         
    //     });
    //   }
    // }
  }
  constructor(
   
    private userService: UserServiceProxy,

    private router: Router,
    private route: ActivatedRoute,
    private employeesService : EmployeesService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
 this.employees.Id = this.id;
  this.employees.FirstName = this.Employeesform.get("FirstName").value;
 this.employees.LastName = this.Employeesform.get("LastName").value;
 this.employees.email = this.Employeesform.get("email").value;
 this.employees.Address = this.Employeesform.get("Address").value;
 this.employees.Pay = this.Employeesform.get("Pay").value;
 this.employees.Rank = this.Employeesform.get("Rank").value;
 this.employees.Phone = this.Employeesform.get("Phone").value;
 this.employees.DateOfJoinning = this.pipe.transform(this.Employeesform.get("DateOfJoinning").value, 'MM/dd/yyyy');


 debugger
  this.employeesService.create(this.employees)
  
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

