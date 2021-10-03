import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-input-number',
  templateUrl: './nb-input-number.component.html',
  styleUrls: ['./nb-input-number.component.scss']
})
export class NbInputNumberComponent implements OnInit {
  @Input() placeholder: String | undefined;
  @Input() value: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
