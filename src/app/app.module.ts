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
import { PersonModule } from './modules/person/person.module';
import { ModalCardTestComponent } from './modules/modal-card-test/modal-card-test.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanBoardComponent,
    KanbanColumnComponent,
    ModalCardTestComponent,
    NavbarComponent,
    SidebarComponent,

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
    PersonModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : 'nimble'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
