import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { Team } from './entities/team.entity';
import { TeamPokemon } from './entities/team-pokemon.entity';
import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { TeamsModule } from './teams/teams.module';
import { TeamPokemonsModule } from './team-pokemons/team-pokemons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'leany',
      entities: [Trainer, Team, TeamPokemon],
      synchronize: true, // só no dev!
    }),
    TrainersModule,
    TeamsModule,
    TeamPokemonsModule,
  ],
})
export class AppModule {}
