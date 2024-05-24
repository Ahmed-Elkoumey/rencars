import { Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CarsGalleryComponent } from './cars-gallery/cars-gallery.component';

export const routes: Routes = [{
    path: '', component: WrapperComponent
},
{ path: 'cars', component: CarsGalleryComponent }

];
