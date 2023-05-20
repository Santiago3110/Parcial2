import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';
import { Equipo } from './Equipo';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {
  private apiUrl: string = environment.baseUrl2;
  private equipos: Equipo[] = [];

constructor(private http: HttpClient) { }
  getGrupos(): any {
    return this.http.get<any>(this.apiUrl);
  }
}
