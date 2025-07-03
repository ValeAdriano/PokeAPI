/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TeamPokemon } from '../entities/team-pokemon.entity';
import { Team } from '../entities/team.entity';
import { CreateTeamPokemonDto } from './dto/create-team-pokemon.dto';
import { PokeapiService } from '../pokeapi/pokeapi.service';

@Injectable()
export class TeamPokemonsService {
  constructor(
    @InjectRepository(TeamPokemon)
    private readonly teamPokemonRepo: Repository<TeamPokemon>,

    @InjectRepository(Team)
    private readonly teamRepo: Repository<Team>,

    private readonly pokeapiService: PokeapiService,
  ) {}

  async addPokemon(teamId: number, dto: CreateTeamPokemonDto) {
    const team = await this.teamRepo.findOne({
      where: { id: teamId },
      relations: ['pokemons'],
    });

    if (!team) throw new NotFoundException('Time não encontrado');

    if (team.pokemons.length >= 6) {
      throw new BadRequestException('O time já possui 6 pokémons.');
    }

    await this.pokeapiService.validarPokemon(dto.pokemonIdOuNome);

    const teamPokemon = this.teamPokemonRepo.create({
      pokemonIdOuNome: dto.pokemonIdOuNome,
      team,
    });

    return this.teamPokemonRepo.save(teamPokemon);
  }

  async removePokemon(id: number) {
    const teamPokemon = await this.teamPokemonRepo.findOneBy({ id });
    if (!teamPokemon)
      throw new NotFoundException('Pokémon não encontrado no time');
    return this.teamPokemonRepo.remove(teamPokemon);
  }

  async listPokemons(teamId: number) {
    const teamPokemons = await this.teamPokemonRepo.find({
      where: { team: { id: teamId } },
    });

    return Promise.all(
      teamPokemons.map(async (tp) => {
        const dados = await this.pokeapiService.validarPokemon(
          tp.pokemonIdOuNome,
        );
        return {
          id: tp.id,
          pokemonIdOuNome: tp.pokemonIdOuNome,
          ...dados,
        };
      }),
    );
  }
}
