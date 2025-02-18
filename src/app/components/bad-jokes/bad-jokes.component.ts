import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-bad-jokes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bad-jokes.component.html',
  styleUrls: ['./bad-jokes.component.css'],
  providers: [JokesService]
})
export class BadJokesComponent {
  joke: string = '';
  loading: boolean = false;

  constructor(private jokesService: JokesService) {}

  getJoke() {
    this.loading = true;
    this.jokesService.getRandomJoke().subscribe(
      joke => {
        this.joke = joke;
        this.loading = false;
      },
      error => {
        console.error('Error al obtener el chiste', error);
        this.joke = 'No hay chistes disponibles... ¡Eso es un chiste en sí mismo!';
        this.loading = false;
      }
    );
  }
}
