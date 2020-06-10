import {UsersModel} from '../models/users.model';

export function userTypeConverter(target: any, key: string) {
  if (delete target[key]) {
    Object.defineProperty(target, key , {
      get: function() {
        return (this.value === UsersModel.ADMIN) ? 'Admin' : 'Inspector';
      },
      set: function(v) { this.value = v; },
      enumerable  : true,
      configurable: true,
    });
  }
}
