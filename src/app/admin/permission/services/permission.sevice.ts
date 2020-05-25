import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermissionsModel } from '../models/permissions.model';
import { ApiService } from '../../../@core/services/api.services';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PermissionService {
  private url = environment.BFPAM_SERVER + '/permissions';

  constructor(private http: HttpClient, private api: ApiService) { }

  getPermissions(): Observable<PermissionsModel[]> {
    return this.api.get<PermissionsModel[]>(this.url, PermissionsModel);
  }

  getPermission(id: number): Observable<PermissionsModel> {
    return this.api.get<PermissionsModel>(this.url + `/${id}`, PermissionsModel);
  }
}
