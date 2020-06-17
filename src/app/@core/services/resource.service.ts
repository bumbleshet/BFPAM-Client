import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {

  constructor(
    private http: HttpClient,
  ) {}

  public get<T>(options= {}): Observable<T> {
    const url = environment.BFPAM_SERVER + '/resources';
    options['headers'] = this.createAuthorizationHeader();

    return this.http.get<T>(url, options);
  }

  private createAuthorizationHeader() {
    return new HttpHeaders().set('Authorization',  `Bearer ${JSON.parse(localStorage.getItem('auth_app_token'))['value']}`);
  }
}
