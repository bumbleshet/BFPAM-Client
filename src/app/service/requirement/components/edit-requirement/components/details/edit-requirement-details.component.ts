import {Component, OnInit} from '@angular/core';
import { RequirementApiService } from '../../../../services/requirement.api.service';
import { ApiToastService } from '../../../../../../@core/services/api-toast.service';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-tab2',
  templateUrl: 'edit-requirement-details.component.html',
  styleUrls: ['edit-requirement-details.component.scss'],
})
export class EditRequirementDetailsComponent implements OnInit {
  editRequirementForm: FormGroup;
  requirements = [];

  // button loading statuses
  saving = false;
  loading = false;

  // class constants
  admin: string;
  inspector: string;

  constructor(
    private fb: FormBuilder,
    private requirementApiService: RequirementApiService,
    private apiToastService: ApiToastService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.editRequirementForm = this.fb.group({
      requirement_id: [],
      requirement   : ['', [Validators.required]],
    });

    this.getRequirementData();
  }

  get forms() {
    return this.editRequirementForm.controls;
  }

  //
  // onSubmit() {
  //   if (this.editRequirementForm.invalid) {
  //     return false;
  //   }
  //
  //   this.saving = true;
  //   this.requirementApiService.insertRequirement(this.editRequirementForm.value)
  //     .subscribe(
  //       (response: any) => {
  //         this.apiToastService.showSuccessMessage(response);
  //         this.editRequirementForm.value.requirement_id = response.requirement_id;
  //         this.requirements.push(this.editRequirementForm.value);
  //         this.saving = false;
  //       },
  //       errors => {
  //         this.apiToastService.showErrorMessage(errors);
  //         this.saving = false;
  //       },
  //     );
  // }

  private getRequirementData() {
    const requirement_id = this.route.parent.snapshot.params['requirement_id'];

    this.loading = true;
    this.requirementApiService.getRequirement(requirement_id).subscribe(
      response => {
        this.editRequirementForm.patchValue(response);
        this.loading = false;
      },
      errors => {
        this.apiToastService.showErrorMessage(errors);
        this.loading = false;
      },
    );
  }
}
