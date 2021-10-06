import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-input-date',
  templateUrl: './nb-input-date.component.html',
  styleUrls: ['./nb-input-date.component.scss']
})
export class NbInputDateComponent implements OnInit {
  @Input() label: String | undefined;
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  @Output() ngModel = new EventEmitter()

  public date = [/\d/, /\d/, '/',/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    this.ngModel.emit(value)
  }
}
