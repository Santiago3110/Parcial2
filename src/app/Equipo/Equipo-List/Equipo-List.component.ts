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
  equipos: Array<Equipo> = [];
  grupos: Array<Grupo> = [];
  selectedEquipo!: Equipo;
  selected: Boolean = false;

  constructor(private equipoService: EquipoService) { }
  getEquipos(): void {
    this.equipoService.getGrupos().subscribe((grupos: {groups: any;}
      ) => {
      let variable: Grupo[] = [];
      grupos.groups.forEach((grupo: Grupo) => {
        grupo.teams.forEach((equipo)=>
        {
          this.equipos.push(equipo);
        });
        variable.push(grupo);
      })
      ;
      this.grupos = variable;
    });
  }

  onSelected(equipo: Equipo): void {
    this.selected = true;
    this.selectedEquipo = equipo;
  }

  ngOnInit() {
    this.getEquipos();
  }

}
