import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { ModalCardComponent } from './modal-card/modal-card.component';


@NgModule({
    imports: [CommonModule],
    declarations: [ModalComponent, ModalCardComponent],
    exports: [ModalComponent, ModalCardComponent]
})
export class ModalModule { }