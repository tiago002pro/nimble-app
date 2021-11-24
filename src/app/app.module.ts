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
import { KanbanBoardComponent } from './modules/kanban-board/kanban-board.component';
import { KanbanColumnComponent } from './modules/kanban-board/kanban-column/kanban-column.component';
import { ModalModule } from './modules/modal';
import { ModalCardTestComponent } from './modules/modal-card-test/modal-card-test.component';
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
import { PaymentComponent } from './modules/finance/payment/payment.component';
import { ReceivementComponent } from './modules/finance/receivement/receivement.component';
import { ExtractComponent } from './modules/finance/extract/extract.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NbButtonComponent } from './modules/components/nb-button/nb-button.component';
import { NbButtonBackComponent } from './modules/components/nb-button-back/nb-button-back.component';
import { NbTitleComponent } from './modules/components/nb-title/nb-title.component';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanBoardComponent,
    KanbanColumnComponent,
    ModalCardTestComponent,
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
    PaymentComponent,
    ReceivementComponent,
    ExtractComponent,
    PersonFormComponent,
    PersonListComponent,
    NbButtonComponent,
    NbButtonBackComponent,
    NbTitleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    DragDropModule,
    ModalModule,
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
