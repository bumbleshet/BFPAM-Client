export class UsersModel {
  public user_id: number;
  public email: string;
  public first_name: string;
  public last_name: string;
  public deactivate_flag: string;

  constructor() {
    this.user_id = null;
    this.email = null;
    this.first_name = null;
    this.last_name = null;
    this.deactivate_flag = null;
  }
}
