import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Column } from 'src/app/modules/kanban/models/columns.model';
import { Kanban } from 'src/app/modules/kanban/models/kanban.model';
import { Task } from 'src/app/modules/kanban/models/tasks.model';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() column!: Column
  @Input() indexColumn!: number
  @Input() kanban!: Kanban

  constructor() { }

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<Task[]>) {
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

  newCard(column: Column) {
    column.tasks.push(new Task('New Card on "'+ column.name+'"'))
  }

  deleteList(index: any) {
    this.kanban.boards[0].columns.splice(index, 1)
  }
}
