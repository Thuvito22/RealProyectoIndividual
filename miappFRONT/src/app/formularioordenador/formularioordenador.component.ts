import { Component, OnInit } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importamos Router

@Component({
  selector: 'app-formularioordenador',
  templateUrl: './formularioordenador.component.html',
  styleUrls: ['./formularioordenador.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class FormularioordenadorComponent implements OnInit {
  ordenador: Ordenador = new Ordenador(0, '', '', 0);
  marcas: string[] = [];
  modelos: string[] = [];

  constructor(
    private ordenadorRestService: OrdenadorRestService,
    private router: Router // Inyectamos Router
  ) {}

  ngOnInit(): void {
    this.marcas = ['HP', 'Lenovo', 'Dell', 'Apple'];
    this.onMarcaChange();
  }

  onMarcaChange() {
    if (this.ordenador.marca === 'HP') {
      this.modelos = ['Pavilion', 'Envy', 'Spectre'];
    } else if (this.ordenador.marca === 'Lenovo') {
      this.modelos = ['IdeaPad', 'ThinkPad', 'Yoga'];
    } else if (this.ordenador.marca === 'Dell') {
      this.modelos = ['XPS', 'Inspiron', 'Alienware'];
    } else if (this.ordenador.marca === 'Apple') {
      this.modelos = ['MacBook', 'iMac', 'MacMini'];
    } else {
      this.modelos = [];
    }
  }

  insertar() {
    this.ordenadorRestService.insertar(this.ordenador).subscribe(
      () => {
        console.log('Ordenador insertado con éxito');
        this.router.navigate(['/listaordenadores']); // Redirigimos a la lista
      },
      (error) => {
        console.error('Error al insertar el ordenador', error);
      }
    );
  }
    volver() {
    this.router.navigate(['/listaordenadores']);
  }
}
