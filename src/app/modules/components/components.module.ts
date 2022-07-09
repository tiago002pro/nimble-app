import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbInputCpfcnpjComponent } from './nb-input-cpfcnpj/nb-input-cpfcnpj.component';
import { NbInputCurrencyComponent } from './nb-input-currency/nb-input-currency.component';
import { NbInputDateComponent } from './nb-input-date/nb-input-date.component';
import { NbInputNumberComponent } from './nb-input-number/nb-input-number.component';
import { NbInputPhoneComponent } from './nb-input-phone/nb-input-phone.component';
import { NbInputTextComponent } from './nb-input-text/nb-input-text.component';
import { NbInputZipcodeComponent } from './nb-input-zipcode/nb-input-zipcode.component';
import { NbSelectComponent } from './nb-select/nb-select.component';
import { NbSelectObjectComponent } from './nb-select-object/nb-select-object.component';
import { NbButtonComponent } from './nb-button/nb-button.component';
import { NbButtonBackComponent } from './nb-button-back/nb-button-back.component';
import { NbButtonV2Component } from './nb-button-v2/nb-button-v2.component';
import { NbButtonReturnComponent } from './nb-button-return/nb-button-return.component';
import { NbTitleComponent } from './nb-title/nb-title.component';
import { NbPaginationComponent } from './nb-pagination/nb-pagination.component';

@NgModule({
  declarations: [
    NbInputCpfcnpjComponent,
    NbInputCurrencyComponent,
    NbInputDateComponent,
    NbInputNumberComponent,
    NbInputPhoneComponent,
    NbInputTextComponent,
    NbInputZipcodeComponent,
    NbSelectComponent,
    NbSelectObjectComponent,
    NbButtonComponent,
    NbButtonBackComponent,
    NbButtonV2Component,
    NbButtonReturnComponent,
    NbTitleComponent,    
    NbPaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,    
  ],
  exports: [
    NbInputCpfcnpjComponent,
    NbInputCurrencyComponent,
    NbInputDateComponent,
    NbInputNumberComponent,
    NbInputPhoneComponent,
    NbInputTextComponent,
    NbInputZipcodeComponent,
    NbSelectComponent,
    NbSelectObjectComponent,
    NbButtonComponent,
    NbButtonBackComponent,
    NbButtonV2Component,
    NbButtonReturnComponent,
    NbTitleComponent,    
    NbPaginationComponent,
  ]
})
export class ComponentsModule { }
