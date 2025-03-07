import { Component } from "@angular/core";
import { Loading } from "../../components/loading/loading.component";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

@Component({
    selector: 'app-chosen-restaurant',
    templateUrl: './ChosenRestaurant.component.html',
    imports: [Header, Footer, Loading],
})

export class ChosenRestaurant{}
