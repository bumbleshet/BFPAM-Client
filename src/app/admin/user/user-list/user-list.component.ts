import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      deactivate_flag: {
        title: 'Deactivated',
        type: 'boolean',
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
    },
  };

  users: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private userService: UserService) {
    this.userService.getUsers().subscribe(data => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
