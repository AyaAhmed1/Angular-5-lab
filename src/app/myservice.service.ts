import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const api: string = "http://demo0765936.mockable.io/";
const path:string ="http://172.16.2.91/login.php";

@Injectable()
export class MyserviceService {
  constructor(
    private http: HttpClient
  ) { }

  getPath(endpoint: string): Observable<any> {
    return this.http.get(api + endpoint);
  }

  postDataLogin(Data: object ): Observable<any> {
    return this.http.post("http://172.16.2.91/login.php",JSON.stringify(Data) )
   
  }
  postDataRegister(Data: object ): Observable<any> {
    return this.http.post("http://172.16.2.91/register.php",JSON.stringify(Data) )
   
  }
}

