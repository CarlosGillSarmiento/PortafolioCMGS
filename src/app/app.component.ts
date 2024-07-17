import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PresentacionComponent,
    PerfilComponent,
    LenguajesComponent,
    ExperienciaComponent,
    FooterComponent],
  templateUrl: './app.component.html' , 
  styleUrl: './app.component.css'
})
export class AppComponent {
  logueado=false;
}
