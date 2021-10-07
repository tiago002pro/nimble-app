import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  columns: any = [
    {id: 1, title: 'To Do', cards: [{title: 'A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer A Fazer', description: 'AAAAAAAA', status: 'red'}, {title: 'A Fazer', description: 'AAAAAAAA', status: 'blue'}]},
    {id: 2, title: 'In Progres', cards: [{}]},
    {id: 3, title: 'Done', cards: [{title: 'Terminados', description: 'AAAAAAAA', status: 'red'}, {title: 'Terminados5', description: 'AAAAAAAA', status: 'green'}, {title: 'Terminados'}, {title: 'Terminados', description: 'AAAAAAAA',}, {title: 'Terminados'}, {title: 'Terminados', description: 'AAAAAAAA',}, {title: 'Terminados5'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados'}, {title: 'Terminados5'}, {title: 'Terminados'}, {title: 'Terminados'}, ]},
    {id: 4, title: 'Test', cards: [{}]}
  ]

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("a", this.columns[0].cards);
    
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

}
