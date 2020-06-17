import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequirementsModel } from '../models/requirements.model';
import { ApiService } from '../../../@core/services/api.services';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RequirementApiService {
  private url = environment.BFPAM_SERVER + '/requirements';

  constructor(private http: HttpClient, private api: ApiService) { }

  getRequirements(): Observable<RequirementsModel[]> {
    return this.api.get<RequirementsModel[]>(this.url, RequirementsModel);
  }

  getRequirement(id: number): Observable<RequirementsModel> {
    return this.api.get<RequirementsModel>(`${this.url}/${id}`, RequirementsModel);
  }

  insertRequirement(data: any) {
    return this.api.post(this.url, data);
  }

  updateRequirement(data: any) {
    return this.api.put(this.url, data);
  }

  deleteRequirement() {
    return this.api.delete(this.url);
  }
}
