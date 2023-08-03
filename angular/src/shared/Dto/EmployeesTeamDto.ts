import * as moment from "moment";
export class EmployeesTeamDto implements IEmployeesTeamDto {
    constructor(data?: IEmployeesTeamDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    NumbersOfTeamMembers: number | undefined;
    Name: string | undefined;
    EmployeesTeamMembersId:number | undefined;
    ShiftsId:number | undefined;
    // email: string | undefined;
    // Address: string | undefined;
    // Pay: string | undefined;
    // Rank: string | undefined;
    // Phone: Number | undefined;
    // DateOfJoinning: string | undefined;

    Id: number
   
    
    static fromJS(data: any): EmployeesTeamDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new EmployeesTeamDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["NumbersOfTeamMembers"] =this.NumbersOfTeamMembers 
             data["Name"] = this.Name
             data["EmployeesTeamMembersId"] = this.EmployeesTeamMembersId
             data["ShiftsId"] = this.ShiftsId
            //  data["email"] = this.email
            //  data["Address"] = this.Address
            //  data["Pay"] =  this.Pay
            //  data["Rank"] = this.Rank
            //  data["Phone"] = this.Phone

            //  data["DateOfJoinning"] = this.DateOfJoinning

         
             data["Id"] = this.Id
        }
    }
}

export interface IEmployeesTeamDto {
    NumbersOfTeamMembers: number | undefined;
    Name: string | undefined;
    EmployeesTeamMembersId:number | undefined;
    ShiftsId:number | undefined;

    Id: number
}
