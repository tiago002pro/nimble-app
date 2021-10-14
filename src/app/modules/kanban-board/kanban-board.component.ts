import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from './models/board.model';
import { Column } from './models/column.model';
import { Kanban } from './models/kanban.model';
import { Card } from './models/card.model';
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  kanban: Kanban = new Kanban("Quadro 1", [
    new Board("Board 1", [
      new Column('Ideas', [
        new Card('One'),
        new Card('One'),
        new Card('One'),
      ]),
      new Column('Todo', [
        new Card('One'),
        new Card('One'),
        new Card('One'),

      ]),
      new Column('Done', [
        new Card('One'),
        new Card('One'),
        new Card('One'),
      ]),
    ])
  ])

  culumnDropList = [...this.kanban.boards[0].columns.map(col => col.name)];

  showInput: boolean = false
  list!: String

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.kanban.boards[0].columns, event.previousIndex, event.currentIndex);
  }

  newList() {
    this.showInput = !this.showInput
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }

  saveList() {
    this.kanban.boards[0].columns.push(new Column(this.list, []))
    this.showInput = !this.showInput
    this.list = ''
  }

  onChange(value: String) {
    this.list = value
  }
}
