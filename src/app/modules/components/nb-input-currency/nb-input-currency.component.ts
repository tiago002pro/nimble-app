import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-input-currency',
  templateUrl: './nb-input-currency.component.html',
  styleUrls: ['./nb-input-currency.component.scss']
})
export class NbInputCurrencyComponent implements OnInit {
  @Input() label: String | undefined;
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  @Output() ngModel = new EventEmitter()
  formattedAmount;

  constructor(
    // private currencyPipe : CurrencyPipe,
  ) { }

  ngOnInit(): void {
  }

  onChange(value: String) {   
    this.ngModel.emit(value)
  }
}