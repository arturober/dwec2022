import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minDateValidator(minDate: string): ValidatorFn {
  return (control: AbstractControl<string>) => {
    if (minDate && control.value && minDate > control.value) {
      return { minDate: true }; // Error returned
    }

    return null; // No errors
  }
}
