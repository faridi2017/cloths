import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError, BehaviorSubject} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClothServiceService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }
  getClothes(): Observable<any> {
    return this.http.get(this.baseUrl + 'list' );
  }
  addCloth(cloth:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cloth);
    return this.http.post(this.baseUrl + 'add', body,{'headers':headers})
  }
}
