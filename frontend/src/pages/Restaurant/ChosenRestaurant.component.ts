import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Loading } from "../../components/loading/loading.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

interface Restaurant {
    name: string;
    foodpanda: string;
    location: string;
}


@Component({
    selector: 'app-chosen-restaurant',
    templateUrl: './ChosenRestaurant.component.html',
    imports: [CommonModule, Header, Footer, Loading],
})

export class ChosenRestaurant implements OnInit{
    loading: boolean = true;
    restaurants: Restaurant[] = [];
    chosenRestaurant: any = { 
        name: "Rina's Kitchenette",
        foodpanda: "https://www.apple.com",
        location: "www.apple.com",
    };

    ngOnInit(){
        this.fetchRestaurants();
    }

    fetchRestaurants(){
        this.loading = true;
        setTimeout(()=>{
            this.loading = false;
        }, 5000)
    }

    openFoodpanda(){
        console.log("Opening:", this.chosenRestaurant.foodpanda);
        window.open(this.chosenRestaurant.foodpanda, '_blank');
    }
    
    openMaps(){
        console.log("Opening:", this.chosenRestaurant.location);
        window.open(this.chosenRestaurant.location, '_blank');
    }
}