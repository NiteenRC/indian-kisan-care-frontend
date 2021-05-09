import { Category } from './../_model/category';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function autocompleteStringValidator(validOptions: Array<Category>): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const option = validOptions.find(option => option?.categoryName === control.value);
    
    if (option) {
      return null  /* valid option selected */
    }
    return { 'invalidAutocompleteString': { value: control.value } }
  }
}