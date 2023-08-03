import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesTeamDto } from '@shared/Dto/EmployeesTeamDto';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorsDto } from '@shared/Dto/VendorsDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { OrdersService } from '@shared/services/Orders-service';
import { PaymentService } from '@shared/services/Payment-service';
import { PaymentDto } from '@shared/Dto/PaymentDto';
import { MatAutocompleteSelectedEvent } from '@angular/material';
@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {
  public userList1 = [];
  public doctors = []
  
  public Team: string;
  editid : number;
  id : number;
    public btnshow : boolean = true
    public team : EmployeesTeamDto = new EmployeesTeamDto()
     Teamform = new FormGroup({
      NumbersOfTeamMembers: new FormControl(""),
      Name: new FormControl(""),
      EmployeesTeamMembersId: new FormControl(""),
      ShiftsId: new FormControl(""),
        // price: new FormControl(""), 
        // Date: new FormControl(""),
    });
    ngOnInit(): void {
      debugger
      this.GetShifts();
      // this.loadDoctors();
      // this.getpatientListByName();

      const editid = localStorage.getItem('editid');
      this.editid =  parseInt(editid);
      if (editid != undefined && editid != null) {
       
        this.OrdersService.GetById(this.editid).subscribe((Response) => {
         this.id = this.editid  
          this.Teamform.controls.NumbersOfTeamMembers.setValue(Response.result.numbersOfTeamMembers);
          this.Teamform.controls.Name.setValue(Response.result.name);
          this.Teamform.controls.ShiftsId.setValue(Response.result.shiftsId);
          // this.Teamform.controls.EmployeesTeamMembersId.setValue(Response.result.employeesTeamMembersId);

          //this.Saleform.controls.Date.setValue(Response.result.date);
          // this.Teamform.controls.NetCharge.setValue(Response.result.netCharge);
  
          // let req = new Date(this.pipe.transform(Response.result.date, 'yyyy/MM/dd'))
          // // this.LibraryForm.controls.Uploaddate.setValue(LBDate);
          // this.Teamform.controls.Date.setValue(this.pipe.transform(req, 'yyyy-MM-dd'))
  
          localStorage.removeItem('editid');
          debugger
          this.editid = null;
        });
     }
      this.Teamform = this._formBuilder.group({
        // NetCharge: ["", Validators.required,],
        NumbersOfTeamMembers: [""],
        Name: [""],
        // EmployeesTeamMembersId: [""],
        ShiftsId: [""],
       
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
      private OrdersService : OrdersService,
      private _formBuilder : FormBuilder,
  
  
  
    ) {
      this.tomorrow.setDate(this.tomorrow.getDate());
  
    }
    tomorrow = new Date();
    pipe = new DatePipe('en-US')
  
  

    // onSelectChange(name): void {
    //   this.Team =name;
    //     }
        
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
      
        // onOptionSelected(event: MatAutocompleteSelectedEvent) {
        //   const selectedUser = this.userList1.find(user => user.id === event.option.value);
        //   this.selectedUserName = selectedUser.name;
        //   this.selectedUserId = selectedUser.id;
        //   console.log(selectedUser.name);
        //   // Your logic here
        // }
      
      
      //   getname(name): void {
      //     debugger
      // this.Team =name;
      // }
  
    //    getCurrentDate(): string {
    //   const today = new Date();
    //   const year = today.getFullYear();
    //   const month = (today.getMonth() + 1).toString().padStart(2, '0');
    //   const day = today.getDate().toString().padStart(2, '0');
    //   const formattedDate = `${year}-${month}-${day}`;
  
    //   return formattedDate;
    // }
    //   getpatientListByName(): void {
    //     debugger
    //             this.OrdersService.getList().subscribe((Response) => {
    //               Response.forEach((element) => {
    //                 const user = {
    //                     id: element.id,
    //                     name: element.name,
    //                 };
    //                 debugger
    //                 this.userList1.push(user);
    //             });
    //             console.log(this.userList1);
                
    //       });
    // }
  
  //   loadDoctors(): void {
  //     this.userService.getList().subscribe((response) => {
  //       response.forEach((element) => {
  //         const doctor = {
  //           id: element.id,
  //           name: element.name, 
  //         };
  //         this.doctors.push(doctor);
  //       });
  //     });
  //   }
  
//     onDoctorChange(event) {
//       let target = event.source.selected._element.nativeElement;
//       let selectedData = {
//         value: "DoctorId",
//         text: target.innerText.trim(),
//       };
// }

GetShifts(): void { 
  debugger

      this.OrdersService.GetShifts().subscribe((response) => {
        console.log(response['result'])
        
        response['result'].forEach((element) => {
          const report = {
            id: element.Id,
            name: element.Name
          };
          this.userList1.push(report)
        });
                 
        });
      
      
       }


    
   save(){
  debugger
  this.team.Id = this.id;
    this.team.NumbersOfTeamMembers = this.Teamform.get("NumbersOfTeamMembers").value;
   this.team.Name = this.Teamform.get("Name").value;
  //  this.team.EmployeesTeamMembersId = this.Teamform.get("EmployeesTeamMembersId").value;
   this.team.ShiftsId = this.Teamform.get("ShiftsId").value;
  //  this.sales.NetCharge = this.Saleform.get("NetCharge").value;
  //  this.sales.Date = this.pipe.transform(this.Saleform.get("Date").value, 'MM/dd/yyyy');
  
   debugger
    this.OrdersService.create(this.team)
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
  