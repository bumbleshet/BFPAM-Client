import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'list',
      component: UserListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [
  UserComponent,
  UserListComponent,
];
