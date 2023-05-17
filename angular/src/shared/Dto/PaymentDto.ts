import * as moment from "moment";
export class PaymentDto implements IPaymentDto {
    constructor(data?: IPaymentDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    Amount: number | undefined;
     PaymentDate: string | undefined;
    
    id: number
   
    
    static fromJS(data: any): PaymentDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new PaymentDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["Amount"] =this.Amount 
             data["PaymentDate"] = this.PaymentDate
            //  data["price"] = this.Price
            //  data["quantity"] = this.Quantity
            //  data["product_id"] =  this.Product_id
            //  data["NetCharge"] = this.NetCharge
         
             data["id"] = this.id
        }
    }
}

export interface IPaymentDto {
     Amount: number | undefined;
     PaymentDate: string | undefined;
    // Quantity: number | undefined;
    // Customer_id: number | undefined;
    // Product_id: number | undefined;
    // NetCharge: Number | undefined;
    
    id: number
}
