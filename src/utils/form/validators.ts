export class Validators {
  static required(value: string) {
    return value.trim().length ? null : 'Required field!';
  }
  static stringLength(min = 0, max = 0) {
    return (value = '') => {
      let result = null;
      if (min > 0 && (value === null || value.length < min))
        result = 'Value too short!';
      if (max > 0 && value !== null && value.length > max)
        result = 'Value too long!';
      return result;
    };
  }
}
