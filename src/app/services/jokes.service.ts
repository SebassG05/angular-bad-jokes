import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private jokes: string[] = [
    "¿Por qué los científicos no confían en los átomos? ¡Porque lo componen todo!",
    "¿Por qué el espantapájaros ganó un premio? ¡Porque era el mejor en su campo!",
    "¿Por qué los esqueletos no pelean entre ellos? ¡Porque no tienen agallas!",
    "¿Cómo se llama la pasta falsa? ¡Una im-pasta!",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
    "¿Qué le dice una iguana a su hermana gemela? ¡Somos iguanitas!",
    "¿Por qué el libro de matemáticas se deprimió? ¡Porque tenía demasiados problemas!",
    "¿Qué hace una vaca con los ojos cerrados? ¡Leche concentrada!",
    "¿Por qué los peces no van a la escuela? ¡Porque están en el agua!"
  ];

  getRandomJoke(): Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    return of(this.jokes[randomIndex]);
  }
}
