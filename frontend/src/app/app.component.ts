import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from '../pages/landing/landing.component';
import { Action } from '../pages/decide/action.component';
import { Loading } from '../components/loading/loading.component';
import { ChosenRestaurant } from '../pages/Restaurant/ChosenRestaurant.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing, Action, Loading, ChosenRestaurant],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
