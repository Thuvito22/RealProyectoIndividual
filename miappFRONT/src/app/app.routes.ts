import { Routes } from '@angular/router';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';
import { ListaordenadorComponent } from './listaordenador/listaordenador.component';

export const routes: Routes = [

    { path: "listaordenadores", component: ListaordenadorComponent },
    { path: "formularioordenador", component: FormularioordenadorComponent },
    { path: "", component: ListaordenadorComponent }



];
