export class ReactiveFormControl {
  constructor(
    public value: string | null,
    private validators: Function[] = []
  ) {}
  public errors: string[] | null = null;
  //  Clears the form control
  public reset() {
    this.value = null;
    this.errors = null;
  }
  //  Runs the validators
  public validate() {
    this.errors = null;
    if (!this.validators || !this.validators.length) return;
    this.validators.forEach(validator => {
      const error: string = validator.call(this, this.value);
      if (error !== null) {
        if (!this.errors) this.errors = [];
        this.errors.push(error);
      }
    });
  }
}
export default class ReactiveForm {
  public controls: ReactiveFormControl[] = [];

  public get formData(): FormData {
    const retval = new FormData();
    for (const key in this.controls)
      retval.append(key, this.controls[key].value || null);
    return retval;
  }

  public validate() {
    for (const key in this.controls) this.controls[key].validate();
  }

  public reset(): void {
    for (const key in this.controls) this.controls[key].reset();
  }

  public get errors(): [] | null {
    const retval: any = {};
    for (const key in this.controls)
      if (this.controls[key].errors !== null)
        retval[key] = this.controls[key].errors;
    return retval;
  }

  public get hasErrors(): boolean {
    return this.controls.some(control => {
      if (control.errors) return true;
    });
  }

  public get isValid(): boolean {
    return !this.hasErrors;
  }
}
