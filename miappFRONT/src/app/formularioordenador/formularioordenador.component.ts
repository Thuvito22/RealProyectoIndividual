import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularioordenador',
  imports: [FormsModule],
  templateUrl: './formularioordenador.component.html',
  styleUrl: './formularioordenador.component.scss'
})
export class FormularioordenadorComponent {

  ordenador: Ordenador = {} as Ordenador; 

  constructor(private ordenadorRestService: OrdenadorRestService, private router: Router) {}

  public insertar(): void {
    this.ordenadorRestService.insertar(this.ordenador).subscribe(
      () => {
        this.mostrarMensaje('Ordenador guardado con éxito');
        this.router.navigate(['/listaordenador']);
      },
      (error) => {
        if (error.status === 500) { 
          this.mostrarMensaje('Error: Número de serie duplicado. Ingrese un número de serie único.');
        } else {
          this.mostrarMensaje('Error: Ocurrió un problema al guardar el ordenador. Intente nuevamente.');
        }
      }
    );
  }

  private mostrarMensaje(mensaje: string): void {
    alert(mensaje);
  }
}
