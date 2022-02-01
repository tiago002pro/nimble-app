import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { ModalService } from '../../modal';
import { Card } from '../interface/kanban.card.interface';
import { Kanban } from '../interface/kanban.interface';
import { ListCard } from '../interface/kanban.listcard.interface';
import { KanbanSevice } from '../service/kanban.service';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() column!: ListCard
  @Input() kanban!: Kanban
  @Input() culumnDropList!: any
  cards!: Array<Card>
  @Output() index = new EventEmitter();

  constructor(
    public modalService: ModalService,
    public kanbanService: KanbanSevice,
  ) { }

  async ngOnInit() {
    this.cards = await this.kanbanService.getAllCards().toPromise().then(response => response)
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("event.previousContainer", event.previousContainer);
      console.log("event.container", event.container);
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log("event.previousContainer.data", event.previousContainer.data);
                        console.log("event.container.data", event.container.data);
                        console.log("event.previousIndex", event.previousIndex);
                        console.log("event.currentIndex", event.currentIndex);
    }
  }

  newCard(column: ListCard) {
    // column.cards.push(new Card(Math.trunc(
    //   this.getRandomArbitrary()).toString(), 
    //   'New Card on "'+ column.name+'"',
    //   'Tag on "'+ column.name+'"',
    //   'Description on "'+ column.name+'"',
    //   'Attachment on "'+ column.name+'"',
    //   'Activity on "'+ column.name+'"',
    // ))
  }

  getRandomArbitrary() {
    return Math.random() * (999999 - 100000) + 100000;
  }

  deleteList(index: any) {
    // this.kanbanService.deleteListCard(index).toPromise().then(response => response)
    // this.kanban.boardList[0].listCardList.splice(index, 1)
    this.index.emit(index)
  }

  

  openModal(id: String) {
    this.modalService.open(id.toString());
  }

  closeModal(id: String) {
    this.modalService.close(id.toString());
  }

  getCard(card: Card, id: any) {
    return card.listCard?.id === id;
  }
}
