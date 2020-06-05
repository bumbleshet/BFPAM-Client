import {UsersModel} from '../models/users.model';

export function userTypeConverter(target: any, key: string) {
  if (delete target[key]) {
    Object.defineProperty(target, key , {
      get: function() {
        if (this.value === UsersModel.ADMIN) {
          return 'Admin';
        } else {
          return 'Inspector';
        }
      },
      set: function(v) { this.value = v; },
      enumerable  : true,
      configurable: true,
    });
  }
}
