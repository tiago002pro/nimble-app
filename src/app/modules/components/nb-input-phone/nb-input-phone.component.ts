import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-input-phone',
  templateUrl: './nb-input-phone.component.html',
  styleUrls: ['./nb-input-phone.component.scss']
})
export class NbInputPhoneComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  public phone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/,  /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

}
