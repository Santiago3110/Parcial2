import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoComponent } from './Partido.component';
import { PartidoListComponent } from './Partido-list/Partido-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PartidoListComponent],
  declarations: [PartidoListComponent]
})
export class PartidoModule { }
