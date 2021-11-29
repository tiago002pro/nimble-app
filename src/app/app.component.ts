import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showMenu!: Boolean 
  validated: Boolean = false

  constructor() {}

  ngOnInit(): void {
    this.showMenu = true
  }

  reciveShowMenuOut(value: Boolean) {
    this.showMenu = value
  }

  reciveValidatedLogin(value: Boolean) {
    this.validated = value
  }
}