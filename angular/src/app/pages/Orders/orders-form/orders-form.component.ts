import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersDto } from '@shared/Dto/OrdersDto';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {

  // editid : number;
  // id : number;
  //   public btnshow : boolean = true
  //   public sales : OrdersDto = new OrdersDto()
  //      Saleform = new FormGroup({
  //       NetCharge: new FormControl(""),
  //       product_id: new FormControl(""),
  //       customer_id: new FormControl(""),
  //       quantity: new FormControl(""),
  //       price: new FormControl(""), 
  //       Date: new FormControl(""),
  //   });
    ngOnInit(): void {
  //     const editid = localStorage.getItem('editid');
  //     this.editid =  parseInt(editid);
  //     if (editid != undefined && editid != null) {
       
  //       this.OrdersService.GetById(this.editid).subscribe((Response) => {
  //        this.id = this.editid  
  //         this.Saleform.controls.price.setValue(Response.result.price);
  //         this.Saleform.controls.quantity.setValue(Response.result.quantity);
  //         this.Saleform.controls.customer_id.setValue(Response.result.customer_id);
  //         this.Saleform.controls.product_id.setValue(Response.result.product_id);
  //         //this.Saleform.controls.Date.setValue(Response.result.date);
  //         this.Saleform.controls.NetCharge.setValue(Response.result.netCharge);
  
  //         let req = new Date(this.pipe.transform(Response.result.date, 'yyyy/MM/dd'))
  //         // this.LibraryForm.controls.Uploaddate.setValue(LBDate);
  //         this.Saleform.controls.Date.setValue(this.pipe.transform(req, 'yyyy-MM-dd'))
  
  //         localStorage.removeItem('editid');
  //         debugger
  //         this.editid = null;
  //       });
     }
  //     this.Saleform = this._formBuilder.group({
  //       NetCharge: ["", Validators.required,],
  //       product_id: [""],
  //       customer_id: [""],
  //       quantity: [""],
  //       price: [""],
       
  //       Date: [
  //         {
  //           value: new Date(),
  //           disabled: false,
  //       },
  //       Validators.required,
  //       ],
       
  //     });
  //   }
  //   constructor(
     
  //     private userService: UserServiceProxy,
  
  //     private router: Router,
  //     private route: ActivatedRoute,
  //     private OrdersService : OrdersService,
  //     private _formBuilder : FormBuilder,
  
  
  
  //   ) {
  //     this.tomorrow.setDate(this.tomorrow.getDate());
  
  //   }
  //   tomorrow = new Date();
  //   pipe = new DatePipe('en-US')
  
  
  
  
    
  //  save(){
  // debugger
  // this.sales.Id = this.id;
  //   this.sales.Price = this.Saleform.get("price").value;
  //  this.sales.Quantity = this.Saleform.get("quantity").value;
  //  this.sales.Customer_id = this.Saleform.get("customer_id").value;
  //  this.sales.Product_id = this.Saleform.get("product_id").value;
  //  this.sales.NetCharge = this.Saleform.get("NetCharge").value;
  //  this.sales.Date = this.pipe.transform(this.Saleform.get("Date").value, 'MM/dd/yyyy');
  
  //  debugger
  //   this.saleService.create(this.sales)
  //   .subscribe((res) => {
  //     debugger
  //     var mes = res['result'];
  //     debugger
  //     var mes1=mes.split("_")[0]
  //     debugger
  //     var mes2=mes.split("_")[1]
  //     debugger
  
  //     if (mes == 1) {
  
  //       abp.message.info("SuccessFully Create", "Status");
       
  //     }
   
  //     else if(mes==2){
  //       abp.message.success("SuccessFully Update", "Status");
  
  //     }
  
  //     window.history.back();
        
        
        
        
  //     },
      
  //     err => {
  //       abp.message.error(err);
  //     });
    
      
     
  
  // }
  }
  