import { Task } from "./tasks.model";

export class Column {
    constructor(
        public name: String, 
        public tasks: Task[]
    ) {}
}