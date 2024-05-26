import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseResponse } from './base.response';
import { HttpStatus } from '@nestjs/common';

/**
 * Internal Server Error Response 500
 */
@Exclude()
export class InternalServerErrorResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
  @ApiProperty({
    description: 'Return Message',
    default: 'Internal Server Error',
  })
  @Expose()
  public readonly message: string;
}
