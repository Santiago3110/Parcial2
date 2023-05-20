import { Component, Input,OnInit } from '@angular/core';
import { Equipo } from '../Equipo';

@Component({
  selector: 'app-Equipo-detail',
  templateUrl: './Equipo-detail.component.html',
  styleUrls: ['./Equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {
  @Input() equipoDetail!: Equipo;
  constructor() { }

  ngOnInit() {
  }

}
