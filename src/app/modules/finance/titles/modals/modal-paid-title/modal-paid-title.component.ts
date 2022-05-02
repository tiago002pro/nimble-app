import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { AccountService } from '../../../accounts/service/account.service';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-modal-paid-title',
  templateUrl: './modal-paid-title.component.html',
  styleUrls: ['./modal-paid-title.component.scss']
})
export class ModalPaidTitleComponent implements OnInit {
  @Input() show!: Boolean
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
    console.log("paidDate", this.paidDate);
    console.log("accountId", this.accountId);
    
    // this.financeService.createCategory(this.category).subscribe(
    //   success => {
    //     this.swalModalService.sucessModal('Concluído', 'Categoria cadastrada com sucesso!', false, 1500)
    //     this.category = {}
    //     this.close()
    //   },
    //   error => {}
    // )
  }

  close() {
    this.show = false
    this.showModal.emit(this.show)
  }
}
