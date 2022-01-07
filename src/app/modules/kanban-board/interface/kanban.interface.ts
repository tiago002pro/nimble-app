import { BoardInterface } from "./kanban.board.interface";

export interface KanbanInterface {
    id?: any,
    name?: String,
    boardList: Array<BoardInterface>,
}