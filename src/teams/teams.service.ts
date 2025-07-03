import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Team } from '../entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { Trainer } from '../entities/trainer.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,

    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) {}

  async create(dto: CreateTeamDto) {
    const trainer = await this.trainerRepository.findOne({
      where: { id: dto.trainerId },
    });

    if (!trainer) {
      throw new NotFoundException(
        `Treinador com ID ${dto.trainerId} não encontrado`,
      );
    }

    const team = this.teamRepository.create({
      nomeDoTime: dto.nomeDoTime,
      trainerId: dto.trainerId,
    });

    return this.teamRepository.save(team);
  }

  findAll() {
    return this.teamRepository.find({ relations: ['trainer', 'pokemons'] });
  }

  async findByTrainerId(trainerId: number) {
    return this.teamRepository.find({
      where: { trainerId },
      relations: ['pokemons'],
    });
  }

  async findOne(id: number) {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['trainer', 'pokemons'],
    });

    if (!team) {
      throw new NotFoundException(`Time com ID ${id} não encontrado`);
    }

    return team;
  }

  async remove(id: number) {
    const team = await this.findOne(id);
    return this.teamRepository.remove(team);
  }
}
