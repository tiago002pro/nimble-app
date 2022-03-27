import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Card } from '../../interface/kanban.card.interface';

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

  teste1: String = "Precisa fazer o menu sdf sdf sdf sdf dsfsdfsdfsd dsf dsfsdf sdf sdf sdf sd fsdf sdf sdf sdf sdf sdf sdf dsf sdfsdfsdfsdfsdfsd fsdf sdf sdfsdfsdfsdf sdf sdf"
  teste2: String = "A fazer"

  constructor() { }

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
    const v1 = Math.floor(content.length / 50);
    const v2 = content.split('\n').length;
    return Math.max(v1,v2) 
  }
}