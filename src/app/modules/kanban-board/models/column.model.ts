import { Card } from "./tasks.model";

export class Column {
    constructor(
        public name: String, 
        public cards: Card[]
    ) {}
}