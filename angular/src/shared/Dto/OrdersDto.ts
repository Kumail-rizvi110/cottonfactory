import * as moment from "moment";
export class OrdersDto implements IOrdersDto {
    constructor(data?: IOrdersDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    OrderDate: string | undefined;
    CottonQuality: string | undefined;
    CottonQuantity: number | undefined;
    IsDelivered: boolean| undefined;
    // Price: number | undefined;
    
    // Customer_id: number | undefined;
    // Product_id: number | undefined;
    // NetCharge: Number | undefined;
    
    Id: number
   
    
    static fromJS(data: any): OrdersDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new OrdersDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["orderDate"] =this.OrderDate 
             data["cottonQuality"] = this.CottonQuality
             data["cottonQuantity"] = this.CottonQuantity
             data["IsDelivered"] = this.IsDelivered

            //  data["quantity"] = this.Quantity
            //  data["product_id"] =  this.Product_id
            //  data["NetCharge"] = this.NetCharge
         
             data["Id"] = this.Id
        }
    }
}

export interface IOrdersDto {

    OrderDate: string | undefined;
    CottonQuality: string | undefined;
    CottonQuantity: number | undefined;
    IsDelivered: boolean| undefined;

    // Date: string | undefined;
    // Price: number | undefined;
    // Quantity: number | undefined;
    // Customer_id: number | undefined;
    // Product_id: number | undefined;
    // NetCharge: Number | undefined;
    
    Id: number
}
