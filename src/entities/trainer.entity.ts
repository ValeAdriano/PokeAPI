import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from './team.entity'; // caminho direto na mesma pasta

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  cidadeOrigem?: string;

  @OneToMany(() => Team, (team) => team.trainer)
  teams: Team[];
}
