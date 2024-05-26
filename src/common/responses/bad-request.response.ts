import { BaseResponse } from './base.response';
import { Exclude, Expose } from 'class-transformer';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Bad Request Response 400
 */
@Exclude()
export class BadRequestResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.BAD_REQUEST,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.BAD_REQUEST;

  @ApiProperty({
    description: 'Return Message',
    default: 'Bad Request',
  })
  @Expose()
  public readonly message: string;
}
