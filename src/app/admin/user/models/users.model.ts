import { userTypeConverter } from '../functions/user-type-converter';

export class UsersModel {
  static readonly ADMIN = 'a';
  static readonly INSPECTOR = 'i';

  public user_id: number;
  public email: string;
  public first_name: string;
  public last_name: string;
  public deactivate_flag: string;

  @userTypeConverter
  public user_type: string;

  constructor() {
    this.user_id         = null;
    this.email           = null;
    this.first_name      = null;
    this.last_name       = null;
    this.deactivate_flag = null;
    this.user_type       = null;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  unmapUserTypeValue() {
      Object.defineProperty(this, 'user_type' , {
        value: (this.user_type === 'Admin') ? UsersModel.ADMIN : UsersModel.INSPECTOR,
        enumerable  : true,
        configurable: true,
      });
  }
}
