import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PermissionApiService } from '../../../../services/permission.api.sevice';
import { ApiToastService } from '../../../../../../@core/services/api-toast.service';

@Component({
  selector: 'ngx-edit-user',
  templateUrl: 'edit-module-details.component.html',
  styleUrls: ['edit-module-details.component.scss'],
})
export class EditModuleDetailsComponent implements OnInit {
  editModuleForm: FormGroup;

  // button loading statuses
  saving = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private permissionApiService: PermissionApiService,
    private apiToastService: ApiToastService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.editModuleForm = this.fb.group({
      user_id        : [],
      email          : ['', [Validators.required, Validators.email]],
      first_name     : ['', [Validators.required]],
      last_name      : ['', [Validators.required]],
      user_type      : ['', [Validators.required]],
      deactivate_flag: ['', [Validators.required]],
    });

    this.getModuleData();
  }

  private getModuleData() {
    const module_code = this.route.parent.snapshot.params['module_code'];

    this.loading = true;
    this.permissionApiService.getModule(module_code).subscribe(
      response => {
        this.editModuleForm.patchValue(response);
        this.loading = false;
      },
      errors => {
        this.apiToastService.showErrorMessage(errors);
        this.loading = false;
      },
    );
  }
}
