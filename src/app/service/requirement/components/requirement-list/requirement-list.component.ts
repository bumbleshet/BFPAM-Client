import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { RequirementApiService } from '../../services/requirement.api.service';
import { NbDialogService } from '@nebular/theme';
import { AddRequirementComponent } from '../add-requirement/add-requirement.component';
import { RequirementsModel } from '../../models/requirements.model';
import { ModelMapper } from '../../../../@core/utils/model-mapper';
import { Router } from '@angular/router';
import { ApiToastService } from '../../../../@core/services/api-toast.service';

@Component({
  selector: 'ngx-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.scss'],
})
export class RequirementListComponent {
  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: false,
    columns: {
      requirement_id: {
        title: 'ID',
        type: 'text',
        class: 'text-center',
      },
      requirement: {
        title: 'Requirement',
        type: 'text',
        class: 'text-center',
      },
    },
    attr: {
      class: 'text-center',
    },
    // change css of newly added row from dialog
    rowClassFunction: (row) => {
      if (row.data.requirement_id > this.lastInsertedId) {
        return 'newly-added-row';
      }

      return '';
    },
  };

  lastInsertedId: number;

  // button loading status
  loading = false;

  constructor(
    private service: SmartTableData,
    private requirementApiService: RequirementApiService,
    private dialogService: NbDialogService,
    private apiToastService: ApiToastService,
    private router: Router,
  ) {
    this.loading = true;
    this.requirementApiService.getRequirements().subscribe(
      response => {
        console.log(response);
        this.lastInsertedId = response[0].requirement_id;

        this.source.load(response);
        this.loading = false;
      },
      errors => {
        this.apiToastService.showErrorMessage(errors);
        this.loading = false;
      },
    );
  }

  showAddRequirements() {
    this.loading = true;
    this.dialogService.open(AddRequirementComponent, {
      closeOnEsc: false,
    }).onClose.subscribe(
      response => {
        if (typeof response !== 'undefined') {
          let requirements;

          // parse response data from dialog
          requirements = response.map(data => {
            return new ModelMapper(RequirementsModel).map(data);
          });

          requirements.forEach((element) => {
            this.source.prepend(element);
          });

          this.loading = false;
        }
      },
    );
  }

  editRequirement(requirement) {
    this.router.navigate(['/pages/services/requirements/edit', requirement.data.requirement_id]);
  }
}
