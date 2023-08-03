/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.0.6.0 (NJsonSchema v10.0.23.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import * as moment from "moment";
export class GetShiftsDto implements IGetShiftsDto {
    constructor(data?: IGetShiftsDto) {
        if (data) {
            // tslint:disable-next-line: prefer-const
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    
    name: string | undefined;
    id: number;

    static fromJS(data: any): GetShiftsDto {
        
        data = typeof data === "object" ? data : {};
        const result = new GetShiftsDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        
        
        if (data) {
            this.name=data["name"];

            this.id = data["id"];

        }
    }

    toJSON(data?: any): void {
        
        data = typeof data === "object" ? data : {};

        data["id"] = this.id;

        data["name"] = this.name;


        return data;
    }
}

export interface IGetShiftsDto {
    name: string | undefined;
    id: number;
   
}