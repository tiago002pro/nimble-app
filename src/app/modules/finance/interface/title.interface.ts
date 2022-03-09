import { Person } from "../../person/interface/person.interface";

export interface FinanceTitle {
    docuNumber?: String,
    emissionDate?: Date,
    value?: DoubleRange,
    parcel?: Boolean,
    parcelNumber?: Number,
    duoDate?: Date,
    historic?: String,
    type?: String,
    status?: String,
    payDay?: Date,
    person?: Person,
    category?: any,
}