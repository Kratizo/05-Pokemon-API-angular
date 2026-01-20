import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataCardComponent } from "./Pokemon/Components/Data-card-component/Data-card-component";

@Component({
  selector: 'app-root',
  imports: [ DataCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pokemon-app');
}
