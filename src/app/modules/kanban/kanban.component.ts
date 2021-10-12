import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board } from './models/board.model';
import { Column } from './models/columns.model';
import { Kanban } from './models/kanban.model';
import { Task } from './models/tasks.model';

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
      new Task("Some ramdom idea"),
      new Task("This is another ramdom idea"),
      new Task("build an awesome application")
    ]),
    new Column('Todo', [
      new Task('Get to work'),
      new Task('Pick up groceries')
    ]),
    new Column('Done', [
    ]),
  ])

  kanban: Kanban = new Kanban("Quadro 1", [
    new Board("Board 1", [
      new Column('Ideas', [
        new Task('One'),
        new Task('Two'),
        new Task('Three'),
      ]),
      new Column('Todo', [
        new Task('Four'),
        new Task('Five'),

      ]),
      new Column('Done', [
        new Task('Six'),
      ]),
    ])
  ])

  constructor() { }

  ngOnInit(): void {
    console.log("boars", this.board);
    
  }

  drop1(event: CdkDragDrop<Column[]>) {
    console.log("event,", event);
    
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

  drop2(event: CdkDragDrop<Task[]>) {
    console.log("event,", event);
    
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

  entered(event: CdkDragEnter) {
    moveItemInArray(this.board.columns, event.item.data, event.container.data);
  }

  newList() {
    this.showInput = !this.showInput
  }

  closeInputNewList() {
    this.showInput = !this.showInput
  }

  newCard(column: Column) {
    column.tasks.push( new Task('New Card on "'+ column.name+'"'))
  }

  saveList() {
    this.board.columns.push(new Column(this.list, []))
    this.showInput = !this.showInput
  }

  onChange(value: String) {
    this.list = value
  }

  deleteList(index: any) {
    this.board.columns.splice(index, 1)
  }
}
