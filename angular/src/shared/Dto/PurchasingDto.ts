import * as moment from "moment";
export class PurchasingDto implements IPurchasingDto {
    constructor(data?: IPurchasingDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    amount: number | undefined;
    PurchaseDate: string | undefined;
    // phone: number | undefined;
    // email: string | undefined;
    // address: string | undefined;
    
    Id: number
   
    
    static fromJS(data: any): PurchasingDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new PurchasingDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["amount"] =this.amount 
             data["PurchaseDate"] = this.PurchaseDate
            //  data["phone"] = this.phone
            //  data["email"] = this.email
            //  data["address"] =  this.address
         
             data["Id"] = this.Id
        }
    }
}

export interface IPurchasingDto {
    amount: number | undefined;
    PurchaseDate: string | undefined;
    // phone: number | undefined;
    // email: string | undefined;
    // address: string | undefined;
    
    Id: number
}
