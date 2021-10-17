import { Card } from "./card.model";

export class Column {
    constructor(
        public name: String, 
        public cards: Card[]
    ) {}
}