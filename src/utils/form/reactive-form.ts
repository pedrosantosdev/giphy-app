import { v1 as uuid } from 'uuid';

export class ReactiveFormControl {
  constructor(
    public value: string | Blob,
    private validators: Function[] = []
  ) {}
  public errors: string[] = [];
  protected key: string = uuid();
  //  Clears the form control
  public reset() {
    this.value = '';
    this.errors = [];
    this.key = uuid();
  }
  //  Runs the validators
  public validate() {
    this.errors = [];
    if (!this.validators || !this.validators.length) return;
    this.validators.forEach(validator => {
      const error: string = validator.call(this, this.value);
      if (error !== null && error.trim() !== '') {
        if (!this.errors) this.errors = [];
        this.errors.push(error);
      }
    });
    this.key = uuid();
  }
}
type AssociativeArray<T = unknown> = { [key: string]: T | undefined } | T[];
export default class ReactiveForm {
  public controls: AssociativeArray<ReactiveFormControl> = [];

  public get formData(): FormData {
    const retval = new FormData();
    for (const key in this.controls) {
      retval.append(key, this.controls[key].value);
    }
    return retval;
  }

  public validate() {
    for (const key in this.controls) this.controls[key].validate();
  }

  public reset(): void {
    for (const key in this.controls)
      if (key !== null) this.controls[key].reset();
      else continue;
  }

  public get errors(): AssociativeArray<string[]> {
    const retval: AssociativeArray<string[]> = [];
    for (const key in this.controls)
      if (this.controls[key].errors !== null)
        retval[key] = this.controls[key].errors;
    return retval;
  }

  public get hasErrors(): boolean {
    this.validate();
    if (this.errors) {
      return true;
    }
    return false;
  }

  public get isValid(): boolean {
    return !this.hasErrors;
  }
}
