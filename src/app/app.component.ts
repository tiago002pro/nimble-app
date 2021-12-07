import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showMenu!: Boolean 
  validated: Boolean = false

  constructor(
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.showMenu = true
    this.ngxService.start()
    setTimeout(() => {
      this.ngxService.stop()
    }, 2000)
  }

  reciveShowMenuOut(value: Boolean) {
    this.showMenu = value
  }

  reciveValidatedLogin(value: Boolean) {
    this.validated = value
  }
}