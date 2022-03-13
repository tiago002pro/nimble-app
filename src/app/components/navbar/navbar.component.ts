import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showMenuIn!: Boolean
  @Output() showMenuOut = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.showMenuIn = !this.showMenuIn
    this.showMenuOut.emit(this.showMenuIn)  
  }
}