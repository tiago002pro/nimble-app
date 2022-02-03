import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from './modules/kanban-board/kanban-board.component';
import { HomeComponent } from './modules/dashboard/home.component';
import { ModalCardTestComponent } from './modules/modal-card-test/modal-card-test.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import { PaymentComponent } from './modules/finance/payment/payment.component';
import { ReceivementComponent } from './modules/finance/receivement/receivement.component';
import { ExtractComponent } from './modules/finance/extract/extract.component';
import { ReportComponent } from './modules/report/report/report.component';
import { KanbanComponent } from './modules/kanban/kanban.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'person-form/:rule', component: PersonFormComponent },
  { path: 'person-list/client/:rule', component: PersonListComponent },
  { path: 'person-list/provider/:rule', component: PersonListComponent },
  { path: 'person-list/employee/:rule', component: PersonListComponent },
  { path: 'person-form/edit/:id', component: PersonFormComponent },
  { path: 'kanban-board', component: KanbanBoardComponent},
  { path: 'kanban', component: KanbanComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'extract', component: ExtractComponent},
  { path: 'receivement', component: ReceivementComponent},
  { path: 'modal-card', component: ModalCardTestComponent},
  { path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
