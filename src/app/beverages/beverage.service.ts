import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getBeverages(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/beverage`).toPromise();
        const beverages = resp.json();
        return beverages;
    }

    getBeveragesById(beveragesId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/beverage/id/${beveragesId}`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    addBeverages(beverages): Promise<Object> {
        return this.http.post(`${this.apiUrl}/beverage`, beverages)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    deleteBeverages(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/beverage/id/${id}`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    updateBeverage(id, beverage): Promise<Object> {
        return this.http.put(`${this.apiUrl}/beverage/id/${id}`, beverage)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

}
