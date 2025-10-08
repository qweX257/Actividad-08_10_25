import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './componente1/componente1';
import { Componente2 } from './componente2/componente2';
import { Componente3 } from './componente3/componente3';
import { componente4 } from './componente4/componente4';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, withHashLocation} from '@angular/router';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Componente1, Componente2, Componente3, componente4],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoRouting');
}

bootstrapApplication(App, {
  providers: [provideRouter(routes, withHashLocation())]
});
