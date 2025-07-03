import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamPokemon } from '../entities/team-pokemon.entity';
import { Team } from '../entities/team.entity';
import { PokeapiService } from '../pokeapi/pokeapi.service';
import { TeamPokemonsService } from './team-pokemons.service';
import { TeamPokemonsController } from './team-pokemons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TeamPokemon, Team])],
  controllers: [TeamPokemonsController],
  providers: [TeamPokemonsService, PokeapiService],
})
export class TeamPokemonsModule {}
