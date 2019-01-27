import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //httpClient API Learning
  constructor(private httpClient: HttpClient) { }

  public getData(){

    return this.httpClient.get('http://jsonplaceholder.typicode.com/users').pipe(map((Response:any)=>Response));

  } 

}
