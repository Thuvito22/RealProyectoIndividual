import { RouterModule, Routes } from '@angular/router';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';
import { ListaordenadorComponent } from './listaordenador/listaordenador.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importa AppComponent correctamente

export const routes: Routes = [
  { path: 'listaordenador', component: ListaordenadorComponent },
  { path: 'formularioordenador', component: FormularioordenadorComponent },
  { path: '', redirectTo: 'listaordenador', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // No declares AppComponent aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FormularioordenadorComponent, // Importa los componentes standalone
    ListaordenadorComponent,
    AppComponent // Agrega AppComponent aquí en imports
  ],
  providers: [],
  bootstrap: [AppComponent] // Lo mantienes en bootstrap
})
export class AppModule { }
