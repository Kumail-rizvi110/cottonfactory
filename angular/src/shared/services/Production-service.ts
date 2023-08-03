import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";
import { GetEmployeesTeamDto } from "@shared/Dto/GetEmployeesTeamDto";
import { ProductionDto } from "@shared/Dto/ProductionDto";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { options } from "toastr";


@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private REST_API_SERVER = AppConsts.remoteServiceBaseUrl; // "http://localhost:21021";
  $isDataLoaded = new EventEmitter();

  constructor(private http: HttpClient) { }


   create(body: ProductionDto | undefined) : Observable<any> {
     debugger
    const content_ = JSON.stringify(body);

        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        };
      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/Production/Create',content_, options_) 
    }

    PostSalesListPagination(values): Observable<any> {
        debugger
      let headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      

      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/Production/PostFilterData?page=' , values, options)
          .pipe(map(res => {
              
              this.$isDataLoaded.emit(res['result']);
  
          }));
  }

  

  Delete(id) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
        });
    let options = {headers : headers};
    return this.http.delete<any>(this.REST_API_SERVER +'/api/services/app/Production/Delete?id='+id,options)
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
       return this.http.get<any>(this.REST_API_SERVER+'/api/services/app/Production/GetProductionById?Id='+id, options);
    }

    getList(): Observable<GetEmployeesTeamDto[]> {
        let url_ = this.REST_API_SERVER + "/api/services/app/EmployeesTeam/GetAllEmployeesTeam" ;
  
        return this.http.get<GetEmployeesTeamDto[]>(url_).pipe(
            map((response_: any) => {
                return response_.result;
            })
        );
    }

  
}
