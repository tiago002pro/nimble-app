import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nb-input-phone',
  templateUrl: './nb-input-phone.component.html',
  styleUrls: ['./nb-input-phone.component.scss']
})
export class NbInputPhoneComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  @Output() ngModel = new EventEmitter()
  
  public phone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/,  /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    this.ngModel.emit(value)
  }
}
