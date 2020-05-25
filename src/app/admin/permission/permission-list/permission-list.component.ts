import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PermissionService } from '../services/permission.sevice';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss'],
})
export class PermissionListComponent {

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

  cities: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private permissionService: PermissionService) {
    this.permissionService.getPermissions().subscribe(data => {
      this.source.load(data);
    });

    // const data = this.service.getData();
    // console.log(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
