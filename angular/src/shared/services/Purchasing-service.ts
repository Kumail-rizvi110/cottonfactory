import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";
import { PurchasingDto } from "@shared/Dto/PurchasingDto";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { options } from "toastr";


@Injectable({
  providedIn: 'root'
})
export class PurchasingService {
  private REST_API_SERVER = AppConsts.remoteServiceBaseUrl; // "http://localhost:21021";
  $isDataLoaded = new EventEmitter();

  constructor(private http: HttpClient) { }


   create(body: PurchasingDto | undefined) : Observable<any> {
     debugger
    const content_ = JSON.stringify(body);

        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        };
      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/Purchase/Create',content_, options_) 
    }

    PostVendorsListPagination(values): Observable<any> {
        debugger
      let headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      

      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/Purchase/PostFilterData', values, options)
          .pipe(map(res => {
              
              this.$isDataLoaded.emit(res['result']);
  
          }));
  }


  Delete(id) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
        });
    let options = {headers : headers};
    return this.http.delete<any>(this.REST_API_SERVER +'/api/services/app/Purchase/Delete?id='+id,options)
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
       return this.http.get<any>(this.REST_API_SERVER+'/api/services/app/Purchase/GetPurchaseById?Id='+id, options);
    }

  
}
