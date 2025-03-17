import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioordenadorComponent } from './formularioordenador/formularioordenador.component';
import { ListaordenadorComponent } from './listaordenador/listaordenador.component';

const routes: Routes = [
  { path: 'listaordenador', component: ListaordenadorComponent },
  { path: 'formularioordenador', component: FormularioordenadorComponent },
  { path: '', redirectTo: 'listaordenador', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioordenadorComponent,
    ListaordenadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }