import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Equipo';
import { EquipoService } from '../Equipo.service';
import { Grupo } from 'src/app/Grupo';

@Component({
  selector: 'app-Equipo-List',
  templateUrl: './Equipo-List.component.html',
  styleUrls: ['./Equipo-List.component.css']
})
export class EquipoListComponent implements OnInit {
  grupos: Array<Grupo> = [];
  equipos: Array<Equipo> = [];

  constructor(private equipoService: EquipoService) { }
  getGrupos(): void {
    this.equipoService.getGrupos().subscribe((grupos) => {
      this.grupos = grupos;

    });
  }

  ngOnInit() {
    this.getGrupos();
  }

}
