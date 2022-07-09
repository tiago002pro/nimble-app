import { ComponentsModule } from './modules/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/dashboard/home.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { APP_BASE_HREF } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NbPersonDataComponent } from './modules/person/components/nb-person-data/nb-person-data.component';
import { NbPersonDocumentsComponent } from './modules/person/components/nb-person-documents/nb-person-documents.component';
import { NbPersonLocationComponent } from './modules/person/components/nb-person-location/nb-person-location.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LoginComponent } from './views/login/login.component';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ReportComponent } from './modules/report/report/report.component';
import { KanbanComponent } from './modules/kanban/kanban.component';
import { ListComponent } from './modules/kanban/components/list/list.component';
import { NewListComponent } from './modules/kanban/components/new-list/new-list.component';
import { FinanceHistoryComponent } from './modules/finance/titles/finance-history/finance-history.component';
import { ModalComponent } from './modules/kanban/components/modal-card/modal-cardcomponent';
import { AccountsComponent } from './modules/finance/accounts/accounts.component';
import { ManagePersonComponent } from './modules/person/manage-person/manage-person.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CategoryFormModalComponent } from './modules/finance/titles/modals/category-form-modal/category-form-modal.component';
import { TitleFormComponent } from './modules/finance/titles/title-form/title-form.component';
import { ExtractEntriesComponent } from './modules/finance/extract/extract.component';
import { AccountFormComponent } from './modules/finance/accounts/account-form/account-form.component';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { ModalPaidTitleComponent } from './modules/finance/titles/modals/modal-paid-title/modal-paid-title.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomerAttentionComponent } from './modules/customer-attention/customer-attention.component';
import { CustomerAttentionListComponent } from './modules/customer-attention/customer-attention-list/customer-attention-list.component';
registerLocaleData(ptBr)

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "bgsColor": "#00ff89",
  "bgsOpacity": 1,
  "bgsPosition": "center-center",
  "bgsSize": 150,
  "bgsType": "ball-spin-fade-rotating",
  "blur": 9,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#77ffc0",
  "fgsPosition": "center-center",
  "fgsSize": 140,
  "fgsType": "three-strings",
  "gap": 40,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(32,27,44)",
  "pbColor": "#6f3de7",
  "pbDirection": "rtl",
  "pbThickness": 10,
  "hasProgressBar": false,
  "text": "CARREGANDO",
  "textColor": "#77ffc0",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: false,
  min: 0,
  max: 99999999999,
  inputMode: CurrencyMaskInputMode.NATURAL
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    NbPersonDataComponent,
    NbPersonDocumentsComponent,
    NbPersonLocationComponent,
    PersonFormComponent,
    PersonListComponent,
    LoginComponent,
    ReportComponent,
    KanbanComponent,
    ListComponent,
    NewListComponent,
    FinanceHistoryComponent,
    ModalComponent,
    AccountsComponent,
    ManagePersonComponent,
    CategoryFormModalComponent,
    TitleFormComponent,
    ExtractEntriesComponent,
    AccountFormComponent,
    ModalPaidTitleComponent,
    CustomerAttentionComponent,
    CustomerAttentionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), 
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatSelectModule,
    NgxMatSelectSearchModule, 
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    MatTooltipModule,
    ComponentsModule,
  ],
  // providers: [{provide: APP_BASE_HREF, useValue : 'nimble'}],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
