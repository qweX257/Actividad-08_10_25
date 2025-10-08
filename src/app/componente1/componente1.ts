import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})
export class Componente1 {

  fecha: Date = new Date();
  fechaDiciembre: Date = new Date(2025, 11, 31);
  faltante: number = this.fechaDiciembre.getTime() - this.fecha.getTime();
  diasRestantes: number = Math.ceil(this.faltante / (1000 * 60 * 60 * 24));
}
