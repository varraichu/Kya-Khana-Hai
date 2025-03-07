import { Routes, RouterModule } from '@angular/router';
import { ChosenRestaurant } from '../pages/Restaurant/ChosenRestaurant.component';
import { Landing } from '../pages/landing/landing.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'chosen-restaurant', component: ChosenRestaurant },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
