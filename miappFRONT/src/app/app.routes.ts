import { Routes } from '@angular/router';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';
import { ListaordenadoresComponent } from './listaordenadores/listaordenadores.component';

export const routes: Routes = [
  { path: 'listaordenadores', component: ListaordenadoresComponent },
  { path: 'formularioordenador', component: FormularioordenadorComponent },
  { path: '', redirectTo: 'listaordenadores', pathMatch: 'full' }
];
