import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectSapService, SapService } from 'nestjs-sap-rfc';
import { ConfirmationRequestDto } from './dto';
import { ConfirmationMapper } from './mappers';
import { BadRequestResponse, CreatedResponse } from '../common/responses';
import { MessageResponse } from '../common/responses/interfaces';
import { ConfirmationResponse } from './interfaces';

/**
 * Service Class for Load component
 * @class LoadService
 * @public
 */
@Injectable()
export class LoadService {
  /**
   * SAP RFC name
   * @type {string}
   */
  private static readonly SAP_RFC_CONFIRM_LOAD: string =
    'ZFMTM_RECEBE_CONFIRMACAO_ME';
  /**
   * Component to record logs
   * @type {Logger}
   */
  private readonly logger = new Logger(LoadService.name);

  /**
   * @constructor
   * @param {SapService} sapService
   */
  constructor(
    @InjectSapService()
    private readonly sapService: SapService,
  ) {}

  /**
   * Confirm the load from MultiEmbarcador to SAP
   * @param {ConfirmationRequestDto} dto
   * @returns {Promise<void>}
   */
  public async confirm(dto: ConfirmationRequestDto): Promise<MessageResponse> {
    /**
     * Data mapped
     * @type {Confirmation}
     * @const
     */
    const params = ConfirmationMapper.mapping(dto);
    /**
     * Returning message from SAP RFC
     */
    let response: ConfirmationResponse;
    /**
     * Returning message to Client
     */
    let message: MessageResponse;

    this.logger.debug({
      message: `Executing RFC ${LoadService.SAP_RFC_CONFIRM_LOAD}`,
      params,
    });

    try {
      response = await this.sapService.execute<ConfirmationResponse>(
        LoadService.SAP_RFC_CONFIRM_LOAD,
        params,
      );

      this.logger.debug({
        message: `RFC ${LoadService.SAP_RFC_CONFIRM_LOAD} response`,
        response,
      });

      message = new BadRequestResponse({ message: response.E_MENSAGEM });

      if (response.E_SUCESSO === 'true') {
        message = new CreatedResponse({
          message: response.E_MENSAGEM,
        });
      }
    } catch (error) {
      this.logger.error({
        message: `RFC ${LoadService.SAP_RFC_CONFIRM_LOAD} error`,
        error,
        stack: error.stack,
        params,
      });

      if (error.key === 'RFC_LOGON_FAILURE') {
        throw new ForbiddenException(error.message);
      }

      throw new BadRequestException(error.message);
    }

    return message;
  }
}
