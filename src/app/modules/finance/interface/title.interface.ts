import { Account } from './account.interface';
import { Person } from './../../person/interface/person.interface';
import { SubCategoryTitle } from './sub-category.interface';

export interface FinanceTitle {
    id?: number,
    docNumber?: String,
    emissionDate?: Date,
    value?: number,
    parcelNumber?: number,
    parcel?: String,
    duoDate?: Date,
    historic?: String,
    type?: String,
    status?: String,
    payDay?: Date,
    paid?: boolean,
    person?: Person,
    subCategory?: SubCategoryTitle,
    account?: Account,
}