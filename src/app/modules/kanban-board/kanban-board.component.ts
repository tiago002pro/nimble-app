import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { KanbanSevice } from './service/kanban.service';
import { KanbanInterface } from './interface/kanban.interface';
import { ListCard } from './interface/kanban.listcard.interface';
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
 
  culumnDropList!: any 
  showInput: boolean = false
  list!: String
  kanban!: KanbanInterface

  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit() {
    this.kanban = await this.kanbanService.getKanbanBoardById().toPromise().then(response => response)
    console.log("this.kanban", this.kanban);
    
    this.culumnDropList = [...this.kanban.boardList[0].listCardList.map(col => col.name)];
  }

  drop(event: CdkDragDrop<ListCard[]>) {
    moveItemInArray(this.kanban.boardList[0].listCardList, event.previousIndex, event.currentIndex);
  }

  newList() {
    this.showInput = !this.showInput
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }

  saveList() {
    // this.kanban.boardList[0].listCardList.push(new Column(this.list, []))
    this.showInput = !this.showInput
    this.list = ''
  }

  onChange(value: String) {
    this.list = value
  }
}
