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

@NgModule({
  declarations: [
    AppComponent // Solo declara AppComponent aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Solo RouterModule para rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
