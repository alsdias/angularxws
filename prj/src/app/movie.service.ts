import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // usual, outside docker
  // private serverUrl = 'http://localhost:8081'
  // docker
  private serverUrl = 'http://host.docker.internal:8081'

  private headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('content-type', 'application/x-www-form-urlencoded')
  .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  .set('Referrer-Policy', 'origin-when-cross-origin');

  constructor(private http: HttpClient) {
  }

  getMovieList(): Observable<any> {
    return this.http.get(`${this.serverUrl}`, { headers: this.headers });
  }

}
