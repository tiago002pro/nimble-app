import { Card } from "./kanban.card.interface";

export interface ListCard {
    id?: any,
    name?: String,
    cardList: Array<Card>,
}