import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { Account } from '../interface/account.interface';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  account: Account = {}
  modality = ["", "PF", "PJ"]
  type = ["", "Corrente", "Poupança"]

  constructor(
    private accountService: AccountService,
    private swalModalService: SwalModalService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.account = await this.accountService.getById(this.route.snapshot.params.id).toPromise().then(response => response)
    }
  }

  reciveAccountName(value: String) {
    this.account.accountName = value
  }

  reciveHolder(value: String) {
    this.account.holder = value
  }

  reciveHolderDocument(value: String) {
    this.account.holderDocument = value
  }

  reciveLimit(value: any) {
    this.account.limitValue = value
  }

  reciveModality(value: String) {
    this.account.modality = value
  }

  reciveBank(value: String) {
    this.account.bank = value
  }

  reciveType(value: String) {
    this.account.type = value
  }

  reciveAgency(value: String) {
    this.account.agency = value
  }

  reciveAgencyDv(value: String) {
    this.account.agencyDv = value
  }

  reciveAccount(value: String) {
    this.account.account = value
  }

  reciveAccountDv(value: String) {
    this.account.accountDv = value
  }

  reciveBalance(value: any) {
    this.account.balance = value
  }

  reciveActive(value: Boolean) {
    this.account.active = value
  }

  save() {
    this.account.active = true
    this.accountService.createAccount(this.account).subscribe(
      success => {
        this.swalModalService.sucessModal('Concluído', 'Conta cadastrada com sucesso!', false, 1500)
        history.back()
      },
      error => {
        this.swalModalService.errorModal('Erro', 'Verifique os dados e tente novamente!', false, 1500)
      }
    )
  }
}
