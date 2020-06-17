import {Component, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { RequirementsModel } from '../../models/requirements.model';
import { RequirementApiService } from '../../services/requirement.api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiToastService } from '../../../../@core/services/api-toast.service';

@Component({
  selector: 'ngx-add-requirement',
  templateUrl: 'add-requirement.component.html',
  styleUrls: ['add-requirement.component.scss'],
  providers:  [ RequirementApiService ],
})
export class AddRequirementComponent implements OnInit {
  addRequirementForm: FormGroup;
  requirements = [];

  // button loading status
  saving = false;

  // class constants
  admin: string;
  inspector: string;

  constructor(
    protected ref: NbDialogRef<AddRequirementComponent>,
    private fb: FormBuilder,
    private requirementApiService: RequirementApiService,
    private apiToastService: ApiToastService,
  ) {}

  ngOnInit() {
    this.addRequirementForm = this.fb.group({
      requirement: ['', [Validators.required]],
    });
  }

  get forms() {
    return this.addRequirementForm.controls;
  }

  close() {
    this.ref.close(this.requirements);
  }

  onSubmit() {
    if (this.addRequirementForm.invalid) {
      return false;
    }

    this.saving = true;
    this.requirementApiService.insertRequirement(this.addRequirementForm.value)
      .subscribe(
        (response: any) => {
            this.apiToastService.showSuccessMessage(response);
            this.addRequirementForm.value.requirement_id = response.requirement_id;
            this.requirements.push(this.addRequirementForm.value);
            this.saving = false;
          },
          errors => {
            this.apiToastService.showErrorMessage(errors);
            this.saving = false;
          },
      );
  }
}
