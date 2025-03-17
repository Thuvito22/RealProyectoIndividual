import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Asegúrate de importar RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true, // Establece el componente como standalone
  imports: [RouterOutlet], // Importa RouterOutlet para el enrutamiento
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Cambié `styleUrl` a `styleUrls`
})
export class AppComponent {
  title = 'miappFRONT';
}
