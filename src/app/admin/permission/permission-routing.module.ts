import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './permission.component';
import { PermissionListComponent } from './permission-list/permission-list.component';

const routes: Routes = [{
  path: '',
  component: PermissionComponent,
  children: [
    {
      path: 'list',
      component: PermissionListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  PermissionComponent,
  PermissionListComponent,
];
