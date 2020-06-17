export class RequirementsModel {
  public requirement_id: number;
  public requirement: string;

  constructor() {
    this.requirement_id = null;
    this.requirement    = null;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
