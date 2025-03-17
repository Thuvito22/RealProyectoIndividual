import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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

  // Definir los modelos por marca usando un objeto con claves específicas
  modelosPorMarca: { [marca: string]: string[] } = {
    HP: ['HP Spectre x360', 'HP Envy', 'HP Pavilion', 'HP Omen', 'HP EliteBook'],
    Dell: ['Dell XPS 13', 'Dell Inspiron 15', 'Dell Latitude 7420', 'Dell G5 15', 'Dell Alienware m15'],
    Lenovo: ['Lenovo ThinkPad X1 Carbon', 'Lenovo Yoga 9i', 'Lenovo Legion 5', 'Lenovo IdeaPad 3', 'Lenovo Chromebook Duet'],
    Asus: ['Asus ZenBook 14', 'Asus VivoBook S15', 'Asus ROG Zephyrus G14', 'Asus TUF Gaming A15', 'Asus Chromebook Flip'],
    Acer: ['Acer Swift 3', 'Acer Aspire 5', 'Acer Nitro 5', 'Acer Predator Helios 300', 'Acer Chromebook Spin 713']
  };

  // Array para los modelos que se mostrarán basado en la marca seleccionada
  modelos: string[] = [];

  successMessage: string | null = null;

  constructor(
    private readonly ordenadorRestService: OrdenadorRestService,
    private readonly router: Router
  ) {}

  // Método que se llama cuando se cambia la marca
  public onMarcaChange(): void {
    const marcaSeleccionada = this.ordenador.marca;

    // Filtrar los modelos correspondientes a la marca seleccionada
    if (marcaSeleccionada && this.modelosPorMarca[marcaSeleccionada]) {
      this.modelos = this.modelosPorMarca[marcaSeleccionada];
    } else {
      this.modelos = [];  // Si no hay marca seleccionada, no mostrar modelos
    }
  }

  public insertar(): void {
    if (!this.ordenador.numserie || this.ordenador.numserie < 0) {
      Swal.fire("El campo 'Número de Serie' es obligatorio y debe ser mayor o igual a cero.");
      return;
    }

    if (this.ordenador.precio < 0) {
      Swal.fire("El campo 'Precio' debe ser mayor o igual a cero");
      return;
    }

    this.ordenadorRestService.insertar(this.ordenador).subscribe({
      next: (datos) => {
        this.successMessage = 'Ordenador guardado con éxito';
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

  public volver(): void {
    this.router.navigate(['/listaordenador']);
  }
}
