import {Component, OnInit} from '@angular/core';
import { UserApiService } from '../../../../services/user.api.service';
import { ApiToastService } from '../../../../../../@core/services/api-toast.service';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from '../../../../models/users.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-tab2',
  templateUrl: 'edit-user-details.component.html',
  styleUrls: ['edit-user-details.component.scss'],
})
export class EditUserDetailsComponent implements OnInit {
  editUserForm: FormGroup;
  users = [];

  // button loading statuses
  saving = false;
  loading = false;

  // class constants
  admin: string;
  inspector: string;

  constructor(
    private fb: FormBuilder,
    private userApiService: UserApiService,
    private apiToastService: ApiToastService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.editUserForm = this.fb.group({
      user_id        : [],
      email          : ['', [Validators.required, Validators.email]],
      first_name     : ['', [Validators.required]],
      last_name      : ['', [Validators.required]],
      user_type      : ['', [Validators.required]],
      deactivate_flag: ['', [Validators.required]],
    });

    this.admin     = UsersModel.ADMIN;
    this.inspector = UsersModel.INSPECTOR;

    this.getUserData();
  }

  get forms() {
    return this.editUserForm.controls;
  }

  //
  // onSubmit() {
  //   if (this.editUserForm.invalid) {
  //     return false;
  //   }
  //
  //   this.saving = true;
  //   this.userApiService.insertUser(this.editUserForm.value)
  //     .subscribe(
  //       (response: any) => {
  //         this.apiToastService.showSuccessMessage(response);
  //         this.editUserForm.value.user_id = response.user_id;
  //         this.users.push(this.editUserForm.value);
  //         this.saving = false;
  //       },
  //       errors => {
  //         this.apiToastService.showErrorMessage(errors);
  //         this.saving = false;
  //       },
  //     );
  // }

  private getUserData() {
    const user_id = this.route.parent.snapshot.params['user_id'];

    this.loading = true;
    this.userApiService.getUser(user_id).subscribe(
      response => {
        response.unmapUserTypeValue();

        this.editUserForm.patchValue(response);
        this.loading = false;
      },
      errors => {
        this.apiToastService.showErrorMessage(errors);
        this.loading = false;
      },
    );
  }
}
