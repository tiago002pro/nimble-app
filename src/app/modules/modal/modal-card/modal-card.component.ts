import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../kanban-board/models/card.model';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {
  @Input() card!: Card

  value: String = 'Teste'

  constructor() { }

  ngOnInit(): void {
  }
}
