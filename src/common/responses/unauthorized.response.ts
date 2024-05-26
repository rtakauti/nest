import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseResponse } from './base.response';
import { HttpStatus } from '@nestjs/common';

/**
 * Unauthorized Response 401
 */
@Exclude()
export class UnauthorizedResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.UNAUTHORIZED,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.UNAUTHORIZED;
  @ApiProperty({
    description: 'Return Message',
    default: 'Unauthorized',
  })
  @Expose()
  public readonly message: string;
}
