import { Board } from "./board.model";

export class Kanban {
    constructor(
        public name: string,
        public boards: Board[]
    ) {}
}