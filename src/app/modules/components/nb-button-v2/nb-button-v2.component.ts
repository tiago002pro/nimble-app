import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-button-v2',
  templateUrl: './nb-button-v2.component.html',
  styleUrls: ['./nb-button-v2.component.scss']
})
export class NbButtonV2Component implements OnInit {
  @Input() label: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
