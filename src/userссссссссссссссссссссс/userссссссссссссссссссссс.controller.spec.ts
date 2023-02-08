import { Test, TestingModule } from '@nestjs/testing';
import { UserсссссссссссссссссссссController } from './userссссссссссссссссссссс.controller';

describe('UserсссссссссссссссссссссController', () => {
  let controller: UserсссссссссссссссссссссController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserсссссссссссссссссссссController],
    }).compile();

    controller = module.get<UserсссссссссссссссссссссController>(UserсссссссссссссссссссссController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
