import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  console.log(control.value)
  return control.value.setpassword === control.value.confirmpassword
    ? null
    : { PasswordNoMatch: true };
};
