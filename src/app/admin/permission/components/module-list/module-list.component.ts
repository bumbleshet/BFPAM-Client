import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { PermissionApiService } from '../../services/permission.api.sevice';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-permission-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss'],
})
export class ModuleListComponent {
  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: false,
    columns: {
      module_code: {
        title: 'Modules',
        type: 'text',
        class: 'text-center',
      },
      module_description: {
        title: 'Description',
        type: 'text',
        class: 'text-center',
      },
    },
    attr: {
      class: 'text-center',
    },
  };

  // button loading status
  loading = false;

  constructor(
    private service: SmartTableData,
    private permissionApiService: PermissionApiService,
    private dialogService: NbDialogService,
    private router: Router,
  ) {
    this.loading = true;
    this.permissionApiService.getModules().subscribe(
      response => {
        if (response) {
          this.source.load(response);
        }

        this.loading = false;
      },
    );
  }

  editModuleProcesses(module) {
    this.router.navigate(['/pages/admin/permission/modules/edit', module.data.module_code]);
  }
}
