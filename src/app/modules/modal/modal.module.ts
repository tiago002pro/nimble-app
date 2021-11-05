import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { ModalCardComponent } from './modal-card/modal-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ModalComponent, ModalCardComponent],
    exports: [ModalComponent, ModalCardComponent]
})
export class ModalModule { }