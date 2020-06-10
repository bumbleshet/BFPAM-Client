import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-edit-module',
  templateUrl: 'edit-module.component.html',
  styleUrls: ['edit-module.component.scss'],
})
export class EditModuleComponent {
  tabs: any[];

  constructor(private route: ActivatedRoute) {
    const module_code = this.route.snapshot.params['module_code'];

    this.tabs = [
      {
        title: 'Module',
        route: `/pages/admin/permission/modules/edit/${module_code}/details`,
      },
      {
        title: 'Processes',
        route: `/pages/admin/permission/modules/edit/${module_code}/processes`,
      },
    ];
  }
}
