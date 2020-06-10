import { NgModule } from '@angular/core';
import { PermissionComponent } from './permission.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { EditModuleComponent } from './components/edit-module/edit-module.component';
import { EditModuleDetailsComponent } from './components/edit-module/components/details/edit-module-details.component';
import { EditModuleProcessesComponent } from './components/edit-module/components/processes/edit-module-processes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: PermissionComponent,
  children: [
    {
      path: 'modules',
      component: ModuleListComponent,
    },
    {
      path: 'modules/edit/:module_code',
      component: EditModuleComponent,
      children: [
        {
          path: '',
          redirectTo: 'details',
          pathMatch: 'full',
        },
        {
          path: 'details',
          component: EditModuleDetailsComponent,
        },
        {
          path: 'processes',
          component: EditModuleProcessesComponent,
        },
      ],
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
  ModuleListComponent,
  EditModuleComponent,
  EditModuleDetailsComponent,
  EditModuleProcessesComponent,
];
