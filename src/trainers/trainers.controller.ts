import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';

@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {}

  // POST /trainers
  @Post()
  create(@Body() dto: CreateTrainerDto) {
    return this.trainersService.create(dto);
  }

  // GET /trainers
  @Get()
  findAll() {
    return this.trainersService.findAll();
  }

  // GET /trainers/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainersService.findOne(+id);
  }

  // DELETE /trainers/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainersService.remove(+id);
  }
}
