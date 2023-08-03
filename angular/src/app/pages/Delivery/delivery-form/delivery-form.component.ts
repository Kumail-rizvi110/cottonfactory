import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryDto } from '@shared/Dto/DeliveryDto';
import { UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { DeliveryService } from '@shared/services/Delivery-service';
import { SalesService } from '@shared/services/sales-service';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {  
  public userList1 = [];

  public Delivery: string;
  editid : number;
id : number;

  public btnshow : boolean = true
  public delivery : DeliveryDto = new DeliveryDto()
     Deliveryform = new FormGroup({
      DeliveryDate: new FormControl(""),
      CustomersId: new FormControl(""),
      // LastName: new FormControl(""),
      // Phone: new FormControl(""),
      // email: new FormControl(""),
      Address: new FormControl(""),
  });
  ngOnInit(): void {
    this.getpatientListByName();

    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.DeliveryService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Deliveryform.controls.Address.setValue(Response.result.address);
        this.Deliveryform.controls.CustomersId.setValue(Response.result.customersId);

        
        this.Deliveryform.controls.DeliveryDate.setValue(Response.result.deliveryDate);
        // this.Deliveryform.controls.Phone.setValue(Response.result.phone);
        // this.Deliveryform.controls.email.setValue(Response.result.email);
        // this.Deliveryform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }
    this.Deliveryform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      //DeliveryDate: [""],
      // LastName: [""],
      // Phone: [""],
      // email: [""],
      CustomersId: [""],
      Address: [""],
      DeliveryDate: [
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
    private DeliveryService : DeliveryService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')



  onSelectChange(name): void {
    this.Delivery =name;
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
    this.Delivery =name;
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
              this.DeliveryService.getList().subscribe((Response) => {
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
this.delivery.Id = this.id;


// const currentDate = this.Deliveryform.get("DeliveryDate").value; // Replace this with your DateTime object
// const hoursToAdd =5; // Replace this with the number of hours you want to add

// const newDate = addHours(currentDate, hoursToAdd);
// console.log(newDate);

  //this.delivery.DeliveryDate = this.Deliveryform.get("DeliveryDate").value;
//  this.vendors.lastName = this.Vendorsform.get("LastName").value; 
//  this.vendors.phone = this.Vendorsform.get("Phone").value;
//  this.vendors.email = this.Vendorsform.get("email").value;
 this.delivery.Address = this.Deliveryform.get("Address").value;
 this.delivery.CustomersId = this.Deliveryform.get("CustomersId").value;

  this.delivery.DeliveryDate = this.pipe.transform(this.Deliveryform.get("DeliveryDate").value, 'MM/dd/yyyy');

 debugger
  this.DeliveryService.create(this.delivery)
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

