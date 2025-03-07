import { Component, Input  } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports:[RouterLink, RouterOutlet],

})

export class Header{
    @Input() colorClass: string = 'text-[#A6F306]';
};