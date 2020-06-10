import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { UserApiService } from '../../services/user.api.service';
import { NbDialogService } from '@nebular/theme';
import { AddUserComponent } from '../add-user/add-user.component';
import { UsersModel } from '../../models/users.model';
import { ModelMapper } from '../../../../@core/utils/model-mapper';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: false,
    columns: {
      user_id: {
        title: 'ID',
        type: 'text',
        class: 'text-center',
      },
      email: {
        title: 'E-mail',
        type: 'text',
        class: 'text-center',
      },
      first_name: {
        title: 'First Name',
        type: 'text',
        class: 'text-center',
      },
      last_name: {
        title: 'Last Name',
        type: 'text',
        class: 'text-center',
      },
      user_type: {
        title: 'User Type',
        type: 'text',
        class: 'text-center',
      },
    },
    attr: {
      class: 'text-center',
    },
    // change css of newly added row from dialog
    rowClassFunction: (row) => {
      if (row.data.user_id > this.lastInsertedId) {
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
    private userApiService: UserApiService,
    private dialogService: NbDialogService,
    private router: Router,
  ) {
    this.loading = true;
    this.userApiService.getUsers().subscribe(
      response => {
        if (response) {
          this.lastInsertedId = response[0].user_id;

          this.source.load(response);
        }

      this.loading = false;
    },
    );
  }

  showAddUsers() {
    this.loading = true;
    this.dialogService.open(AddUserComponent, {
      closeOnEsc: false,
    }).onClose.subscribe(
      response => {
        if (typeof response !== 'undefined') {
          let users;

          // parse response data from dialog
          users = response.map(data => {
            return new ModelMapper(UsersModel).map(data);
          });

          users.forEach((element) => {
            this.source.prepend(element);
          });

          this.loading = false;
        }
      },
    );
  }

  editUser(user) {
    this.router.navigate(['/pages/admin/user/edit', user.data.user_id]);
  }
}
