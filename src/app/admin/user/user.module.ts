import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule, routedComponents } from './user-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    UserRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [UserService],
  declarations: [
    ...routedComponents,
  ],
})
export class UserModule { }
