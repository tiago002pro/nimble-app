import { AccountListComponent } from './modules/finance/account/account-list/account-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/dashboard/home.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import { ReportComponent } from './modules/report/report/report.component';
import { KanbanComponent } from './modules/kanban/kanban.component';
import { TitleListComponent } from './modules/finance/titles/title-list/title-list.component';
import { ManagePersonComponent } from './modules/person/manage-person/manage-person.component';
import { TitleFormComponent } from './modules/finance/titles/title-form/title-form.component';
import { ExtractEntriesComponent } from './modules/finance/extract/extract.component';
import { AccountFormComponent } from './modules/finance/account/account-form/account-form.component';
import { CustomerAttentionComponent } from './modules/customer-attention/customer-attention.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manage-person', component: ManagePersonComponent },
  { path: 'person-form/:rule', component: PersonFormComponent },
  { path: 'person-form/edit/:id', component: PersonFormComponent },
  { path: 'person-list/client/:rule', component: PersonListComponent },
  { path: 'person-list/provider/:rule', component: PersonListComponent },
  { path: 'person-list/employee/:rule', component: PersonListComponent },
  { path: 'title-releases/:rule', component: TitleFormComponent},
  { path: 'finance-history/pay/:rule', component: TitleListComponent},
  { path: 'finance-history/receive/:rule', component: TitleListComponent},
  { path: 'account-list', component: AccountListComponent},
  { path: 'account-form', component: AccountFormComponent},
  { path: 'account-form/edit/:id', component: AccountFormComponent},
  { path: 'account-extract/:id', component: ExtractEntriesComponent},
  { path: 'kanban', component: KanbanComponent},
  { path: 'report', component: ReportComponent},
  { path: 'customer-attention', component: CustomerAttentionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
