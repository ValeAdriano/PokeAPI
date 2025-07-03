import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo time para um treinador' })
  create(@Body() dto: CreateTeamDto) {
    return this.teamsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os times cadastrados' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get('/trainer/:trainerId')
  @ApiOperation({ summary: 'Lista os times de um treinador específico' })
  findByTrainer(@Param('trainerId', ParseIntPipe) trainerId: number) {
    return this.teamsService.findByTrainerId(trainerId);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Busca um time pelo ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.findOne(id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove um time pelo ID' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.remove(id);
  }
}
