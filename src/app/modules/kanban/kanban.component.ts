import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from './models/board.model';
import { Column } from './models/columns.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  showInput: boolean = false
  list!: String

  board: Board = new Board("Test Board", [
    new Column('Ideas', [
      "Some ramdom idea",
      "This is another ramdom idea",
      "build an awesome application"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
    ]),
    new Column('Done', [
    ]),
  ])

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>, column: Column) {
    console.log("event,", event);
    console.log("column,", column);
    
    if (event.previousContainer === event.container) {
      console.log("IF");
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("else");
      
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  newList() {
    this.showInput = !this.showInput
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }

  newCard(column: Column) {
    column.tasks.push('New Card on "'+ column.name+'"')
  }

  saveList() {
    this.board.columns.push(new Column(this.list, []))
  }

  onChange(value: String) {
    this.list = value
  }
}
