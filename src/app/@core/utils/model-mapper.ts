export class ModelMapper<T> {
  _propertyMapping: any;
  _target: any;
  private mappedKey: any;
  constructor(type: { new(): T; }) {
    this._target = new type();
    this._propertyMapping = this._target.constructor._propertyMap;
  }

  map(source) {
    Object.keys(this._target).forEach((key) => {

      if (typeof this._propertyMapping !== 'undefined') {
        this.mappedKey = this._propertyMapping[key];
      }

      if (this.mappedKey) {
        this._target[key] = source[this.mappedKey];
      } else {
        this._target[key] = source[key];
      }
    });

    Object.keys(source).forEach((key) => {
      const targetKeys = Object.keys(this._target);
      if (targetKeys.indexOf(key) === -1)
        this._target[key] = source[key];
      });

    return this._target;
  }
}
