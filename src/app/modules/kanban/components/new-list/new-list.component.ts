import { Component, Input, OnInit, Output } from '@angular/core';
import { ListCard } from 'src/app/modules/kanban-board/interface/kanban.listcard.interface';
import { KanbanSevice } from 'src/app/modules/kanban-board/service/kanban.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  showInput: boolean = false
  listCard!: Array<ListCard>
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
    this.listCard = await this.kanbanService.newListCard(this.nameList).toPromise().then(response => response)
    this.list.emit('this.listCard')
    console.log("listCard", this.listCard);
    this.showInput = !this.showInput
    this.nameList = ''
    // this.kanban = await this.kanbanService.getKanbanBoardById().toPromise().then(response => response)
  }

  onChange(value: String) {
    this.nameList = value
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }
}