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
    Price: number | undefined;
    Quantity: number | undefined;
    Customer_id: number | undefined;
    Product_id: number | undefined;
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
             data["customer_id"] = this.Customer_id
             data["price"] = this.Price
             data["quantity"] = this.Quantity
             data["product_id"] =  this.Product_id
             data["NetCharge"] = this.NetCharge
         
             data["id"] = this.id
        }
    }
}

export interface ISaleDto {
    Date: string | undefined;
    Price: number | undefined;
    Quantity: number | undefined;
    Customer_id: number | undefined;
    Product_id: number | undefined;
    NetCharge: Number | undefined;
    
    id: number
}
