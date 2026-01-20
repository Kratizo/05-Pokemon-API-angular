import {  Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon-interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'data-header-card-component',
  imports: [TitleCasePipe],
  templateUrl: './Data-header-card-component.html',

})
export class DataHeaderCardComponent {

    Pokemon = input.required<Pokemon>();
}
