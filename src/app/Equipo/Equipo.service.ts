import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';
import { Equipo } from './Equipo';
import { Grupo } from '../Grupo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {
  private apiUrl2: string = environment.baseUrl2;

constructor(private http: HttpClient) { }
  getGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.apiUrl2);
  }
}
