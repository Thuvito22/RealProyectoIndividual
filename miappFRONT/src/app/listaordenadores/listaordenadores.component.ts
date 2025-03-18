import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importamos CommonModule
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Ordenador } from '../ordenador';

@Component({
  selector: 'app-listaordenadores',
  templateUrl: './listaordenadores.component.html',
  styleUrls: ['./listaordenadores.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Importamos CommonModule y RouterModule
})
export class ListaordenadoresComponent {
  listaOrdenadores: Ordenador[] = [];
  campoSeleccionado: string = '';
  direccionSeleccionada: 'ASC' | 'DESC' = 'ASC';

  constructor(private ordenadorRestService: OrdenadorRestService) {
    this.ordenadorRestService.buscarTodos().subscribe((datos) => {
      this.listaOrdenadores = datos;
    });
  }

  public borrar(numserie: number) {
    this.ordenadorRestService.borrar(numserie).subscribe(() => {
      this.ordenadorRestService.buscarTodos().subscribe((datos) => {
        this.listaOrdenadores = datos;
      });
    });
  }

  public buscarOrdenados(campo: string) {
    if (this.campoSeleccionado === campo) {
      this.direccionSeleccionada = this.direccionSeleccionada === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.campoSeleccionado = campo;
      this.direccionSeleccionada = 'ASC';
    }

    this.ordenadorRestService.buscarOrdenados(campo, this.direccionSeleccionada).subscribe((data) => {
      this.listaOrdenadores = data;
    });
  }

  confirmarBorrado(numserie: number) {
    Swal.fire({
      title: '¿Está seguro de que desea borrar este ordenador?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrar(numserie);
        Swal.fire('Borrado!', 'El ordenador ha sido borrado.', 'success');
      }
    });
  }

  trackOrdenador(index: number, ordenador: Ordenador): number {
    return ordenador.numserie;
  }
}
