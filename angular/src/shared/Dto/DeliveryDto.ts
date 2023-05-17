import * as moment from "moment";
export class DeliveryDto implements IDeliveryDto {
    constructor(data?: IDeliveryDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    DeliveryDate: string | undefined;
    Address: string | undefined;
    
    id: number
   
    
    static fromJS(data: any): DeliveryDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new DeliveryDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["DeliveryDate"] =this.DeliveryDate 
            //  data["lastName"] = this.lastName
            //  data["phone"] = this.phone
            //  data["email"] = this.email
             data["Address"] =  this.Address
         
             data["id"] = this.id
        }
    }
}

export interface IDeliveryDto {
    DeliveryDate: string | undefined;
    Address: string | undefined;
    
    id: number
}