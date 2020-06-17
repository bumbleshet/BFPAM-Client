import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { RequirementApiService } from './services/requirement.api.service';
import { AddRequirementComponent } from './components/add-requirement/add-requirement.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from '../../auth/services/auth.service';
import {NgxAuthModule} from '../../auth/auth.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RequirementRoutingModule, routedComponents } from './requirement-routing.module';
import {
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbTreeGridModule,
    NbRadioModule,
    NbSpinnerModule,
    NbRouteTabsetModule,
} from '@nebular/theme';

const COMPONENTS = [
  AddRequirementComponent,
];

const ENTRY_COMPONENTS = [
  AddRequirementComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    RequirementRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbRouteTabsetModule,
    MatSlideToggleModule,
    NgxAuthModule,
  ],
  providers: [
    RequirementApiService,
    AuthService,
  ],
  declarations: [
    ...COMPONENTS,
    ...routedComponents,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class RequirementModule { }
