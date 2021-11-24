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
        new Card('258745', 'Ideas that I need to make', 'Tag', 'Description', 'Anexo', 'Activity'),
      ]),
      new Column('Todo', [
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),
        new Card('654789', 'What I have todo', 'Tag', 'Description', 'Anexo', 'Activity'),

      ]),
      new Column('Done', [
        new Card( '321456', 'I finish this thinks', 'Tag', 'Description', 'Anexo', 'Activity'),
      ]),
      new Column('Done', [
        new Card( '321456', 'I finish this thinks', 'Tag', 'Description', 'Anexo', 'Activity'),
      ]),
      new Column('Done', [
        new Card( '321456', 'I finish this thinks', 'Tag', 'Description', 'Anexo', 'Activity'),
      ]),
      new Column('Done', [
        new Card( '321456', 'I finish this thinks', 'Tag', 'Description', 'Anexo', 'Activity'),
      ]),
      new Column('Done', [
        new Card( '321456', 'I finish this thinks', 'Tag', 'Description', 'Anexo', 'Activity'),
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
