import { Component} from "@angular/core";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    imports: [Header, Footer],
})

export class Landing{}

