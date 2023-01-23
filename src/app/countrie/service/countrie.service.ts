import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Countrie } from '../interfaces/countrie.interface';

@Injectable({
  providedIn: 'root',
})
export class CountrieService {
  private _apiUrl = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set(
      'fields',
      'name,capital,cca3,population,flags'
    );
  }

  searchCountrie(term: string): Observable<Countrie[]> {
    const url = `${this._apiUrl}/name/${term}`;

    return this.http.get<Countrie[]>(url, {params: this.httpParams});
  }
  searchCapital(term: string): Observable<Countrie[]> {
    const url = `${this._apiUrl}/capital/${term}`;
    return this.http.get<Countrie[]>(url, {params: this.httpParams});
  }
  getCountrie4Alpha(id: string): Observable<Countrie> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Countrie>(url);
  }
  searchRegion(region: string): Observable<Countrie[]> {
    
    const ulr = `${this._apiUrl}/region/${region}`;
    return this.http.get<Countrie[]>(ulr, {params: this.httpParams});
  }
}
