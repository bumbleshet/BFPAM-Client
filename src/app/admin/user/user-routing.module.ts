import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUserDetailsComponent } from './components/edit-user/components/details/edit-user-details.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'list',
      component: UserListComponent,
    },
    {
      path: 'edit/:user_id',
      component: EditUserComponent,
      children: [
        {
          path: '',
          redirectTo: 'details',
          pathMatch: 'full',
        },
        {
          path: 'details',
          component: EditUserDetailsComponent,
        },
        // {
        //   path: 'history/:user_id',
        //   component: EditUserHistoryComponent,
        // },
      ],
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
  EditUserComponent,
  EditUserDetailsComponent,
];
