import { Board } from "./kanban.board.interface";

export interface Kanban {
    id?: any,
    name?: String,
    boardList: Array<Board>,
}