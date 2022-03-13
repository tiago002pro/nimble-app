import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nb-select',
  templateUrl: './nb-select.component.html',
  styleUrls: ['./nb-select.component.scss']
})
export class NbSelectComponent implements OnInit {
  @Input() label!: String
  @Input() options!: Array<any>
  @Input() value!: any
  @Output() ngModel = new EventEmitter()
  constructor() { }

  ngOnInit(): void {    
  }

  change(value: any) {
    this.ngModel.emit(value)
  }

}