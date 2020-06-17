import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequirementComponent } from './requirement.component';
import { RequirementListComponent } from './components/requirement-list/requirement-list.component';
import { EditRequirementComponent } from './components/edit-requirement/edit-requirement.component';
import { EditRequirementDetailsComponent } from './components/edit-requirement/components/details/edit-requirement-details.component';

const routes: Routes = [{
  path: '',
  component: RequirementComponent,
  children: [
    {
      path: 'list',
      component: RequirementListComponent,
    },
    {
      path: 'edit/:requirement_id',
      component: EditRequirementComponent,
      children: [
        {
          path: '',
          redirectTo: 'details',
          pathMatch: 'full',
        },
        {
          path: 'details',
          component: EditRequirementDetailsComponent,
        },
        // {
        //   path: 'history/:requirement_id',
        //   component: EditRequirementHistoryComponent,
        // },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequirementRoutingModule { }

export const routedComponents = [
  RequirementComponent,
  RequirementListComponent,
  EditRequirementComponent,
  EditRequirementDetailsComponent,
];
