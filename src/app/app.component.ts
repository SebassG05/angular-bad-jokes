import { Component } from '@angular/core';
import { BadJokesComponent } from './components/bad-jokes/bad-jokes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BadJokesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bad-jokes';
}
