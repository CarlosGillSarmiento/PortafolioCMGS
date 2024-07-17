import { Component } from '@angular/core';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {
  username = 'Carlos Gill';
  msj (){
    alert('Navegar a Experiencia');
  }
}
