import * as moment from "moment";
export class EmployeesDto implements IEmployeesDto {
    constructor(data?: IEmployeesDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    FirstName: string | undefined;
    LastName: string | undefined;
    email: string | undefined;
    Address: string | undefined;
    Pay: string | undefined;
    Rank: string | undefined;
    Phone: Number | undefined;
    DateOfJoinning: string | undefined;

    id: number
   
    
    static fromJS(data: any): EmployeesDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new EmployeesDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["FirstName"] =this.FirstName 
             data["LastName"] = this.LastName
             data["email"] = this.email
             data["Address"] = this.Address
             data["Pay"] =  this.Pay
             data["Rank"] = this.Rank
             data["Phone"] = this.Phone

             data["DateOfJoinning"] = this.DateOfJoinning

         
             data["id"] = this.id
        }
    }
}

export interface IEmployeesDto {
    FirstName: string | undefined;
    LastName: string | undefined;
    email: string | undefined;
    Address: string | undefined;
    Pay: string | undefined;
    Rank: string | undefined;
    Phone: Number | undefined;
    DateOfJoinning: string | undefined;

    
    id: number
}
