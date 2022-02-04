import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { KanbanSevice } from '../kanban/service/kanban.service';
import { Kanban } from '../kanban/interface/kanban.interface';
import { ListCard } from '../kanban/interface/kanban.listcard.interface';
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
 
  culumnDropList!: any 
  showInput: boolean = false
  nameList!: String
  kanban!: Kanban
  listCard!: Array<ListCard>

  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit() {
    
    this.kanban = await this.kanbanService.getKanbanBoardById().toPromise().then(response => response)
    this.listCard = await this.kanbanService.getAllListCard().toPromise().then(response => response)
    this.culumnDropList = [...this.listCard.map(col => col.indexList)];
  }

  async drop(event: CdkDragDrop<ListCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.listCard, event.previousIndex, event.currentIndex);
        this.kanbanService.movList(event.previousIndex, event.currentIndex).toPromise().then(response => response)
    } else {
      console.log("noo");
    }
  }

  newList() {
    this.showInput = !this.showInput
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }

  async saveList() {
    this.listCard = await this.kanbanService.newListCard(this.nameList).toPromise().then(response => response)
    console.log("listCard", this.listCard);
    this.showInput = !this.showInput
    this.nameList = ''
    // this.kanban = await this.kanbanService.getKanbanBoardById().toPromise().then(response => response)
  }

  onChange(value: String) {
    this.nameList = value
  }

  reciveIndexList(value: any) {
    console.log("valueeee", value);
    
  }

  async deleteList(index: any) {
    this.listCard = await this.kanbanService.deleteListCard(index).toPromise().then(response => response)
    // this.kanban.boardList[0].listCardList.splice(index, 1)
  }
}
