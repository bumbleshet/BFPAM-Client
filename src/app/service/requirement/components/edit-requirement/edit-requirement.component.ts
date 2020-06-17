import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-edit-requirement',
  templateUrl: 'edit-requirement.component.html',
  styleUrls: ['edit-requirement.component.scss'],
})
export class EditRequirementComponent {
  tabs: any[];

  constructor(private route: ActivatedRoute) {
    const requirement_id = this.route.snapshot.params['requirement_id'];
    console.log(requirement_id);
    this.tabs = [
      {
        title: 'Details',
        route: `/pages/services/requirement/edit/${requirement_id}/details`,
      },
      {
        title: 'History',
        route: `/pages/services/requirement/edit/${requirement_id}/history`,
      },
    ];
  }
}
