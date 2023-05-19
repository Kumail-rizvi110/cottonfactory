import * as moment from "moment";
export class VendorsDto implements IVendorsDto {
    constructor(data?: IVendorsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    firstName: string | undefined;
    lastName: string | undefined;
    phone: number | undefined;
    email: string | undefined;
    address: string | undefined;
    
    Id: number
   
    
    static fromJS(data: any): VendorsDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new VendorsDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["firstName"] =this.firstName 
             data["lastName"] = this.lastName
             data["phone"] = this.phone
             data["email"] = this.email
             data["address"] =  this.address
         
             data["Id"] = this.Id
        }
    }
}

export interface IVendorsDto {
    firstName: string | undefined;
    lastName: string | undefined;
    phone: number | undefined;
    email: string | undefined;
    address: string | undefined;
    
    Id: number
}
