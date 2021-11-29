import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  name!: String
  @Output() ngModel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  reciveName(value: String) {
    this.name = value
  }
}
