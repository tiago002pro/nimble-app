import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../modal';
import { Card } from '../models/card.model';
import { Column } from '../models/column.model';
import { Kanban } from '../models/kanban.model';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() column!: Column
  @Input() indexColumn!: number
  @Input() kanban!: Kanban
  @Input() culumnDropList!: any

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  newCard(column: Column) {
    column.cards.push(new Card('New Card on "'+ column.name+'"'))
  }

  deleteList(index: any) {
    this.kanban.boards[0].columns.splice(index, 1)
  }

  

  openModal(id: String) {
    this.modalService.open(id.toString());
  }

  closeModal(id: String) {
    this.modalService.close(id.toString());
  }
}
