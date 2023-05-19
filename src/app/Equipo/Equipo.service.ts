import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';
import { Equipo } from './Equipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl: string = environment.baseUrl2;

constructor(private http: HttpClient) { }
  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }
}
