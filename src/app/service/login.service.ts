import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../models/login';
import { tutor } from '../models/tutor';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  constructor(private httpClient: HttpClient) { }

  URL = 'http://localhost:3000/api/login/'

  public login(login: login) {
    return this.httpClient.post(this.URL + 'log', login );
  }

  public save(login: login): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'register', { login });
  }

  public saveTutor(tutor: tutor): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'registerT', { tutor });
  }
}