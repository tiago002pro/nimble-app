import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Card } from '../../interface/kanban.card.interface';
import { KanbanSevice } from '../../service/kanban.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() card!: Card
  @Input() mostrar!: Boolean
  @Input() listNameCard!: String
  @Output() openModalCard = new EventEmitter()
  newActivity: String = ''
  showSaveButton: Boolean = false
  @ViewChild('bntsave') el:ElementRef;

  constructor(
    private kanbanSevice: KanbanSevice
  ) { }

  ngOnInit() {}

  close() {
    this.mostrar = !this.mostrar
    this.openModalCard.emit(this.mostrar)
  }

  autoGrow(e) {
    e.target.style.overflow = 'hidden';
    e.target.style.height = "0px";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  getHeight(content) {
    if (content != null) {
      const v1 = Math.floor(content.length / 50);
      const v2 = content.split('\n').length;
      return Math.max(v1,v2) 
    }
  }

  updateCardTitle(value) {
    this.card.title = value
    this.updateCard()
  }

  updateCard() {
    this.kanbanSevice.updateCard(this.card).toPromise().then((response) => response)
  }

  doSomething() {
    this.showSaveButton = !this.showSaveButton
  }

  isUndefined(value) {
    return !value 
  }

  toggleEditable(): void {
    this.showSaveButton = !this.showSaveButton;
  }

  ngAfterViewChecked(){
    if(this.showSaveButton){
      this.el.nativeElement.focus();
    }
  }
}