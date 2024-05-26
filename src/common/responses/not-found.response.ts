import { BaseResponse } from './base.response';
import { Exclude, Expose } from 'class-transformer';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Not Found Response 404
 */
@Exclude()
export class NotFoundResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.NOT_FOUND,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.NOT_FOUND;

  @ApiProperty({
    description: 'Return Message',
    default: 'NotFound',
  })
  @Expose()
  public readonly message: string;
}
