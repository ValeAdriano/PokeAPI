import { Test, TestingModule } from '@nestjs/testing';
import { TeamPokemonsService } from './team-pokemons.service';

describe('TeamPokemonsService', () => {
  let service: TeamPokemonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamPokemonsService],
    }).compile();

    service = module.get<TeamPokemonsService>(TeamPokemonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
