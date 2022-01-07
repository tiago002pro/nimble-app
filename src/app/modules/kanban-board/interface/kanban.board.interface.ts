import { ListCard } from "./kanban.listcard.interface";

export interface BoardInterface {
    id?: any,
    name?: String,
    listCardList: Array<ListCard>,
}