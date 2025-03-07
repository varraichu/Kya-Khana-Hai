import { Component } from "@angular/core";
import { Header } from "../header/header.component";
import { Footer } from "../footer/footer.component";

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    imports: [Header, Footer],
})


export class Loading{}