import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseDto } from '../dto';
import { MessageResponse } from './interfaces';

/**
 * Base Response
 * @class BaseResponse
 * @extends BaseDto
 * @implements MessageResponse
 */
@Exclude()
export abstract class BaseResponse
  extends BaseDto<MessageResponse>
  implements MessageResponse
{
  /**
   * Status Code
   */
  @ApiProperty()
  @Expose()
  public readonly statusCode: number;

  /**
   * Message
   */
  @ApiProperty()
  @Expose()
  public readonly message: string;

  /**
   * Timestamp
   */
  @ApiProperty({
    description: 'ISO8601 date field response',
    default: new Date().toISOString(),
    format: 'date-time',
  })
  @Expose()
  public readonly timestamp: string = new Date().toISOString();
}
