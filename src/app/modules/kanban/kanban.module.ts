import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentsModule } from './../components/components.module';

import { KanbanComponent } from './kanban.component';
import { ListComponent } from './components/list/list.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';


@NgModule({
  declarations: [
    KanbanComponent,
    ListComponent,
    NewListComponent,
    ModalCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    ComponentsModule,
  ],
  exports: [
    KanbanComponent,
    ListComponent,
    NewListComponent,
    ModalCardComponent,
  ]
})
export class KanbanModule { }
