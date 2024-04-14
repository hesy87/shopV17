import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'any',
})
export class useHttp {
  private BaseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getData(URL: string) {
    return this.http.get(this.BaseUrl + URL);
  }
}