import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://api.soccersapi.com/v2.2/leagues/';

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any> {
    const user = 'mohammad5112001';
    const token = '968d1c8dcc0da0f241e412cdcd3fa34b';
    const url = `${this.apiUrl}?user=${user}&token=${token}&t=list`;
    return this.http.get(url);
  }
}

