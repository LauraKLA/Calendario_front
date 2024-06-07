import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './Shared/Modulos/referencias-material.module (2)';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReferenciasMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendario-festivo';
}


