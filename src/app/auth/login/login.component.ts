import {ChangeDetectorRef, Component} from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
}


