import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Servicio1 {
  // Simula cálculo remoto (puede ser una llamada HTTP)
  calculateTotal(a: number, b: number): Observable<number> {
    const total = a * b;
    // delay opcional para simular latencia
    return of(total).pipe(delay(200));
  }
}
