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
  editid : number;
  id : number;
  

  public btnshow : boolean = true
  public purchasing : PurchasingDto = new PurchasingDto()
  Purchasingform = new FormGroup({
      amount: new FormControl(""),
      Name: new FormControl(""),
      Description: new FormControl(""),
      Quality: new FormControl(""),
      Quantity: new FormControl(""),
      PurchaseDate: new FormControl(""),
      // Phone: new FormControl(""),
      // email: new FormControl(""),
      // Address: new FormControl(""),
  });
  ngOnInit(): void {
    debugger
    const editid = localStorage.getItem('editid');
    this.editid =  parseInt(editid);
    if (editid != undefined && editid != null) {
     
      this.PurchasingService.GetById(this.editid).subscribe((Response) => {
       this.id = this.editid  
        this.Purchasingform.controls.amount.setValue(Response.result.amount);
        this.Purchasingform.controls.Name.setValue(Response.result.name);
        this.Purchasingform.controls.Decription.setValue(Response.result.description);
        this.Purchasingform.controls.Quality.setValue(Response.result.quality);
        this.Purchasingform.controls.Quantity.setValue(Response.result.quantity);


        this.Purchasingform.controls.PurchaseDate.setValue(Response.result.purchaseDate);
        console.log(Response.result.purchaseDate)
        // this.Paymentsform.controls.Phone.setValue(Response.result.phone);
        // this.Paymentsform.controls.email.setValue(Response.result.email);
        // this.Paymentsform.controls.Address.setValue(Response.result.address);
        // this.Customersform.controls.NetCharge.setValue(Response.result.netCharge);
        
        localStorage.removeItem('editid');
        debugger
        this.editid = null;
      });
    }

    this.Purchasingform = this._formBuilder.group({
      //NetCharge: ["", Validators.required,],
      amount: [""],
      Name: [""],
      Description: [""],
      Quality: [""],
      Quantity: [""],


      //PurchaseDate: [""],
      // Phone: [""],
      // email: [""],
      // Address: [""],
      PurchaseDate: [
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
    private PurchasingService : PurchasingService,
    private _formBuilder : FormBuilder,



  ) {
    this.tomorrow.setDate(this.tomorrow.getDate());

  }
  tomorrow = new Date();
  pipe = new DatePipe('en-US')




  
 save(){
debugger
this.purchasing.Id = this.id;
  this.purchasing.amount = this.Purchasingform.get("amount").value;
  this.purchasing.Name = this.Purchasingform.get("Name").value;
  this.purchasing.Description = this.Purchasingform.get("Description").value;
  this.purchasing.Quality = this.Purchasingform.get("Quality").value;
  this.purchasing.Quantity = this.Purchasingform.get("Quantity").value;


  // this.purchasing.PurchaseDate = this.Purchasingform.get("PurchaseDate").value;
  this.purchasing.PurchaseDate = this.pipe.transform(this.Purchasingform.get("PurchaseDate").value, 'MM/dd/yyyy');

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

