import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModelMapper } from '../utils/model-mapper';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiRoot = '/api';

  constructor(
    private http: HttpClient,
  ) {}


  public get<T>(url: string, itemType: any): Observable<T> {
    if (!url) {
      return;
    }

    return this.http.get<T>(url)
      .pipe(
        // @ts-ignore
        map(data =>
          data[Object.keys(data)[0]].map((item: any) => {
            return new ModelMapper(itemType).map(item);
          },
        )),
      );
  }
}
