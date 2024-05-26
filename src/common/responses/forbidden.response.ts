import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseResponse } from './base.response';
import { HttpStatus } from '@nestjs/common';

/**
 * Forbidden Response 403
 */
@Exclude()
export class ForbiddenResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.FORBIDDEN,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.FORBIDDEN;
  @ApiProperty({
    description: 'Return Message',
    default: 'Forbidden',
  })
  @Expose()
  public readonly message: string;
}
