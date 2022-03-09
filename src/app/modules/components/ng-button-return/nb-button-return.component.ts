import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-button-return',
  templateUrl: './nb-button-return.component.html',
  styleUrls: ['./nb-button-return.component.scss']
})
export class NgButtonReturnComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  back() {
    history.back()  
  }
}