import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './model/login';
import { Register } from './model/register';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) { }

  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    })
  };

  public login(config: Login): Observable<any> {
    return this.http.post<any>(`${environment.base_url}login`, config, { observe: 'response' });
  }
  public register(config: Register): Observable<any> {
    return this.http.post<any>(`${environment.base_url}registration`, config, { observe: 'response' });
  }

}
