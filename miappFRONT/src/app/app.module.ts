import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importamos Routes
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaordenadoresComponent } from './listaordenadores/listaordenadores.component';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';

// Definimos las rutas aquí
const routes: Routes = [
{ path: 'listaordenadores', component: ListaordenadoresComponent },
{ path: 'formularioordenador', component: FormularioordenadorComponent },
{ path: '', redirectTo: '/listaordenadores', pathMatch: 'full' }
];

@NgModule({
declarations: [
    AppComponent,
//FormularioordenadorComponent  eliminamos la declaración ya que es standalone
],
imports: [
    BrowserModule,
    HttpClientModule,
    ListaordenadoresComponent, // Aqui importamos los componentes que son standalone
    FormularioordenadorComponent, // Aqui importamos los componentes que son standalone
    RouterModule.forRoot(routes) // Importamos y configuramos las rutas aquí
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
