import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../Ambientes/environment';
import { Festivo } from '../../core/entidades/Festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivo/`;
  }

  public buscar(ano: number, mes: number, dia: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}validar/${ano}/${mes}/${dia}`);
    
  }
}
