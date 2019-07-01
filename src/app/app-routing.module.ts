import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoDadosComponent } from './juego-dados/juego-dados.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: 'juego-dados',
    component: JuegoDadosComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
