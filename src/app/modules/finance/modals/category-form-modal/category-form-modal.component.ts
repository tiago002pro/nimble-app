import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { CategoryTitle } from '../../interface/category.interface';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-category-form-modal',
  templateUrl: './category-form-modal.component.html',
  styleUrls: ['./category-form-modal.component.scss']
})
export class CategoryFormModalComponent implements OnInit {
  @Input() show!: Boolean
  @Output() showModal = new EventEmitter()

  typeList = []
  category: CategoryTitle = {}
  type!: String
  categoryName!: String

  constructor(
    private financeService: FinanceService,
    private swalModalService: SwalModalService,
  ) { }

  ngOnInit(): void {
    this.type = 'pay'
    this.typeList = [
      {label:'Receita', key: 'receive'},  
      {label: 'Despesa', key: 'pay'}
    ]
  }

  reciveCategoryName(value: String) {
    this.categoryName = value
  }

  reciveType(value: String) {
    this.type = value
  }

  save() {
    this.category.name = this.categoryName
    this.category.type = this.type
    this.financeService.createCategory(this.category).subscribe(
      success => {
        this.swalModalService.sucessModal('Concluído', 'Categoria cadastrada com sucesso!', false, 1500)
        this.category = {}
        this.close()
      },
      error => {}
    )
  }

  close() {
    this.show = false
    this.showModal.emit(this.show)
  }
}
