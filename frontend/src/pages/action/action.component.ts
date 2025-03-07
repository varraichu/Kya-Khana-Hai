import { Component} from "@angular/core";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";


@Component({
    selector: 'app-action',
    templateUrl: './action.component.html',
    imports: [Header, Footer],
})

export class Action{}

