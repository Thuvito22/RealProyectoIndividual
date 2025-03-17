import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de que CommonModule esté importado
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formularioordenador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularioordenador.component.html',
  styleUrls: ['./formularioordenador.component.scss']
})
export class FormularioordenadorComponent {
  ordenador: Ordenador = {} as Ordenador;
  marcas = ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer'];
  modelos = ['Modelo A', 'Modelo B', 'Modelo C', 'Modelo D', 'Modelo E'];
  
  // Agrega esta propiedad para almacenar el mensaje de éxito
  successMessage: string | null = null; // Definir successMessage

  constructor(
    private readonly ordenadorRestService: OrdenadorRestService,
    private readonly router: Router
  ) {}

  public insertar(): void {
    if (this.ordenador.numserie < 0) {
      Swal.fire("El campo 'Número de Serie' debe ser mayor o igual a cero.");
      return;
    }
    if (this.ordenador.precio < 0) {
      Swal.fire("El campo 'Precio' debe ser mayor o igual a cero");
      return;
    }

    this.ordenadorRestService.insertar(this.ordenador).subscribe({
      next: (datos) => {
        this.successMessage = 'Ordenador guardado con éxito'; // Asigna el mensaje de éxito
        Swal.fire({
          title: 'Éxito',
          text: this.successMessage,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/listaordenador']);
        });
      },
      error: (error) => {
        if (error.status === 500) {
          Swal.fire({
            title: 'Error',
            text: 'Número de serie duplicado. Por favor, ingrese un número de serie único.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al guardar el ordenador. Por favor, pruebe nuevamente.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    });
  }
}
