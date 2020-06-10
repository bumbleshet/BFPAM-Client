import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModelMapper } from '../utils/model-mapper';
import { map } from 'rxjs/operators';
import {
  HttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}


  public get<T>(url: string, itemType: any): Observable<T> {
    if (!url) { return; }

    return this.http.get<T>(url)
      .pipe(
        map(data => {
          if (!Array.isArray(data[Object.keys(data)[0]])) {
            return new ModelMapper(itemType).map(data[Object.keys(data)[0]]);
          }

          return data[Object.keys(data)[0]].map((item: any) => {
              return new ModelMapper(itemType).map(item);
          });
        }),
      );
  }

  public post(url: string, data: any, options?: any) {
    if (!url) { return; }

    return this.http.post(url, data, options);
  }

  public put(url: string, data: any, options?: any) {
    if (!url) { return; }

    return this.http.put(url, data, options);
  }

  public delete(url: string, options?: any) {
    if (!url) { return; }

    return this.http.delete(url, options);
  }
}
