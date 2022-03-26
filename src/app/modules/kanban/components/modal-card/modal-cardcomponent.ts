import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interface/kanban.card.interface';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
})
export class ModalComponent implements OnInit {
  // @Input() id!: string;
  @Input() card!: Card
  @Input() mostrar!: Boolean

  constructor() { }

  ngOnInit() {
    console.log("aaaaaaaa", this.mostrar);
    console.log("aaaaaaaa", this.card);
    
  }

  close() {
    this.mostrar = !this.mostrar
  }

  reciveName(value) {
    
  }
}