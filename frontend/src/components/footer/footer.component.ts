import { Component, Input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
    selector: 'app-footer',
    imports: [RouterLink, RouterOutlet],
    templateUrl: './footer.component.html',
})

export class Footer{
    @Input() colorClass: string = 'text-[#A6F306]';

    goToLinkedin(){
        window.open('https://www.linkedin.com/in/qasim-anwar/', '_blank')
    }
}