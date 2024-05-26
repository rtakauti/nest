import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  BadRequestResponse,
  CreatedResponse,
  ForbiddenResponse,
  InternalServerErrorResponse,
  NotFoundResponse,
  OkResponse,
  UnauthorizedResponse,
} from '../common/responses';
import { MessageResponse } from '../common/responses/interfaces';
import { ConfirmationRequestDto } from './dto';
import { LoadService } from './load.service';

/**
 * Load Controller
 * @class LoadController
 */
@Controller('loads')
export class LoadController {
  /**
   * 400 error msg
   * @type {string}
   */
  public static readonly IMPORTANT_ERROR400_MSG: string =
    '`Important:` The client must not repeat this request without modification.';
  /**
   * 500 error msg
   * @type {string}
   */
  public static readonly IMPORTANT_ERROR500_MSG =
    '`Important:` The client must contact the service consumed.';

  /**
   * Log component
   * @type {Logger}
   */
  private readonly logger = new Logger(LoadController.name);

  /**
   * @constructor
   * @param {LoadService} loadService
   */
  public constructor(private readonly loadService: LoadService) {}

  /**
   * Confirmation Method
   * @param {ConfirmationRequestDto} dto
   * @returns {Promise<MessageResponse>}
   */
  @Post('confirmation')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Confirm Load registered',
  })
  @ApiOkResponse({
    description: 'Success message return',
    type: OkResponse,
  })
  @ApiCreatedResponse({
    description: 'Return of successful charge confirmation message',
    type: CreatedResponse,
  })
  @ApiBadRequestResponse({
    description:
      'Data processing error response' + LoadController.IMPORTANT_ERROR400_MSG,
    type: BadRequestResponse,
  })
  @ApiUnauthorizedResponse({
    description:
      'Access authorization error response' +
      LoadController.IMPORTANT_ERROR400_MSG,
    type: UnauthorizedResponse,
  })
  @ApiForbiddenResponse({
    description:
      'Access authorization prohibited error response' +
      LoadController.IMPORTANT_ERROR400_MSG,
    type: ForbiddenResponse,
  })
  @ApiNotFoundResponse({
    description:
      'Resource not found error response' +
      LoadController.IMPORTANT_ERROR400_MSG,
    type: NotFoundResponse,
  })
  @ApiInternalServerErrorResponse({
    description:
      'Internal server error response' + LoadController.IMPORTANT_ERROR500_MSG,
    type: InternalServerErrorResponse,
  })
  @ApiBody({ type: ConfirmationRequestDto })
  public async confirm(
    @Body() dto: ConfirmationRequestDto,
  ): Promise<MessageResponse> {
    this.logger.debug({
      message: 'MessageResponse',
      dto,
    });

    return this.loadService.confirm(dto);
  }
}
