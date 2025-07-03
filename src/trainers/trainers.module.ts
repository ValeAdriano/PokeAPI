import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from '../entities/trainer.entity';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  controllers: [TrainersController],
  providers: [TrainersService],
})
export class TrainersModule {}
