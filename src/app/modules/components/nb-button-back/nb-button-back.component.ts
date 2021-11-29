import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-button-back',
  templateUrl: './nb-button-back.component.html',
  styleUrls: ['./nb-button-back.component.scss']
})
export class NbButtonBackComponent implements OnInit {
  @Input() label: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}