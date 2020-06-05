import {Component, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ConfirmedValidator } from '../../validators/confirmed.validator';
import { UsersModel } from '../../models/users.model';
import { UserApiService } from '../../services/user.api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiToastService } from '../../../../@core/services/api-toast.service';

@Component({
  selector: 'ngx-add-user',
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.component.scss'],
  providers:  [ UserApiService ],
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  users = [];

  // button loading status
  saving = false;

  // class constants
  admin: string;
  inspector: string;

  constructor(
    protected ref: NbDialogRef<AddUserComponent>,
    private fb: FormBuilder,
    private userApiService: UserApiService,
    private apiToastService: ApiToastService,
  ) {}

  ngOnInit() {
    this.addUserForm = this.fb.group({
      email           : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      first_name      : ['', [Validators.required]],
      last_name       : ['', [Validators.required]],
      user_type       : ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'confirm_password'),
    });

    this.admin     = UsersModel.ADMIN;
    this.inspector = UsersModel.INSPECTOR;
  }

  get forms() {
    return this.addUserForm.controls;
  }

  close() {
    this.ref.close(this.users);
  }

  onSubmit() {
    if (this.addUserForm.invalid) {
      return false;
    }

    this.saving = true;
    this.userApiService.insertUser(this.addUserForm.value)
      .subscribe(
        (response: any) => {
            this.apiToastService.showSuccessMessage(response);
            this.addUserForm.value.user_id = response.user_id;
            this.users.push(this.addUserForm.value);
            this.saving = false;
          },
          errors => {
            this.apiToastService.showErrorMessage(errors);
            this.saving = false;
          },
      );
  }
}
