import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-button-return',
  templateUrl: './nb-button-return.component.html',
  styleUrls: ['./nb-button-return.component.scss']
})
export class NbButtonReturnComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  back() {
    history.back()  
  }
}