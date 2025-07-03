import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainerDto {
  @ApiProperty({ example: 'Ash Ketchum' })
  @IsString({ message: 'O nome deve ser uma string.' })
  name: string;

  @ApiProperty({ example: 'Pallet Town', required: false })
  @IsOptional()
  @IsString({ message: 'A cidade de origem deve ser uma string.' })
  cidadeOrigem?: string;
}
