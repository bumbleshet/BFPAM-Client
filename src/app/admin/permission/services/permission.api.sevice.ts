import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../../@core/services/api.services';
import { environment } from '../../../../environments/environment';
import { UserTypeModulesModel } from '../models/user-type-modules.model';

@Injectable()
export class PermissionApiService {
  private moduleUrl = environment.BFPAM_SERVER + '/modules';
  private processUrl = environment.BFPAM_SERVER + '/processes';

  constructor(private http: HttpClient, private api: ApiService) { }

  getModules(): Observable<UserTypeModulesModel[]> {
    return this.api.get<UserTypeModulesModel[]>(this.moduleUrl, UserTypeModulesModel);
  }

  getModule(module_code: string): Observable<UserTypeModulesModel[]> {
    return this.api.get<UserTypeModulesModel[]>(`${this.moduleUrl}/${module_code}`, UserTypeModulesModel);
  }
}
