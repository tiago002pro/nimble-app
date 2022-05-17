import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { AccountService } from '../../../accounts/service/account.service';
import { FinanceTitle } from '../../interface/title.interface';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-modal-paid-title',
  templateUrl: './modal-paid-title.component.html',
  styleUrls: ['./modal-paid-title.component.scss']
})
export class ModalPaidTitleComponent implements OnInit {
  @Input() show!: Boolean
  @Input() titles!: Array<FinanceTitle>
  @Output() showModal = new EventEmitter()
  accountList = []
  accountId
  paidDate

  constructor(
    private financeService: FinanceService,
    private swalModalService: SwalModalService,
    private accountService: AccountService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.accountList = (await this.accountService.getAccountList(0, 100).toPromise().then(response => response)).content
  }

  recivePaidDate(value) {
    this.paidDate = value
  }

  reciveAccount(value: String) {
    this.accountId = value
  }

  save() {
    this.titles.forEach(title => {
      title.account = this.accountId
      title.payDay = this.paidDate
      title.paid = true
      title.status = "PAID"
    });

    this.financeService.paidTitle(this.titles).subscribe(
      success => {
        this.swalModalService.sucessModal('Concluído', 'Título cadastrado com sucesso!', false, 1500)
        this.close()
      },
      error => {
        this.swalModalService.errorModal('Erro', 'Verifique os dados e tente novamente!', false, 1500)
      }
    )
  }

  close() {
    this.show = false
    this.showModal.emit(this.show)
  }
}