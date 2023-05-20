import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './Equipo.component';
import { EquipoListComponent } from './Equipo-List/Equipo-List.component';
import { EquipoDetailComponent } from './Equipo-detail/Equipo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EquipoListComponent],
  declarations: [EquipoListComponent, EquipoDetailComponent]
})
export class EquipoModule { }
