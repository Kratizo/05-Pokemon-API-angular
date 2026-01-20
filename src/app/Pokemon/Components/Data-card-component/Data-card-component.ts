import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para solucionar el error de titlecase
import { PokemonService } from '../../services/Pokemon.service';
import { DataHeaderCardComponent } from "../Data-header-card-component/Data-header-card-component";
import { DataBodyCardComponent } from '../Data-body-card-component/Data-body-card-component';





@Component({
  selector: 'data-card-component',
  standalone: true,
  imports: [CommonModule, DataHeaderCardComponent, DataBodyCardComponent], // Añadir CommonModule aquí habilita pipes como titlecase
  templateUrl: './Data-card-component.html',
})
export class DataCardComponent {

  PokemonName = signal<string>('');


  private pokemonService = inject(PokemonService);

  // Accedemos al signal del servicio
  public pokemon = this.pokemonService.pokemonSelected;


  sendPokemon() {
    const nombre = this.PokemonName().trim();
    if (!nombre) return;

    this.pokemonService.getPokemon(nombre).subscribe(poke => {
      console.log('Valor enviado', nombre);
      // Actualiza el signal del servicio con el Pokémon recibido
      this.pokemonService.pokemonSelected.set(poke);
      // Limpiamos el input
      this.PokemonName.set('');
    });
  }

}
