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
modelos = [
  'HP Spectre x360', 'HP Envy', 'HP Pavilion', 'HP Omen', 'HP EliteBook',
  'Dell XPS 13', 'Dell Inspiron 15', 'Dell Latitude 7420', 'Dell G5 15', 'Dell Alienware m15',
  'Lenovo ThinkPad X1 Carbon', 'Lenovo Yoga 9i', 'Lenovo Legion 5', 'Lenovo IdeaPad 3', 'Lenovo Chromebook Duet',
  'Asus ZenBook 14', 'Asus VivoBook S15', 'Asus ROG Zephyrus G14', 'Asus TUF Gaming A15', 'Asus Chromebook Flip',
  'Acer Swift 3', 'Acer Aspire 5', 'Acer Nitro 5', 'Acer Predator Helios 300', 'Acer Chromebook Spin 713'
];

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

  // Función para navegar a la lista de ordenadores
  public volver(): void {
    this.router.navigate(['/listaordenador']);  // Redirige a la página de lista de ordenadores
  }
}
