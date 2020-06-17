import { NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  imports: [
    ServiceRoutingModule,
  ],
  declarations: [
    ServiceComponent,
  ],
})
export class ServiceModule { }
