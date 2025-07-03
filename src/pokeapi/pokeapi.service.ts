/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokeapiService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  async validarPokemon(idOuNome: string | number) {
    try {
      const response = await axios.get(`${this.baseUrl}/${idOuNome}`);

      const { name, sprites, types } = response.data;

      return {
        nome: name,
        imagem: sprites.front_default,
        tipos: types.map((t) => t.type.name),
      };
    } catch (error) {
      throw new NotFoundException(
        `Pokémon '${idOuNome}' não encontrado na PokéAPI.`,
      );
    }
  }
}
