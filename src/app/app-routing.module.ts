import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './modules/kanban-board/kanban-board.component';
import { HomeComponent } from './modules/management/home/home.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    children: [
      { path: 'person-form/:rule', component: PersonFormComponent },
      { path: 'person-list/client/:rule', component: PersonListComponent },
      { path: 'person-list/provider/:rule', component: PersonListComponent },
      { path: 'person-list/employee/:rule', component: PersonListComponent },
      { path: 'person-form/edit/:id', component: PersonFormComponent },
      { path: 'kanban-board', component: KanbanBoardComponent}
    ]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
