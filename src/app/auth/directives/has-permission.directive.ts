import { AuthService } from '../services/auth.service';
import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngxHasPermission]',
})
export class HasPermissionDirective implements OnInit {
  private moduleCode: string;
  private processCode: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService,
  ) {}

  @Input() set ngxHasPermission(moduleCode: string) {
    this.moduleCode = moduleCode;
  }

  @Input() set ngxHasPermissionProcessCode(processCode: string) {
    this.processCode = processCode;
  }

  ngOnInit() {
    if ((typeof(localStorage.getItem('permissions')) !== 'undefined')
      && (!this.authService.checkPermission(this.moduleCode, this.processCode))) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
