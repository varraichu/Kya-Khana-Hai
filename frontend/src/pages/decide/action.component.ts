import { Component } from "@angular/core";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

@Component({
    selector: 'app-action',
    standalone: true,
    templateUrl: './action.component.html',
    imports: [CommonModule, RouterModule, Header, Footer],
})
export class Action {
    constructor(private router: Router) { }

    goToChosenRestaurant() {
        console.log("Navigation attempt..."); // Debugging log
        this.router.navigate(['/chosen-restaurant']).then(success => {
            console.log("Navigation Success: ", success);
        }).catch(err => {
            console.error("Navigation Failed: ", err);
        });
    }
    
}
