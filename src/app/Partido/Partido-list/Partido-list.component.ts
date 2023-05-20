import { Component, OnInit } from '@angular/core';
import { Partido } from '../Partido';
import { PartidoService } from '../Partido.service';

@Component({
  selector: 'app-Partido-list',
  templateUrl: './Partido-list.component.html',
  styleUrls: ['./Partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = [];
  constructor(private partidoService: PartidoService) { }
  //Variables para el detail
  selectedPartido!: Partido;
  selected: Boolean = false;
  golesPais: Array<{country: string, goals: number}> = [];

  onSelected(partido: Partido): void {
    this.selected = true;
    this.selectedPartido = partido;
  }
  //Funcion para obtner los partidos
  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      this.getGoles();
    });
  }

  //Punto 2 - Obtener goles por pais para ordenarlos
  getGoles(): void{

    //Mapa para guardar goles por seleccion
    const goles = new Map<string, number>();
    for(const partido of this.partidos){
      const country = partido.home_team.name;
      const goals = partido.home_team.goals;

      //Verificacion de las llaves
      if(goals !== undefined && !isNaN(goals)){
        if(goles.has(country)){
          goles.set(country, goles.get(country)! + goals);
        }
        else
        {
          goles.set(country, goals)
        }
      }
    }
    //Asignación de datos
    this.golesPais = Array.from(goles.entries()).map(([country, goals]) =>
    ({
      country, goals
    }));
    this.golesPais.sort((a, b) =>
      b.goals - a.goals
    );
  }

  ngOnInit() {
    this.getPartidos();
  }

}
