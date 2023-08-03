import * as moment from "moment";
import { map } from 'rxjs/operators';

export class ImportantDocumentsDto implements IImportantDocumentsDto {
    constructor(data?: IImportantDocumentsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
    Date: string | undefined;
    Image: Uint8Array | Blob
    

   
    
    static fromJS(data: any): ImportantDocumentsDto 
    {
        ;
        data = typeof data === "object" ? data : {};
        const result = new ImportantDocumentsDto();
        result.init(data);
        return result;
    }

    init(data?: any): void {
        ;  
        if (data) {
             data["Date"] =this.Date 
             data["Image"] = this.Image
             
         

        }
    }
}

export interface IImportantDocumentsDto {
    Date: string | undefined;
    Image: Uint8Array | Blob
}
