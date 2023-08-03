import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";
import { AssetsMaintenanceDto } from "@shared/Dto/AssetsMaintenanceDto";
import { GetAssetsDto } from "@shared/Dto/GetAssetsDto";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { options } from "toastr";


@Injectable({
  providedIn: 'root'
})
export class AssetsMaintenanceService {
  private REST_API_SERVER = AppConsts.remoteServiceBaseUrl; // "http://localhost:21021";
  $isDataLoaded = new EventEmitter();

  constructor(private http: HttpClient) { }


   create(body: AssetsMaintenanceDto | undefined) : Observable<any> {
     debugger
    const content_ = JSON.stringify(body);

        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        };
      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/AssetsMaintenance/Create',content_, options_) 
    }

    PostSalesListPagination(values): Observable<any> {
        debugger
      let headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      

      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/AssetsMaintenance/PostFilterData?page=' , values, options)
          .pipe(map(res => {
              
              this.$isDataLoaded.emit(res['result']);
  
          }));
  }

  

  Delete(id) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
        });
    let options = {headers : headers};
    return this.http.delete<any>(this.REST_API_SERVER +'/api/services/app/AssetsMaintenance/Delete?id='+id,options)
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
       return this.http.get<any>(this.REST_API_SERVER+'/api/services/app/AssetsMaintenance/GetAssetsMaintenanceById?Id='+id, options);
    }

    getList(): Observable<GetAssetsDto[]> {
        let url_ = this.REST_API_SERVER + "/api/services/app/Assets/GetAllAssets" ;
  
        return this.http.get<GetAssetsDto[]>(url_).pipe(
            map((response_: any) => {
                return response_.result;
            })
        );
    }
}
