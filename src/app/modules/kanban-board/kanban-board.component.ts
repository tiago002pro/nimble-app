import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from '../kanban/models/board.model';
import { Column } from '../kanban/models/columns.model';
import { Kanban } from '../kanban/models/kanban.model';
import { Task } from '../kanban/models/tasks.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  kanban: Kanban = new Kanban("Quadro 1", [
    new Board("Board 1", [
      new Column('Ideas', [
        new Task('One'),
        new Task('One'),
        new Task('One'),
      ]),
      new Column('Todo', [
        new Task('One'),
        new Task('One'),
        new Task('One'),

      ]),
      new Column('Done', [
        new Task('One'),
        new Task('One'),
        new Task('One'),
      ]),
    ])
  ])

  showInput: boolean = false
  list!: String

  constructor() { }

  ngOnInit(): void {
  }

  // drop(event: CdkDragDrop<Column[]>) {
  //   console.log("event,", event);
    
  //   if (event.previousContainer === event.container) {
  //     console.log("IF");
      
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     console.log("else");
      
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

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
