import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Board } from '../../kanban/models/board.model';
import { Column } from '../../kanban/models/columns.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  columns: any = [
    {id: 1, title: 'To Do', cards: [{title: 'A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer', description: 'AAAAAAAA', status: 'red'}, {title: 'A Fazer', description: 'AAAAAAAA', status: 'blue'}]},
    {id: 2, title: 'In Progres', cards: [{}]},
    {id: 3, title: 'Done', cards: [{title: 'Terminados', description: 'AAAAAAAA', status: 'red'}, {title: 'Terminados5', description: 'AAAAAAAA', status: 'green'}, {title: 'Terminados'}, {title: 'Terminados', description: 'AAAAAAAA',}, {title: 'Terminados'}, {title: 'Terminados', description: 'AAAAAAAA',}, {title: 'Terminados5'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados5'}, {title: 'Terminados'}, {title: 'Terminados'}, ]},
    {id: 4, title: 'Test', cards: [{}]}
  ]

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
}
