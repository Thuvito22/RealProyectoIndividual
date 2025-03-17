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
    // Verificar si el número de serie es válido
    if (!this.ordenador.numserie || this.ordenador.numserie < 0) {
      Swal.fire("El campo 'Número de Serie' es obligatorio y debe ser mayor o igual a cero.");
      return;
    }

    // Verificar si el precio es válido
    if (this.ordenador.precio < 0) {
      Swal.fire("El campo 'Precio' debe ser mayor o igual a cero");
      return;
    }

    // Llamada al servicio para guardar el ordenador
    this.ordenadorRestService.insertar(this.ordenador).subscribe({
      next: (datos) => {
        // Mostrar mensaje de éxito
        this.successMessage = 'Ordenador guardado con éxito';
        Swal.fire({
          title: 'Éxito',
          text: this.successMessage,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirigir a la lista de ordenadores
          this.router.navigate(['/listaordenador']);
        });
      },
      error: (error) => {
        // Si hay un error de servidor (500), mostrar mensaje de duplicado
        if (error.status === 500) {
          Swal.fire({
            title: 'Error',
            text: 'Número de serie duplicado. Por favor, ingrese un número de serie único.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          // Si es otro error, mostrar mensaje genérico
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
