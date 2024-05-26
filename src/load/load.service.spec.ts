import { Test, TestingModule } from '@nestjs/testing';
import { LoadService } from './load.service';
import { SAP_SERVICE, SapService } from 'nestjs-sap-rfc';
import { ConfirmationMock } from './mappers/mocks/confirmation.mock';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { BadRequestResponse, CreatedResponse } from '../common/responses';

describe('LoadService', () => {
  let service: LoadService;
  let sapService: SapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoadService,
        {
          provide: SAP_SERVICE,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<LoadService>(LoadService);
    sapService = module.get<SapService>(SAP_SERVICE);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(sapService).toBeDefined();
  });

  it('should confirm load', async () => {
    jest
      .spyOn(sapService, 'execute')
      .mockResolvedValue(ConfirmationMock.rightOutput());

    await expect(
      service.confirm(ConfirmationMock.rightInput()),
    ).resolves.not.toThrowError();
  });

  it('should throw a ForbiddenException', async () => {
    jest
      .spyOn(sapService, 'execute')
      .mockRejectedValue(ConfirmationMock.errorRfcLib());

    await expect(
      service.confirm(ConfirmationMock.rightInput()),
    ).rejects.toThrowError(ForbiddenException);
  });

  it('should throw a BadRequestException', async () => {
    jest.spyOn(sapService, 'execute').mockRejectedValue({
      E_SUCESSO: 'false',
      E_MENSAGEM: 'Erro',
    });

    await expect(
      service.confirm(ConfirmationMock.rightInput()),
    ).rejects.toThrowError(BadRequestException);
  });

  it('should return Created message', async () => {
    jest.spyOn(sapService, 'execute').mockResolvedValue({
      E_SUCESSO: 'true',
      E_MENSAGEM: 'Confirmação processada com sucesso',
    });

    await expect(
      service.confirm(ConfirmationMock.rightInput()),
    ).resolves.toBeInstanceOf(CreatedResponse);
  });

  it('should return Bad Request message', async () => {
    jest.spyOn(sapService, 'execute').mockResolvedValue({
      E_SUCESSO: 'false',
      E_MENSAGEM: 'Erro',
    });

    await expect(
      service.confirm(ConfirmationMock.rightInput()),
    ).resolves.toBeInstanceOf(BadRequestResponse);
  });
});
