import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [{
  path: '',
  component: CityComponent,
  children: [
    {
      path: 'list',
      component: CityListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  CityComponent,
  CityListComponent,
];
