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


  public FechaBusqueda: any = new Date();
  public esFestivo: boolean | null = null;

  constructor(private festivoService: FestivoService) { }

  buscar() {

    let fechaConvert = this.FechaBusqueda;
    const [year, month, day] = fechaConvert.split('-').map(Number);
    const fecha = new Date(Date.UTC(year, month - 1, day));

    // Comprobamos si es una fecha válida
    if (!isNaN(fecha.getTime())) {
      const ano = fecha.getUTCFullYear();
      const mes = fecha.getUTCMonth() + 1;
      const dia = fecha.getUTCDate();

      this.festivoService.validarFecha(ano, mes, dia).subscribe(
        (response: any) => {
          window.alert(response);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      console.error("La fecha proporcionada no es válida.");
    }
  }

  limpiarFechaBusqueda() {
    this.FechaBusqueda = null;
    this.esFestivo = null;
  }
}