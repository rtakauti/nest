import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseResponse } from './base.response';
import { HttpStatus } from '@nestjs/common';

/**
 * Created Response 201
 */
@Exclude()
export class CreatedResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.CREATED,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.CREATED;
  @ApiProperty({
    description: 'Return Message',
    default: 'Created',
  })
  @Expose()
  public readonly message: string;
}
