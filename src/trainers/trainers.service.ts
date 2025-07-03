import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from '../entities/trainer.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) {}

  async create(dto: CreateTrainerDto) {
    const trainer = this.trainerRepository.create(dto);
    return this.trainerRepository.save(trainer);
  }

  async findAll() {
    return this.trainerRepository.find({ relations: ['teams'] });
  }

  async findOne(id: number): Promise<Trainer> {
    const trainer = await this.trainerRepository.findOne({
      where: { id },
      relations: ['teams'],
    });

    if (!trainer) {
      throw new NotFoundException(`Treinador com ID ${id} não encontrado.`);
    }

    return trainer;
  }

  async remove(id: number) {
    const trainer = await this.findOne(id); // já lança erro se não existir
    return this.trainerRepository.remove(trainer);
  }
}
