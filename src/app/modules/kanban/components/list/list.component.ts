import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
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

  listCard!: Array<ListCard>
  @Input() list!: ListCard
  @Input() kanban!: Kanban
  @Input() culumnDropList!: any
  cards!: Array<Card>
  
  constructor(
    private kanbanService: KanbanSevice,
  ) { }

  async ngOnInit(): Promise<void> {
    console.log("list", this.list);
    this.cards = await this.kanbanService.getAllCards().toPromise().then(response => response)
  }

  async deleteList(index: any) {
    this.listCard = await this.kanbanService.deleteListCard(index).toPromise().then(response => response)
    // this.kanban.boardList[0].listCardList.splice(index, 1)
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
}
