import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components/components.module';

import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';

import { NbPersonDataComponent } from './components/nb-person-data/nb-person-data.component';
import { NbPersonDocumentsComponent } from './components/nb-person-documents/nb-person-documents.component';
import { NbPersonLocationComponent } from './components/nb-person-location/nb-person-location.component';



@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent,
    ManagePersonComponent,
    NbPersonDataComponent,
    NbPersonDocumentsComponent,
    NbPersonLocationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    PersonFormComponent,
    PersonListComponent,
    ManagePersonComponent,
  ]
})
export class PersonModule { }
