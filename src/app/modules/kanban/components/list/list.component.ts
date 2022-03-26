import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/modules/kanban/interface/kanban.card.interface';
import { ListCard } from 'src/app/modules/kanban/interface/kanban.listcard.interface';
import { KanbanSevice } from 'src/app/modules/kanban/service/kanban.service';
import Swal from 'sweetalert2';
import * as _ from 'underscore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listOfCards!: ListCard
  @Input() listDropCard!: any
  @Output() list = new EventEmitter()
  @Output() arrayListCards = new EventEmitter()
  @Output() openModalCard = new EventEmitter()
  @Output() cardToShow = new EventEmitter()
  showModalCard: boolean = false
  cards!: Array<Card>
  
  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit(): Promise<void> {
    this.cards = await this.kanbanService.getAllCards().toPromise().then(response => response)
  }

  async deleteList(list: ListCard) {
    if (list.cardList.length > 0) {
      Swal.fire({
        title: 'Tem certeza?',
        text: "Todos os cards desta lista também serão deletados.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Excluir!',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Excluido!',
            'Lista excluída com sucesso',
            'success'
          )
          this.list.emit(await this.kanbanService.deleteListCard(list.indexList).toPromise().then(response => response))
        }
      })
    } else {
      this.list.emit(await this.kanbanService.deleteListCard(list.indexList).toPromise().then(response => response))
    }
  }

  async newCard(indexList: number) {
    this.listOfCards = await this.kanbanService.newCard(indexList, 'Teste Card', ).toPromise().then(response => response)
  }

  async drop(event: CdkDragDrop<Card[]>, listOfCards: ListCard) {
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

  showCard(card) {
    this.showModalCard = !this.showModalCard
    this.openModalCard.emit(this.showModalCard)
    this.cardToShow.emit(card)
  }
}