import * as moment from "moment";
export class AssetsMaintenanceDto implements IAssetsMaintenanceDto {
    constructor(data?: IAssetsMaintenanceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    MaintenanceDate: string | undefined;
    Cost: number | undefined;   
    Description: string | undefined;
    AssetsId:number | undefined;
    MaintenanceTime:string | undefined;


    
    
    Id: number
   
    
    static fromJS(data: any): AssetsMaintenanceDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new AssetsMaintenanceDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["MaintenanceDate"] =this.MaintenanceDate 
             data["Cost"] = this.Cost
             data["Description"] = this.Description
             data["AssetsId"] = this.AssetsId

             data["MaintenanceTime"] = this.MaintenanceTime

             
         
             data["Id"] = this.Id
        }
    }
}

export interface IAssetsMaintenanceDto {
    MaintenanceDate: string | undefined;
    Cost: number | undefined;   
    Description: string | undefined;
    AssetsId:number | undefined;
    MaintenanceTime:string | undefined;
    
    Id: number
}
