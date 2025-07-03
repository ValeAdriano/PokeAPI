/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { TeamPokemonsService } from './team-pokemons.service';
import { CreateTeamPokemonDto } from './dto/create-team-pokemon.dto';

@Controller('teams/:teamId/pokemons')
export class TeamPokemonsController {
  constructor(private readonly service: TeamPokemonsService) {}

  // POST /teams/:teamId/pokemons
  @Post()
  add(
    @Param('teamId') teamId: string,
    @Body() dto: CreateTeamPokemonDto,
  ) {
    return this.service.addPokemon(+teamId, dto);
  }

  // DELETE /teams/:teamId/pokemons/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.removePokemon(+id);
  }

  // GET /teams/:teamId/pokemons
  @Get()
  list(@Param('teamId') teamId: string) {
    return this.service.listPokemons(+teamId);
  }
}
