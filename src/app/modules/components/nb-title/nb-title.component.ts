import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nb-title',
  templateUrl: './nb-title.component.html',
  styleUrls: ['./nb-title.component.scss']
})
export class NbTitleComponent implements OnInit {
  @Input() title: String | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}