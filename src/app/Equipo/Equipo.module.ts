import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './Equipo.component';
import { EquipoListComponent } from './Equipo-List/Equipo-List.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EquipoListComponent],
  declarations: [EquipoListComponent]
})
export class EquipoModule { }
