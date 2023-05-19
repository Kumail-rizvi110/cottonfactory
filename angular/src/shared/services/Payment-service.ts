import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";
import { PaymentDto } from "@shared/Dto/PaymentDto";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { options } from "toastr";


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private REST_API_SERVER = AppConsts.remoteServiceBaseUrl; // "http://localhost:21021";
  $isDataLoaded = new EventEmitter();

  constructor(private http: HttpClient) { }


   create(body: PaymentDto | undefined) : Observable<any> {
     debugger
    const content_ = JSON.stringify(body);

        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        };
      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/Payments/Create',content_, options_) 
    }

    PostSalesListPagination(values): Observable<any> {
        debugger
      let headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      

      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/Payments/PostFilterData?page=' , values, options)
          .pipe(map(res => {
              
              this.$isDataLoaded.emit(res['result']);
  
          }));
  }

  

  Delete(id) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
        });
    let options = {headers : headers};
    return this.http.delete<any>(this.REST_API_SERVER +'/api/services/app/Payments/Delete?id='+id,options)
    .pipe(map(res => {
      this.$isDataLoaded.emit(res['result']);
     }));
  }


GetById(id : number) : Observable<any>
    {
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
    });
    let options = { headers: headers };
       return this.http.get<any>(this.REST_API_SERVER+'/api/services/app/Payments/GetPaymentsById?Id='+id, options);
    }

  
}
