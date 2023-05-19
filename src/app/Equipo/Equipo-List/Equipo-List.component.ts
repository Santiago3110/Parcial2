import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Equipo';
import { EquipoService } from '../Equipo.service';

@Component({
  selector: 'app-Equipo-List',
  templateUrl: './Equipo-List.component.html',
  styleUrls: ['./Equipo-List.component.css']
})
export class EquipoListComponent implements OnInit {
  equipos: Array<Equipo> = [];
  constructor(private equipoService: EquipoService) { }
  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
    });
  }

  ngOnInit() {
    this.getEquipos();
  }

}
