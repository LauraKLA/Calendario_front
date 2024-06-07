import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../Ambientes/environment';
import { Festivo } from '../../core/entidades/Festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081/festivo/'; 
  }
  
  public validarFecha(ano: number, mes: number, dia: number): any {
    const urlValidar = `${this.url}validar/${ano}/${mes}/${dia}`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'text/plain' }); 
    return this.http.get(urlValidar, { headers: headers, responseType: 'text' })
    ;
    
  }
}