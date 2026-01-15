import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para solucionar el error de titlecase
import { PokemonService } from '../../services/Pokemon.service';



@Component({
  selector: 'data-component',
  standalone: true,
  imports: [CommonModule], // Añadir CommonModule aquí habilita pipes como titlecase
  templateUrl: './Data-component.html',
})
export class DataComponent {

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
