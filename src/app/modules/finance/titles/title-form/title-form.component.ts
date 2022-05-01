import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { SwalModalService } from 'src/app/service/swal-modal.service';
import { Person } from '../../../person/interface/person.interface';
import { PersonService } from '../../../person/service/person.service';
import { EnumTitleType } from '../enum/EnumTitleType';
import { CategoryTitle } from '../interface/category.interface';
import { FinanceParcel } from '../interface/parcel.interface';
import { FinanceTitle } from '../interface/title.interface';
import { FinanceService } from '../service/finance.service';


@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.scss']
})
export class TitleFormComponent implements OnInit {
  titleList: Array<FinanceTitle> = []
  title: FinanceTitle = {}
  parcels!: Array<FinanceParcel>
  rule
  type!: any
  category
  personList!: Array<Person>
  numberParcels!: Number
  firstDuoDate!: Date
  currentRoute!: any
  categoryList!: Array<CategoryTitle>
  typeList = [{label:'Receita', key: 'receive'},  {label: 'Despesa', key: 'pay'}]
  showModalCategoty: boolean = false

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private financeService: FinanceService, 
    private swalModalService: SwalModalService,
  ) { 
    this.rule = this.route.snapshot.params.rule
  }

  async ngOnInit() {
    this.type = this.rule 
    this.title.paid = false
    const searchPerson: String = this.title.type === EnumTitleType.PAY ? 'Fornecedores' : 'Clientes'
    this.personList = (await this.personService.getPersonListByRule('Fornecedores', 1, 100).toPromise().then(response => response)).content
    this.getAllcategories()
  }

  save() {
    this.parcels.forEach((parcel) => {
      this.createTitle(parcel)
    })
    this.financeService.createTitle(this.titleList).subscribe(
      success => {
        this.swalModalService.sucessModal('Concluído', 'Título cadastrado com sucesso!', false, 1500)
        this.back()
      },
      error => {
        this.swalModalService.errorModal('Erro', 'Verifique os dados e tente novamente!', false, 1500)
      }
    )
  }

  createTitle(parcel: FinanceParcel) {
    const title: FinanceTitle = {}
    title.docNumber = this.title.docNumber
    title.emissionDate = this.title.emissionDate
    title.value = this.title.value
    title.parcel = this.title.parcel
    title.parcelNumber = parcel.parcelNumber
    title.duoDate = parcel.parcelDuoDate
    title.historic = this.title.historic
    title.type = this.type
    title.payDay = this.title.payDay
    title.person = this.title.person
    title.category = this.title.category
    title.paid = this.title.paid

    this.titleList.push(title)
  }

  reciveDocNumber(value: any) {
    this.title.docNumber = value
  }

  reciveEmissionDate(value: any) {
    this.title.emissionDate = value
  }

  recivePerson(value: Person) {
    this.title.person = value
  }

  reciveCategory(value: CategoryTitle) {
    this.category = value
    this.title.category = value
  }

  reciveType(value: any) {
    this.type = value
    this.title.type = value
    this.getAllcategories()
  }

  reciveValue(value: any) {
    this.title.value = value
  }

  reciveHistoric(value: any) {
    this.title.historic = value
  }

  reciveNumberParcels(value: any) {
    this.numberParcels = value
    this.title.parcel = this.numberParcels > 1 ? true : false
  }

  reciveDueDate(value: Date) {
    this.firstDuoDate = value
  }

  showTableParcels() {
    if (this.firstDuoDate && this.numberParcels && this.title.value) {
      this.createParcels()
    }
    // console.log("this.firstDuoDate && this.numberParcels && this.title.value", this.firstDuoDate && this.numberParcels && this.title.value);
    console.log("this.firstDuoDate", this.firstDuoDate == undefined);
    console.log("this.numberParcels", this.numberParcels);
    console.log("this.title.value", this.title.value);
    
    return this.firstDuoDate != undefined && this.numberParcels != undefined && this.title.value != undefined
  }

  createParcels() {
    this.parcels = []
    for(let x = 0; x < this.numberParcels; x++) {
      const parcel: FinanceParcel = {}
      parcel.parcelNumber = x+1
      parcel.parcelValue = this.title.value

      if (x===0) {
        parcel.parcelDuoDate = moment(this.firstDuoDate, "YYYY-MM-DD").format();
      } else {
        parcel.parcelDuoDate = moment(this.firstDuoDate).add(x, 'month').format();
      }
      this.parcels.push(parcel)
    }
  }

  back() {
    history.back()  
  }

  async getAllcategories() {
    this.categoryList = await this.financeService.getAllCategoriesByType(this.type).toPromise().then((response) => response);
  }

  openModalCategory(value?) {
    this.showModalCategoty = value
    this.getAllcategories()
  }
}
