import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculadoraImcComponent} from "./calculadora-imc/calculadora-imc.component";

const routes: Routes = [
  {
    path: '',
    component: CalculadoraImcComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
