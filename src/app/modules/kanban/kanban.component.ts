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

  board: Board = new Board("Test Board", [
    new Column('Ideas', [
      "Some ramdom idea",
      "This is another ramdom idea",
      "build an awesome application"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "foo",
      "la la la"
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]),
  ])

  constructor() { }

  ngOnInit(): void {
    console.log("board", this.board);
    
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  newList() {
    this.showInput = !this.showInput
  }

}
