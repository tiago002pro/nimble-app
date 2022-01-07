import { Activity } from "./kanban.activity.interface";

export interface CardInterface {
    id?: any,
    title?: String,
    description?: String,
    creationDate?: Date,
    activityList: Array<Activity>,
}