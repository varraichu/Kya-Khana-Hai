import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from '../pages/landing/landing.component';
import { Action } from '../pages/action/action.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing, Action],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
