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

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }

  ngOnInit() {
    this.getPartidos();
  }

}
