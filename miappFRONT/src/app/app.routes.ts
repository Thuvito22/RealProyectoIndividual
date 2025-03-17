import { RouterModule, Routes } from '@angular/router';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';
import { ListaordenadorComponent } from './listaordenador/listaordenador.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'listaordenador', component: ListaordenadorComponent },
  { path: 'formularioordenador', component: FormularioordenadorComponent },
  { path: '', redirectTo: 'listaordenador', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent, // Mantengo solo el AppComponent aqui
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        FormularioordenadorComponent, // Importa directamente los componentes standalone para que
        ListaordenadorComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
