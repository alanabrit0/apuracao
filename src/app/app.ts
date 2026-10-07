import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Resultado } from './pages/resultado/resultado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('apuracao');
}