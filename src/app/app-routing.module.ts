import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: 'movie', component: MoviesComponent,
    children:[
      {
        path:'action', component:ActionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
