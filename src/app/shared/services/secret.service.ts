import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/authorization/resources/IResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecretService {
  baseUrl: string = 'https://duylanle-contactbook.herokuapp.com/';
  constructor(private http: HttpClient) {}

  managerDeveloperSecrets(): Observable<IResponse> {
    return this.http.get<IResponse>(
      this.baseUrl + 'user/managerdevelopers',
      this.getHttpOptions()
    );
  }

  adminDeveloperSecrets(): Observable<IResponse> {
    return this.http.get<IResponse>(
      this.baseUrl + 'user/admindevelopers',
      this.getHttpOptions()
    );
  }

  getValues(): Observable<string[]> {
    return this.http.get<string[]>(
      this.baseUrl + 'value',
      this.getHttpOptions()
    );
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };

    return httpOptions;
  }
}
