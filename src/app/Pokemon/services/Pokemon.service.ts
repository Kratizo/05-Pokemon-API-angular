import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon-interface';
import { Observable, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PokemonService {

  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Signal para almacenar el pokemon actual y usarlo en tus componentes
public pokemonSelected = signal<Pokemon>({} as Pokemon);

getPokemon(nameOrId: string | number): Observable<Pokemon> {
   return this._http.get<Pokemon>(`${this._baseUrl}/${nameOrId}`).pipe(
    tap(pokemon => this.pokemonSelected.set(pokemon))
  );
}
}


