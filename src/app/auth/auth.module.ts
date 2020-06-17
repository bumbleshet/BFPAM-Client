import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxLoginComponent } from './login/login.component';
import { NgxAuthComponent } from './auth/auth.component';
import { NgxAuthRoutingModule } from './auth-routing.module';
import {environment} from '../../environments/environment';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {HasPermissionDirective} from './directives/has-permission.directive';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule,
  NbLayoutModule,
} from '@nebular/theme';

const loginFormSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: false,
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbCardModule,
    NbLayoutModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          baseEndpoint: environment.BFPAM_SERVER,
          login: {
            endpoint: '/auth/login',
            method: 'post',
            redirect: {
              success: '/dashboard',
              failure: null,
            },
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
            redirect: {
              success: '/welcome/',
              failure: null,
            },
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
        }),
      ],
      forms: {
        login: loginFormSetting,
        register: loginFormSetting,
        requestPassword: loginFormSetting,
        resetPassword: loginFormSetting,
        logout: {
          redirectDelay: 0,
        },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 4,
            maxLength: 50,
          },
        },
      },
    }),
  ],
  declarations: [
    HasPermissionDirective,
    NgxAuthComponent,
    NgxLoginComponent,
  ],
  exports: [
    HasPermissionDirective,
  ],
})
export class NgxAuthModule {
}
