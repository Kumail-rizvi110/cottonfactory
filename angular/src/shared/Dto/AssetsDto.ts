import * as moment from "moment";
export class AssetsDto implements IAssetsDto {
    constructor(data?: IAssetsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    FirstName: string | undefined;
    Cost: number | undefined;
    DateOfBuying: string | undefined;
    
    
    Id: number
   
    
    static fromJS(data: any): AssetsDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new AssetsDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["FirstName"] =this.FirstName 
             data["Cost"] = this.Cost
             data["DateOfBuying"] = this.DateOfBuying
             
         
             data["Id"] = this.Id
        }
    }
}

export interface IAssetsDto {
    FirstName: string | undefined;
    Cost: number | undefined;
    DateOfBuying: string | undefined;
    
    Id: number
}
