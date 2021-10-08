import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './modules/management/home/home.component';
import { PersonFormComponent } from './modules/person/person-form/person-form.component';
import { NbInputTextComponent } from './modules/components/nb-input-text/nb-input-text.component';
import { NbPersonDataComponent } from './modules/person/components/nb-person-data/nb-person-data.component';
import { NbPersonDocumentsComponent } from './modules/person/components/nb-person-documents/nb-person-documents.component';
import { NbPersonLocationComponent } from './modules/person/components/nb-person-location/nb-person-location.component';
import { PersonListComponent } from './modules/person/person-list/person-list.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NbInputDateComponent } from './modules/components/nb-input-date/nb-input-date.component';
import { NbInputPhoneComponent } from './modules/components/nb-input-phone/nb-input-phone.component';
import { NbInputZipcodeComponent } from './modules/components/nb-input-zipcode/nb-input-zipcode.component';
import { NbInputCpfcnpjComponent } from './modules/components/nb-input-cpfcnpj/nb-input-cpfcnpj.component';
import { NbInputNumberComponent } from './modules/components/nb-input-number/nb-input-number.component';
import { APP_BASE_HREF } from '@angular/common';
import { PersonService } from './modules/person/service/person.service';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    SideBarComponent,
    HomeComponent,
    PersonFormComponent,
    NbInputTextComponent,
    NbPersonDataComponent,
    NbPersonDocumentsComponent,
    NbPersonLocationComponent,
    PersonListComponent,
    NbInputDateComponent,
    NbInputPhoneComponent,
    NbInputZipcodeComponent,
    NbInputCpfcnpjComponent,
    NbInputNumberComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : 'nimble'}, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
