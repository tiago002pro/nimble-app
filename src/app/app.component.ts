import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showMenu!: Boolean 
  constructor() {}

  ngOnInit(): void {
  }

  reciveHideMenu(value: String) {
    this.showMenu = value == 'true'
  }
}
