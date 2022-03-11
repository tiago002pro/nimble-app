import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/dashboard/home.component';
import { ModalCardTestComponent } from './modules/modal-card-test/modal-card-test.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import { ReportComponent } from './modules/report/report/report.component';
import { KanbanComponent } from './modules/kanban/kanban.component';
import { FinanceFormComponent } from './modules/finance/finance-form/finance-form.component';
import { FinanceHistoryComponent } from './modules/finance/finance-history/finance-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'person-form/:rule', component: PersonFormComponent },
  { path: 'person-list/client/:rule', component: PersonListComponent },
  { path: 'person-list/provider/:rule', component: PersonListComponent },
  { path: 'person-list/employee/:rule', component: PersonListComponent },
  { path: 'person-form/edit/:id', component: PersonFormComponent },
  { path: 'kanban', component: KanbanComponent},
  { path: 'modal-card', component: ModalCardTestComponent},
  { path: 'report', component: ReportComponent},
  { path: 'finance-form/:rule', component: FinanceFormComponent},
  { path: 'finance-history/pay/:rule', component: FinanceHistoryComponent},
  { path: 'finance-history/receive/:rule', component: FinanceHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
