import { BaseDto } from '../../common/dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * Stores Shipping Company data
 *
 * @class ShippingCompanyDto
 * @extends BaseDto
 * @public
 */
export class ShippingCompanyDto extends BaseDto<ShippingCompanyDto> {
  /**
   * Shipping Company code
   *
   * @type string
   * @property codigoTransportadora
   * @readonly
   */
  @ApiProperty({
    description: 'Shipping company code',
    default: 'R-123',
  })
  @IsNotEmpty({
    message: 'Shipping company code mandatory',
  })
  readonly codigoTransportadora: string;

  /**
   * CNPJ of the Shipping Company
   *
   * @type string
   * @property cnpj
   * @readonly
   */
  @ApiProperty({
    description: 'CNPJ with only numbers',
    default: '01234567891234',
  })
  @IsNotEmpty({
    message: 'CNPJ mandatory',
  })
  @IsNumberString()
  @MaxLength(14, {
    message: 'Length 14 characters',
  })
  @MinLength(14, {
    message: 'Length 14 characters',
  })
  readonly cnpj: string;
}
