import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Loading } from "../../components/loading/loading.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { RestaurantService } from "./restaurant.service";

interface Restaurant {
    name: string;
    order: string;
    location: string;
}

@Component({
    selector: 'app-chosen-restaurant',
    templateUrl: './ChosenRestaurant.component.html',
    imports: [CommonModule, Header, Footer, Loading],
})

export class ChosenRestaurant implements OnInit {
    loading: boolean = true;
    restaurants: Restaurant[] = [];
    chosenRestaurant: Restaurant | null = null;

    constructor(private restaurantService: RestaurantService) {}

    ngOnInit() {
        this.fetchRestaurants();
    }

    fetchRestaurants() {
        this.loading = true;
        setTimeout(() => {
            this.restaurantService.getRestaurant().subscribe((restaurants) => {
                this.restaurants = restaurants;

                if (this.restaurants.length > 0) {
                    const randomIndex = Math.floor(Math.random() * this.restaurants.length);
                    this.chosenRestaurant = this.restaurants[randomIndex];
                    console.log("Chosen Restaurant:", this.chosenRestaurant);
                }
                
                this.loading = false;
            }, (error) => {
                console.error("Error fetching restaurants:", error);
                this.loading = false;
            });
        }, 5000);
    }

    openFoodpanda() {
        if (this.chosenRestaurant) {
            console.log("Opening:", this.chosenRestaurant.order);
            window.open(this.chosenRestaurant.order, '_blank');
        }
    }

    openMaps() {
        if (this.chosenRestaurant) {
            console.log("Opening:", this.chosenRestaurant.location);
            window.open(this.chosenRestaurant.location, '_blank');
        }
    }
}
