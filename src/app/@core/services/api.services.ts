import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModelMapper } from '../utils/model-mapper';
import { map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  public get<T>(url: string, itemType: any, options= {}): Observable<T> {
    if (!url) { return; }
    options['headers'] = this.createAuthorizationHeader();

    return this.http.get<T>(url, options)
      .pipe(
        map(data => {
          const key = Object.keys(data)[0];
          if (!Array.isArray(data[key])) {
            if (!data[key]) {
              return [];
            }

            return new ModelMapper(itemType).map(data[key]);
          }

          return data[key].map((item: any) => {
              return new ModelMapper(itemType).map(item);
          });
        }),
      );
  }

  public post(url: string, data: any, options= {}) {
    if (!url) { return; }
    options['headers'] = this.createAuthorizationHeader();

    return this.http.post(url, data, options);
  }

  public put(url: string, data: any, options= {}) {
    if (!url) { return; }
    options['headers'] = this.createAuthorizationHeader();

    return this.http.put(url, data, options);
  }

  public delete(url: string, options= {}) {
    if (!url) { return; }
    options['headers'] = this.createAuthorizationHeader();

    return this.http.delete(url, options);
  }

  private createAuthorizationHeader() {
    return new HttpHeaders().set('Authorization',  `Bearer ${JSON.parse(localStorage.getItem('auth_app_token'))['value']}`);
  }
}
