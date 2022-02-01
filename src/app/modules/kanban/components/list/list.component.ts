import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/modules/kanban-board/interface/kanban.card.interface';
import { Kanban } from 'src/app/modules/kanban-board/interface/kanban.interface';
import { ListCard } from 'src/app/modules/kanban-board/interface/kanban.listcard.interface';
import { KanbanSevice } from 'src/app/modules/kanban-board/service/kanban.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listOfCards!: ListCard
  @Input() kanban!: Kanban
  @Input() culumnDropList!: any
  @Output() list = new EventEmitter()
  cards!: Array<Card>
  
  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit(): Promise<void> {
    console.log("list", this.list);
    this.cards = await this.kanbanService.getAllCards().toPromise().then(response => response)
  }

  async deleteList(index: any) {
    this.list.emit(await this.kanbanService.deleteListCard(index).toPromise().then(response => response))
  }

  getCard(card: Card, id: any) {
    return card.listCard?.id === id;
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
}