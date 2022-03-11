import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-select-object',
  templateUrl: './nb-select-object.component.html',
  styleUrls: ['./nb-select-object.component.scss']
})
export class NbSelectObjectComponent implements OnInit {
  @Input() label!: String
  @Input() list!: Array<any>
  @Output() ngModel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  change(value: any) {
    this.ngModel.emit(value)
  }
}