import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  showdropDowMenu1 = true
  showdropDowMenu2 = true
  showMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  seeMenu() {
    this.showMenu = !this.showMenu
  }

  dropDow1() {
    this.showdropDowMenu1 = !this.showdropDowMenu1
  }

  dropDow2() {
    this.showdropDowMenu2 = !this.showdropDowMenu2
  }

}
