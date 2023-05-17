import * as moment from "moment";
export class SaleDto implements ISaleDto {
    constructor(data?: ISaleDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    Date: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
    // customer_id: number | undefined;
    // product_id: number | undefined;
    NetCharge: Number | undefined;
    
    id: number
   
    
    static fromJS(data: any): SaleDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new SaleDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["date"] =this.Date 
            //  data["customer_id"] = this.customer_id
             data["price"] = this.price
             data["quantity"] = this.quantity
            //  data["product_id"] =  this.product_id
             data["NetCharge"] = this.NetCharge
         
             data["id"] = this.id
        }
    }
}

export interface ISaleDto {
    Date: string | undefined;
    price: number | undefined;
    quantity: number | undefined;
    // customer_id: number | undefined;
    // product_id: number | undefined;
    NetCharge: Number | undefined;
    
    id: number
}
