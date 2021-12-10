import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  constructor(
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    // this.ngxService.start()
    // setTimeout(() => {
    //   this.ngxService.stop()
    // }, 2000)
  }
}