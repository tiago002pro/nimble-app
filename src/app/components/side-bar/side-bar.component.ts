import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  showdropDowMenu1 = false
  showdropDowMenu2 = false
  showMenu = true;
  @Output() hideMenu = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  seeMenu() {
    this.showMenu = !this.showMenu
    const menu = this.showMenu.toString()
    this.hideMenu.emit(menu)
  }

  dropDow1() {
    this.showdropDowMenu1 = !this.showdropDowMenu1
  }

  dropDow2() {
    this.showdropDowMenu2 = !this.showdropDowMenu2
  }
}
