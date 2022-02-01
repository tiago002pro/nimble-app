import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "../interface/kanban.card.interface";
import { Kanban } from "../interface/kanban.interface";
import { ListCard } from "../interface/kanban.listcard.interface";

@Injectable({
    providedIn: 'root'
})
export class KanbanSevice {
    url: String = 'https://nimble-back.herokuapp.com' 
    // url: String = 'http://localhost:8080'

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

    getCardByListCardId() {
        return this.http.get<Array<Card>>((this.url) + '/api/card/listCard')
    }

    getAllCards() {
        return this.http.get<Array<Card>>((this.url) + '/api/card/all')
    }

    getListByIndex(index: Number) {
        return this.http.get<ListCard>((this.url) + '/api/listCard/' + (index))
    }

    getAllListCard() {
        return this.http.get<Array<ListCard>>((this.url) + '/api/listCard/all')
    }

    movList(previousIndex: number, currentIndex: number) {
        return this.http.put<ListCard>((this.url) + `/api/listCard/change-index-list?previous=${previousIndex +1}`, currentIndex +1)
    }

    newListCard(name: String) {
        return this.http.post<Array<ListCard>>((this.url) + `/api/listCard/newlist`, name)
    }

    deleteListCard(index: number) {
        return this.http.delete<Array<ListCard>>((this.url) + `/api/listCard/delete?index=${index}`)
    }
}