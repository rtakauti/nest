import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseResponse } from './base.response';
import { HttpStatus } from '@nestjs/common';

/**
 * Ok Response 200
 */
@Exclude()
export class OkResponse extends BaseResponse {
  @ApiProperty({
    description: 'Status code',
    default: HttpStatus.OK,
  })
  @Expose()
  public readonly statusCode: number = HttpStatus.OK;
  @ApiProperty({
    description: 'Return Message',
    default: 'Ok',
  })
  @Expose()
  public readonly message: string;
}
