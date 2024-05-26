import { BaseDto } from '../../common/dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * Stores Driver data
 *
 * @class DriverDto
 * @extends BaseDto
 * @public
 */
export class DriverDto extends BaseDto<DriverDto> {
  /**
   * CPF
   * @type string
   * @property cpf
   * @readonly
   */
  @ApiProperty({
    description: 'CPF with only numbers',
    default: '01234567891',
  })
  @IsNotEmpty({
    message: 'CPF mandatory (###########)',
  })
  @MaxLength(11, {
    message: 'Length 11 characters',
  })
  @MinLength(11, {
    message: 'Length 11 characters',
  })
  @IsNumberString()
  readonly cpf: string;

  /**
   * Full Name
   * @type string
   * @property nomeCompleto
   * @readonly
   */
  @ApiProperty({
    description: 'Full name',
    default: 'John Doe',
  })
  @IsNotEmpty({
    message: 'Full name mandatory',
  })
  @IsString()
  readonly nomeCompleto: string;
}
