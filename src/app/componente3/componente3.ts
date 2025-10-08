import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Servicio1 } from '../servicio1';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente3.html',
  styleUrls: ['./componente3.css']
})
export class Componente3 implements OnInit {
  a = 3;
  b = 5;
  total$!: Observable<number>;

  constructor(private service: Servicio1) {}

  ngOnInit(): void {
    this.calculate(); // inicial
  }

  // 👇 Método que el template puede invocar
  calculate(): void {
    this.total$ = this.service.calculateTotal(this.a, this.b);
  }
}
