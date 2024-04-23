import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root', 
})
export class useHttp {
  private BaseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getData(URL: string) {
    return this.http.get(this.BaseUrl + URL);
  }
}