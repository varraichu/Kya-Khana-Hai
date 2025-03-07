import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface Restaurant {
    name: string;
    order: string;
    location: string;
}


@Injectable({
    providedIn: 'root',
})

export class RestaurantService{
    private apiUrl = 'http://127.0.0.1:5000/api';

    constructor(private http: HttpClient) {}

    getRestaurant(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${this.apiUrl}/get-restaurants`);
    }


}