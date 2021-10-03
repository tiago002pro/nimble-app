import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-input-zipcode',
  templateUrl: './nb-input-zipcode.component.html',
  styleUrls: ['./nb-input-zipcode.component.scss']
})
export class NbInputZipcodeComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  public zipcode = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

}
