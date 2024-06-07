import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Features/Componentes/inicio/inicio.component';
import { FestivosComponent } from './Features/Componentes/festivos/festivos.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: "inicio", component: InicioComponent },
    { path: 'Festivos', component: FestivosComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }