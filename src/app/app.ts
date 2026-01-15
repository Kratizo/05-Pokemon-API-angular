import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./Pokemon/Components/Card-component/Card-component";

@Component({
  selector: 'app-root',
  imports: [ CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pokemon-app');
}
