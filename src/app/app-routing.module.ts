import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/dashboard/home.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import { ReportComponent } from './modules/report/report/report.component';
import { KanbanComponent } from './modules/kanban/kanban.component';
import { FinanceFormComponent } from './modules/finance/titles/finance-form/finance-form.component';
import { FinanceHistoryComponent } from './modules/finance/titles/finance-history/finance-history.component';
import { AccountsComponent } from './modules/finance/accounts/accounts.component';
import { ManagePersonComponent } from './modules/person/manage-person/manage-person.component';
import { TitleFormComponent } from './modules/finance/titles/title-form/title-form.component';
import { ExtractEntriesComponent } from './modules/finance/extract-entries/extract-entries.component';
import { AccountFormComponent } from './modules/finance/accounts/account-form/account-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manage-person', component: ManagePersonComponent },
  { path: 'person-form/:rule', component: PersonFormComponent },
  { path: 'person-form/edit/:id', component: PersonFormComponent },
  { path: 'person-list/client/:rule', component: PersonListComponent },
  { path: 'person-list/provider/:rule', component: PersonListComponent },
  { path: 'person-list/employee/:rule', component: PersonListComponent },
  { path: 'finance-releases', component: TitleFormComponent},
  { path: 'finance-form/:rule', component: FinanceFormComponent},
  { path: 'finance-history/pay/:rule', component: FinanceHistoryComponent},
  { path: 'finance-history/receive/:rule', component: FinanceHistoryComponent},
  { path: 'account-list', component: AccountsComponent},
  { path: 'account-form', component: AccountFormComponent},
  { path: 'account-extract', component: ExtractEntriesComponent},
  { path: 'kanban', component: KanbanComponent},
  { path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
