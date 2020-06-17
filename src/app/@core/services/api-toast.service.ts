import { Injectable } from '@angular/core';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ApiToastService {
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  types: NbComponentStatus[] = [
    'success',
    'danger',
  ];

  config = {
    status: this.types[0],
    destroyByClick: true,
    duration: 4000,
    hasIcon: true,
    position: this.position,
    preventDuplicates: false,
  };

  constructor(private toastrService: NbToastrService) {}

  showSuccessMessage(response) {
    this.config.status = this.types[0];

    this.toastrService.show(
      response.message,
      `Success`,
      this.config);
  }

  showErrorMessage(errors) {
    const messages = this.parseErrorMessage(errors);
    this.config.status = this.types[1];

    for (const message of messages) {
      this.toastrService.show(
        message,
        `Error`,
        this.config);
    }
  }

  private parseErrorMessage(httpErrors) {
    const errors = httpErrors.error;
    if (typeof errors !== 'object') { return errors; }

    let errorMessages = [];
    if (typeof(errors.detail) === 'string') {
      errorMessages = [errors.detail];
    } else {
      Object.entries(errors.detail).forEach(([key, val]) => {
        Object.entries(val).forEach((element) => {
          if (typeof element === 'object') {
            errorMessages.push(this.parseMessages(element));
          } else {
            errorMessages.push(element);
          }
        });
      });
    }

    return errorMessages;
  }

  private parseMessages(object) {
    let messages = '';
    Object.entries(object).forEach(([key, val]) => {
      if (typeof val === 'object') {
        messages = this.parseMessages(val);
      } else if (typeof val === 'string') {
        messages = val;
      }
    });

    return messages;
  }
}
