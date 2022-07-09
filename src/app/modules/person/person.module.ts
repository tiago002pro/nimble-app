import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Public components
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';

//Private components
import { NbPersonLocationComponent } from './components/nb-person-location/nb-person-location.component';
import { NbPersonDocumentsComponent } from './components/nb-person-documents/nb-person-documents.component';
import { NbPersonDataComponent } from './components/nb-person-data/nb-person-data.component';



@NgModule({
  declarations: [
    // PersonFormComponent,
    // PersonListComponent,
    // NbPersonDataComponent,
    // NbPersonDocumentsComponent,
    // NbPersonLocationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatSelectModule,
    NgxMatSelectSearchModule, 
    MatTooltipModule,
  ],
  exports: [
    // PersonFormComponent,
    // PersonListComponent,
    // NbPersonDataComponent,
    // PersonFormComponent,
    // PersonListComponent,
  ]
})
export class PersonModule { }
