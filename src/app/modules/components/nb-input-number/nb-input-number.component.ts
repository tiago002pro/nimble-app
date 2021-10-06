import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-input-number',
  templateUrl: './nb-input-number.component.html',
  styleUrls: ['./nb-input-number.component.scss']
})
export class NbInputNumberComponent implements OnInit {
  @Input() label: String | undefined;
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  @Output() ngModel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {   
    this.ngModel.emit(value)
  }
}
