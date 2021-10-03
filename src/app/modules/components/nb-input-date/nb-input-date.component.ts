import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-input-date',
  templateUrl: './nb-input-date.component.html',
  styleUrls: ['./nb-input-date.component.scss']
})
export class NbInputDateComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  public date = [/\d/, /\d/, '/',/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit(): void {
  }

}
