import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { AppConsts } from "@shared/AppConsts";
import { EmployeesTeamDto } from "@shared/Dto/EmployeesTeamDto";
import { GetShiftsDto } from "@shared/Dto/GetShiftsDto";
import { OrdersDto } from "@shared/Dto/OrdersDto";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { options } from "toastr";


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private REST_API_SERVER = AppConsts.remoteServiceBaseUrl; // "http://localhost:21021";
  $isDataLoaded = new EventEmitter();

  constructor(private http: HttpClient) { }


   create(body: EmployeesTeamDto | undefined) : Observable<any> {
     debugger
    const content_ = JSON.stringify(body);

        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                Accept: "text/plain",
            }),
        };
      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/EmployeesTeam/Create',content_, options_) 
    }

    PostSalesListPagination(values): Observable<any> {
        debugger
      let headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      let options = { headers: headers };

      

      return this.http.post<any>(this.REST_API_SERVER + '/api/services/app/EmployeesTeam/PostFilterData', values, options)
          .pipe(map(res => {
              
              this.$isDataLoaded.emit(res['result']);
  
          }));
  }

  

  Delete(id) { 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
        });
    let options = {headers : headers};
    return this.http.delete<any>(this.REST_API_SERVER +'/api/services/app/EmployeesTeam/Delete?id='+id,options)
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
       return this.http.get<any>(this.REST_API_SERVER+'/api/services/app/EmployeesTeam/GetEmployeesTeamById?Id='+id, options);
    }

  //   getList(): Observable<GetShiftsDto[]> {
  //     let url_ = this.REST_API_SERVER + "/api/services/app/EmployeesTeam/GetAllShifts" ;

  //     return this.http.get<GetShiftsDto[]>(url_).pipe(
  //         map((response_: any) => {
  //             return response_.result;
  //         })
  //     );
  // }  

  GetShifts()
  {
    return this.http.get(this.REST_API_SERVER+'/api/services/app/EmployeesTeam/GetShifts');
   }
//   getList(role: string): Observable<OrdersDto[]> {

//     let url_ = this.REST_API_SERVER + "/api/services/app/User/GetList?role=" + role;
//     return this.http.get<OrdersDto[]>(url_).pipe(
//         map((response_: any) => {
//             return response_.result;
//         })
//         );
//     }
  
}
