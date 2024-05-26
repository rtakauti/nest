import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { BaseDto } from '../../common/dto';

/**
 * Stores Cargo pickup data
 *
 * @class CargoPickupDto
 * @extends BaseDto
 * @public
 */
export class CargoPickupDto extends BaseDto<CargoPickupDto> {
  /**
   * Date of the Cargo pickup
   * @type string
   * @property coletaData
   * @readonly
   */
  @ApiProperty({
    description: 'Cargo pickup date',
    default: '2022-12-31',
    format: 'date',
  })
  @IsNotEmpty({
    message: 'Cargo pickup date mandatory (yyyy-MM-dd)',
  })
  @MaxLength(10, {
    message: 'Length 10 characters',
  })
  @MinLength(10, {
    message: 'Length 10 characters',
  })
  readonly coletaData: string;

  /**
   * Time of the Cargo pickup
   * @type string
   * @property coletaHora
   * @readonly
   */
  @ApiProperty({
    description: 'Cargo pickup time',
    default: '18:00:00',
    format: 'time',
  })
  @IsNotEmpty({
    message: 'Cargo pickup time mandatory (HH:mm:ss)',
  })
  @MaxLength(8, {
    message: 'Length 8 characters',
  })
  @MinLength(8, {
    message: 'Length 8 characters',
  })
  readonly coletaHora: string;
}
