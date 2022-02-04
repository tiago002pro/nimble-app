import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ListCard } from './interface/kanban.listcard.interface';
import { KanbanSevice } from './service/kanban.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  listCard!: Array<ListCard> 
  listDropCard!: any 

  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit(): Promise<void> {
    this.listCard = await this.kanbanService.getAllListCard().toPromise().then(response => response)
    this.listDropCard = [...this.listCard.map(list => list.name)];
  }

  drop(event: CdkDragDrop<ListCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.listCard, event.previousIndex, event.currentIndex);
      this.kanbanService.movList(event.previousIndex, event.currentIndex).toPromise().then(response => response)
    }
  }

  reciveListCards(value: any) {
    this.listCard = value
    this.listDropCard = [...this.listCard.map(list => list.name)];
  }
}