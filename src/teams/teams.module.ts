import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';

import { Team } from '../entities/team.entity';
import { Trainer } from '../entities/trainer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Trainer])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
