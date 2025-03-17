import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // RouterModule y Routes
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Importa los componentes standalone directamente
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';
import { ListaordenadorComponent } from './listaordenador/listaordenador.component';

// Define las rutas para los componentes
export const routes: Routes = [
  { path: 'listaordenador', component: ListaordenadorComponent },
  { path: 'formularioordenador', component: FormularioordenadorComponent },
  { path: '', redirectTo: 'listaordenador', pathMatch: 'full' }
];
///////////////////// PROBLEMAS CON ESTO, HAY QUE QUITAR  EL STANDALONE MAS ADELANTE 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Solo RouterModule para rutas
    FormularioordenadorComponent, // Componente standalone importado aquí
    ListaordenadorComponent,      // Componente standalone importado aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
