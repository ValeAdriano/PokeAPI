import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Trainer } from './trainer.entity';
import { TeamPokemon } from './team-pokemon.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeDoTime: string;

  @Column()
  trainerId: number; // Campo necessário para usar no DTO e facilitar queries

  @ManyToOne(() => Trainer, (trainer) => trainer.teams, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'trainerId' }) // liga trainerId com a entidade Trainer
  trainer: Trainer;

  @OneToMany(() => TeamPokemon, (tp) => tp.team)
  pokemons: TeamPokemon[];
}
