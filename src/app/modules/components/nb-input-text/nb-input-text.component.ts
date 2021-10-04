import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nb-input-text',
  templateUrl: './nb-input-text.component.html',
  styleUrls: ['./nb-input-text.component.scss']
})
export class NbInputTextComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;
  @Output() ngModel = new EventEmitter()

  public pf: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: String) {
    this.ngModel.emit(value)
  }
}
