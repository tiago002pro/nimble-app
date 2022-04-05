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
import { NbInputCpfcnpjComponent } from './modules/components/nb-input-cpfcnpj/nb-input-cpfcnpj.component';
import { NbInputDateComponent } from './modules/components/nb-input-date/nb-input-date.component';
import { NbInputNumberComponent } from './modules/components/nb-input-number/nb-input-number.component';
import { NbInputPhoneComponent } from './modules/components/nb-input-phone/nb-input-phone.component';
import { NbInputTextComponent } from './modules/components/nb-input-text/nb-input-text.component';
import { NbInputZipcodeComponent } from './modules/components/nb-input-zipcode/nb-input-zipcode.component';
import { NbPersonDataComponent } from './modules/person/components/nb-person-data/nb-person-data.component';
import { NbPersonDocumentsComponent } from './modules/person/components/nb-person-documents/nb-person-documents.component';
import { NbPersonLocationComponent } from './modules/person/components/nb-person-location/nb-person-location.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NbButtonComponent } from './modules/components/nb-button/nb-button.component';
import { NbButtonBackComponent } from './modules/components/nb-button-back/nb-button-back.component';
import { NbTitleComponent } from './modules/components/nb-title/nb-title.component';
import { LoginComponent } from './views/login/login.component';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ReportComponent } from './modules/report/report/report.component';
import { KanbanComponent } from './modules/kanban/kanban.component';
import { ListComponent } from './modules/kanban/components/list/list.component';
import { NewListComponent } from './modules/kanban/components/new-list/new-list.component';
import { FinanceFormComponent } from './modules/finance/finance-form/finance-form.component';
import { FinanceHistoryComponent } from './modules/finance/finance-history/finance-history.component';
import { NbSelectComponent } from './modules/components/nb-select/nb-select.component';
import { NgButtonReturnComponent } from './modules/components/ng-button-return/nb-button-return.component';
import { NbSelectObjectComponent } from './modules/components/nb-select-object/nb-select-object.component';
import { NbPaginationComponent } from './modules/components/nb-pagination/nb-pagination.component';
import { ModalComponent } from './modules/kanban/components/modal-card/modal-cardcomponent';
import { AccountsComponent } from './modules/finance/accounts/accounts.component';
import { ManagePersonComponent } from './modules/person/manage-person/manage-person.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    NbInputCpfcnpjComponent,
    NbInputDateComponent,
    NbInputNumberComponent,
    NbInputPhoneComponent,
    NbInputTextComponent,
    NbInputZipcodeComponent,
    NbPersonDataComponent,
    NbPersonDocumentsComponent,
    NbPersonLocationComponent,
    PersonFormComponent,
    PersonListComponent,
    NbButtonComponent,
    NbButtonBackComponent,
    NbTitleComponent,
    LoginComponent,
    ReportComponent,
    KanbanComponent,
    ListComponent,
    NewListComponent,
    FinanceFormComponent,
    FinanceHistoryComponent,
    NbSelectComponent,
    NgButtonReturnComponent,
    NbSelectObjectComponent,
    NbPaginationComponent,
    ModalComponent,
    AccountsComponent,
    ManagePersonComponent,
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
