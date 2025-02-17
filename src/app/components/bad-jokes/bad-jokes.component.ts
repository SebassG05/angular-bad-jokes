import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bad-jokes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bad-jokes.component.html',
  styleUrls: ['./bad-jokes.component.css']
})
export class BadJokesComponent {
  joke: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  getJoke() {
    this.loading = true;
    this.http.get<any>('https://v2.jokeapi.dev/joke/Pun?type=single')
      .subscribe(
        response => {
          this.joke = response.joke;
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
