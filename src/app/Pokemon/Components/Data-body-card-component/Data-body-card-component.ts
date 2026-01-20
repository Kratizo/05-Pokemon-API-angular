import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon-interface';



@Component({
  selector: 'data-body-card-component',
  imports: [],
  templateUrl: './Data-body-card-component.html',

})
export class DataBodyCardComponent {

Pokemon = input.required<Pokemon>();


}
