import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Kanban } from "../interface/kanban.interface";

@Injectable({
    providedIn: 'root'
})
export class KanbanSevice {
    url: String = 'http://localhost:8080'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(
        private http: HttpClient,
    ) {}

    getKanbanBoardById() {
        return this.http.get<Kanban>((this.url) + '/api/kanban/id')
    }
}