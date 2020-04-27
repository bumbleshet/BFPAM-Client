import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitiesModel } from '../models/cities.model';
import { ApiService } from '../../@core/services/api.services';
import { environment } from '../../../environments/environment';

@Injectable()
export class CityService {
  private url = environment.BFPAM_SERVER + '/cities';

  constructor(private http: HttpClient, private api: ApiService) { }

  getCities(): Observable<CitiesModel[]> {
    return this.api.get<CitiesModel[]>(this.url, CitiesModel);
  }

  getCity(id: number): Observable<CitiesModel> {
    return this.api.get<CitiesModel>(this.url + `/${id}`, CitiesModel);
  }
}
