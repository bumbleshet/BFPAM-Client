import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { PermissionApiService } from './services/permission.api.sevice';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { TablesRoutingModule, routedComponents } from './permission-routing.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbRouteTabsetModule,
  NbSpinnerModule,
  NbTreeGridModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbSpinnerModule,
    MatSlideToggleModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbRouteTabsetModule,
  ],
  providers: [PermissionApiService],
  declarations: [
    ...routedComponents,
  ],
})
export class PermissionModule { }
