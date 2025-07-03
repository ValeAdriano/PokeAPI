import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({
    example: 'Equipe Rocket',
    description: 'Nome do time Pokémon',
  })
  @IsString()
  nomeDoTime: string;

  @ApiProperty({
    example: 1,
    description: 'ID do treinador que será dono do time',
  })
  @IsNumber()
  trainerId: number;
}
