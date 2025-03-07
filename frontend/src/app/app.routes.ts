import { Routes, RouterModule } from '@angular/router';
import { ChosenRestaurant } from '../pages/Restaurant/ChosenRestaurant.component';
import { Action } from '../pages/decide/action.component';
import { Landing } from '../pages/landing/landing.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: Landing },  // Default route (landing page)
    // { path: '', component: Action },  // Action component
    { path: 'chosen-restaurant', component: ChosenRestaurant }, // ChosenRestaurant component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
