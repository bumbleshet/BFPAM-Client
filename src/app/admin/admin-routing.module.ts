import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'permission',
      loadChildren: () => import('./permission/permission.module')
        .then(m => m.PermissionModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
