import { Activity } from "./kanban.activity.interface";
import { ListCard } from "./kanban.listcard.interface";

export interface Card {
    id?: any,
    title?: String,
    description?: String,
    creationDate?: Date,
    activityList: Array<Activity>,
    listCard?: ListCard,
    indexCard?: Number,
}