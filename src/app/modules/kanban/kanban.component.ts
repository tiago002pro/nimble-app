import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Kanban } from '../kanban-board/interface/kanban.interface';
import { ListCard } from '../kanban-board/interface/kanban.listcard.interface';
import { KanbanSevice } from '../kanban-board/service/kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  listCard!: Array<ListCard> 
  kanban!: Kanban
  culumnDropList!: any 

  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit(): Promise<void> {
    this.listCard = await this.kanbanService.getAllListCard().toPromise().then(response => response)
  }

  drop(event: CdkDragDrop<ListCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.listCard, event.previousIndex, event.currentIndex);
        this.kanbanService.movList(event.previousIndex, event.currentIndex).toPromise().then(response => response)
    } else {
      console.log("noo");
    }
  }

  reciveListCards(value: String) {
    console.log("aaa", value);
    
  }
}