import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamPokemonDto {
  @ApiProperty({
    example: 'pikachu',
    description: 'Nome ou ID do Pokémon',
  })
  @IsString()
  pokemonIdOuNome: string;
}
