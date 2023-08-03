import * as moment from "moment";
export class ProductionDto implements IProductionDto {
    constructor(data?: IProductionDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    ProductionDate: string | undefined;
    EmployeesTeamId: number | undefined;
    TimeTaken: string | undefined;
    Quality: string | undefined;    
    CottonProduced: number | undefined;
    CottonFiberUsed: number | undefined;
     Id: number
   
    
    static fromJS(data: any): ProductionDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new ProductionDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["ProductionDate"] =this.ProductionDate 
             data["EmployeesTeamId"] = this.EmployeesTeamId
             data["TimeTaken"] = this.TimeTaken

             data["Quality"] = this.Quality

             data["CottonProduced"] = this.CottonProduced

             data["CottonFiberUsed"] = this.CottonFiberUsed

            //  data["price"] = this.Price
            //  data["quantity"] = this.Quantity
            //  data["product_id"] =  this.Product_id
            //  data["NetCharge"] = this.NetCharge
         
             data["Id"] = this.Id
        }
    }
}

export interface IProductionDto {
    ProductionDate: string | undefined;
    EmployeesTeamId: number | undefined;
    TimeTaken: string | undefined;
    Quality: string | undefined;    
    CottonProduced: number | undefined;
    CottonFiberUsed: number | undefined;
    
    
    Id: number
}
