import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { CityRoutingModule, routedComponents } from './city-routing.module';
import { CityService } from './services/city.service';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    CityRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [CityService],
  declarations: [
    ...routedComponents,
  ],
})
export class CityModule { }
