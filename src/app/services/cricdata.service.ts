import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricdataService {

  constructor(private http: HttpClient) { }

  getCountries() {
    const params = new HttpParams().set('api_token', 'GfuTuumhFXqDLCKmVugJvviWOgV5tx3wVeCaGMMZakt4n9EYKfpGFLBmOfZR');
    const headers = new HttpHeaders().set('Accept', 'application/vnd.api+json');
    // tslint:disable-next-line:max-line-length
    return this.http.get('/api/v2.0/countries', { headers, params });
  }
}
