import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../../app-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components/components.module';

import { TitleListComponent } from './titles/title-list/title-list.component';
import { TitleFormComponent } from './titles/title-form/title-form.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { ExtractEntriesComponent } from './extract/extract.component';
import { CategoryFormModalComponent } from './titles/modals/category-form-modal/category-form-modal.component';
import { ModalPaidTitleComponent } from './titles/modals/modal-paid-title/modal-paid-title.component';


@NgModule({
  declarations: [
    TitleListComponent,
    TitleFormComponent,
    AccountListComponent,
    AccountFormComponent,
    ExtractEntriesComponent,
    CategoryFormModalComponent,
    ModalPaidTitleComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatTooltipModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    TitleListComponent,
    TitleFormComponent,
    AccountListComponent,
    AccountFormComponent,
    ExtractEntriesComponent,
    CategoryFormModalComponent,
    ModalPaidTitleComponent,
  ]
})
export class FinanceModule { }
