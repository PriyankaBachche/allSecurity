import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseURL:string="http://localhost:3000/"
  constructor(private httpClient:HttpClient) { }
 
  getDataFromServer(endPoint:string){
    const url=this.baseURL+endPoint;
    return this.httpClient.get(url);
  }
}
