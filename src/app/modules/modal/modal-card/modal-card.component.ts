import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../kanban-board/models/card.model';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {
  @Input() card!: Card
  @Input() columnName!: String

  sizeInputName!: Number
  row!: Number

  constructor() { }

  ngOnInit(): void {
    this.sizeInputName = this.card.name.length
    this.row = 1
  }

  modelChanged(value: any) {
    this.sizeInputName = value.length
    console.log(this.sizeInputName);
    if (this.sizeInputName > 56) {
      this.row = Math.trunc(value.length / 67) + 1
      console.log("this.row", this.row);
      
    }
    
    
  }

  saveCard() {
    console.log(this.card);
    return false
    
  }
}
