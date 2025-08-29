import { Routes } from '@angular/router';
import {CarteleraComponente} from './pages/cartelera-componente/cartelera-componente';
import {MovieDetailsComponent} from './pages/movie-details-component/movie-details-component';

export const routes: Routes = [
  { path: '', component: CarteleraComponente },
  { path: 'peliculas/:id', component: MovieDetailsComponent },
];
