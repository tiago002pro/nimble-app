import { ListCard } from "./kanban.listcard.interface";

export interface Board {
    id?: any,
    name?: String,
    listCardList: Array<ListCard>,
}