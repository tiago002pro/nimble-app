import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/modules/kanban-board/interface/kanban.card.interface';
import { Kanban } from 'src/app/modules/kanban-board/interface/kanban.interface';
import { ListCard } from 'src/app/modules/kanban-board/interface/kanban.listcard.interface';
import { KanbanSevice } from 'src/app/modules/kanban-board/service/kanban.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listOfCards!: ListCard
  @Input() kanban!: Kanban
  @Input() listDropCard!: any
  @Output() list = new EventEmitter()
  cards!: Array<Card>
  
  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit(): Promise<void> {
    this.cards = await this.kanbanService.getAllCards().toPromise().then(response => response)
  }

  async deleteList(index: any) {
    this.list.emit(await this.kanbanService.deleteListCard(index).toPromise().then(response => response))
  }

  getCard(card: Card, id: any) {
    return card.listCard?.id === id;
  }

  async newCard(indexList: number) {
    this.listOfCards = await this.kanbanService.newCard(indexList, 'Teste Card', ).toPromise().then(response => response)
  }

  async drop(event: CdkDragDrop<Card[]>, listOfCards: ListCard) {
    console.log("listOfCards", listOfCards);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.listOfCards = await this.kanbanService.movCard(event.previousIndex, event.currentIndex, listOfCards.indexList).toPromise().then(response => response)
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        const nameListPrevious = event.item.dropContainer.id
                        const nameListCurrent = event.container.id
                        const indexCardPrevious = event.previousIndex +1
                        const indexCardCurrent = event.currentIndex +1
        this.list.emit(await this.kanbanService.movCardBetweenLists(nameListPrevious, nameListCurrent, indexCardPrevious, indexCardCurrent).toPromise().then(response => response))
    }
  }

  sortByIndex(cardList: Array<Card>) {
    return _.sortBy(cardList, 'indexCard')
  }
}