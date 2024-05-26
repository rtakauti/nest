import { Test, TestingModule } from '@nestjs/testing';
import { LoadController } from './load.controller';
import { LoadService } from './load.service';
import { ConfirmationMock } from './mappers/mocks';
import { BadRequestResponse, CreatedResponse } from '../common/responses';

jest.mock('./load.service');

describe('LoadController', () => {
  let service: LoadService;
  let controller: LoadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoadService],
      controllers: [LoadController],
    }).compile();

    service = module.get<LoadService>(LoadService);
    controller = module.get<LoadController>(LoadController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });

  it('should return Created message', async () => {
    jest.spyOn(service, 'confirm').mockResolvedValue(new CreatedResponse({}));

    await expect(
      controller.confirm(ConfirmationMock.rightInput()),
    ).resolves.not.toThrowError();
  });

  it('should return Bad Request message', async () => {
    jest
      .spyOn(service, 'confirm')
      .mockResolvedValue(new BadRequestResponse({}));

    await expect(
      controller.confirm(ConfirmationMock.wrongInput()),
    ).resolves.not.toThrowError();
  });
});
