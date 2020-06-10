import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { UserApiService } from './services/user.api.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BlockCopyPasteDirective } from './directives/block-copy-paste.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRoutingModule, routedComponents } from './user-routing.module';
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
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

const COMPONENTS = [
  AddUserComponent,
];

const ENTRY_COMPONENTS = [
  AddUserComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    UserRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbRouteTabsetModule,
    MatSlideToggleModule,
  ],
  exports: [
    BlockCopyPasteDirective,
  ],
  providers: [
    UserApiService,
  ],
  declarations: [
    BlockCopyPasteDirective,
    ...COMPONENTS,
    ...routedComponents,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class UserModule { }
