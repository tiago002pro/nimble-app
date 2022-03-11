import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nb-pagination',
  templateUrl: './nb-pagination.component.html',
  styleUrls: ['./nb-pagination.component.scss']
})
export class NbPaginationComponent implements OnInit {
  @Input() totalPages!: number
  @Output() page = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  getDataPage(value) {
    this.page.emit(value)
  }
}