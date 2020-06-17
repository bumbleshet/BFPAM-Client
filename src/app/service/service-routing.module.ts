import { NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ServiceComponent,
  children: [
    {
      path: 'requirement',
      loadChildren: () => import('./requirement/requirement.module')
        .then(m => m.RequirementModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule { }
