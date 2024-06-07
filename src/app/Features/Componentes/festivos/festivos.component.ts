import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../Shared/Modulos/referencias-material.module (2)';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FestivoService } from '../../Servicios/festivo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-festivos',
  standalone: true,
  imports: [ReferenciasMaterialModule, FormsModule, NgxDatatableModule],
  templateUrl: './festivos.component.html',
  styleUrl: './festivos.component.css'
})
export class FestivosComponent {
  

  public FechaBusqueda: Date | null = null;
  public festivos: Festivo[] = [];
  public columnas = [
    { name: "Día Festivo", prop: "nombre" },
    { name: "Tipo de Festivo", prop: "idtipo" }
  ];

  constructor(private festivoService: FestivoService ,
    private festivoDialogo: MatDialog) {}

  buscar() {
    if (this.FechaBusqueda) {
      const ano = this.FechaBusqueda.getFullYear();
      const mes = this.FechaBusqueda.getMonth() + 1;
      const dia = this.FechaBusqueda.getDate();
      
      this.festivoService.buscar(ano, mes, dia).subscribe(
        resultado => {
          console.log('Resultado:', resultado);
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }

  limpiarFechaBusqueda() {
    this.FechaBusqueda = null;
  }
}