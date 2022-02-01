import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KanbanSevice } from 'src/app/modules/kanban-board/service/kanban.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  showInput: boolean = false
  nameList!: String
  @Output() list = new EventEmitter()

  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  ngOnInit(): void {
  }

  newList() {
    this.showInput = !this.showInput
  }

  async saveList() {
    this.list.emit(await this.kanbanService.newListCard(this.nameList).toPromise().then(response => response))
    this.showInput = !this.showInput
    this.nameList = ''
  }

  onChange(value: String) {
    this.nameList = value
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }
}