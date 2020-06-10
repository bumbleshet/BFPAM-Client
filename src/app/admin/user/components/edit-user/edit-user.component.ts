import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-edit-user',
  templateUrl: 'edit-user.component.html',
  styleUrls: ['edit-user.component.scss'],
})
export class EditUserComponent {
  tabs: any[];

  constructor(private route: ActivatedRoute) {
    const user_id = this.route.snapshot.params['user_id'];
    this.tabs = [
      {
        title: 'Details',
        route: `/pages/admin/user/edit/${user_id}/details`,
      },
      {
        title: 'History',
        route: `/pages/admin/user/edit/${user_id}/history`,
      },
    ];
  }
}
