import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanComponent } from './modules/kanban/kanban.component';
import { HomeComponent } from './modules/management/home/home.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'person-form/:rule', component: PersonFormComponent },
  { path: 'person-list/client/:rule', component: PersonListComponent },
  { path: 'person-list/provider/:rule', component: PersonListComponent },
  { path: 'person-list/employee/:rule', component: PersonListComponent },
  { path: 'person-form/edit/:id', component: PersonFormComponent },
  { path: 'app-kanban', component: KanbanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
