import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { CityService } from '../services/city.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent {

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

  constructor(private service: SmartTableData, private cityService: CityService) {
    this.cityService.getCities().subscribe(data => {
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
