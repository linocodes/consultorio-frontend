import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CpfValidator } from './../validators/cpf.validator';

@Directive({
  selector: '[cpf-validate]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CpfValidateDirective,
    multi: true
  }]
})
export class CpfValidateDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any; } {
    return CpfValidator.validate(control);
  }


}
