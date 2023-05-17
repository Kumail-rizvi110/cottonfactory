import * as moment from "moment";
export class AttendanceDto implements IAttendanceDto {
    constructor(data?: IAttendanceDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    AttendanceMark: string | undefined;
    Date: string | undefined;
    // email: string | undefined;
    // Address: string | undefined;
    // Pay: string | undefined;
    // Rank: string | undefined;
    // Phone: Number | undefined;
    // DateOfJoinning: string | undefined;

    id: number
   
    
    static fromJS(data: any): AttendanceDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new AttendanceDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["AttendanceMark"] =this.AttendanceMark 
             data["Date"] = this.Date
            //  data["email"] = this.email
            //  data["Address"] = this.Address
            //  data["Pay"] =  this.Pay
            //  data["Rank"] = this.Rank
            //  data["Phone"] = this.Phone

            //  data["DateOfJoinning"] = this.DateOfJoinning

         
             data["id"] = this.id
        }
    }
}

export interface IAttendanceDto {
    AttendanceMark: string | undefined;
    Date: string | undefined;

    
    id: number
}
