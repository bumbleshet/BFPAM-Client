import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users.model';
import { ApiService } from '../../../@core/services/api.services';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UserService {
  private url = environment.BFPAM_SERVER + '/users';

  constructor(private http: HttpClient, private api: ApiService) { }

  getUsers(): Observable<UsersModel[]> {
    return this.api.get<UsersModel[]>(this.url, UsersModel);
  }

  getUser(id: number): Observable<UsersModel> {
    return this.api.get<UsersModel>(this.url + `/${id}`, UsersModel);
  }
}
