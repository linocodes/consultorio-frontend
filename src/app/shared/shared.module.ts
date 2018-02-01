import { CpfMascaraPipe } from './../pipe/cpf-mascara.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascaraDirective } from './directives/mascara.directive';
import { CpfValidateDirective } from './directives/cpf-validate.directive';
import { CpfValidator } from './validators/cpf.validator';
import { MaskMoneyDirective } from './directives/mask-money.directive';
import { MaskNumberDirective } from './directives/mask-number.directive';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],

  declarations: [
    CpfMascaraPipe,
    MascaraDirective,
    CpfValidateDirective,
    MaskMoneyDirective,
    MaskNumberDirective,
  ],

  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CpfMascaraPipe,
    MascaraDirective,
    CpfValidateDirective,
    MaskMoneyDirective,
    MaskNumberDirective,

  ],

  providers: [
    CpfMascaraPipe
  ]


})
export class SharedModule { }
