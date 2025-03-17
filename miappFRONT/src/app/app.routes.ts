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