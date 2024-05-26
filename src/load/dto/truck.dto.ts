import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { BaseDto } from '../../common/dto';

/**
 * Stores Truck data
 *
 * @class TruckDto
 * @extends BaseDto
 * @public
 */
export class TruckDto extends BaseDto<TruckDto> {
  /**
   * Car Plate
   * @type string
   * @property placa
   * @readonly
   */
  @ApiProperty({
    description: 'Vehicle Plate',
    default: 'AAA1A1A',
  })
  @IsNotEmpty({
    message: 'Vehicle Plate mandatory',
  })
  @MaxLength(7, {
    message: 'Length 7 characters',
  })
  @IsString()
  readonly placa: string;

  /**
   * Seal
   * @type string
   * @property lacre
   * @readonly
   */
  @ApiProperty({
    description: 'Vehicle Seal',
    default: 'A123456',
    required: false,
  })
  @IsOptional({
    message: 'Vehicle Seal optional',
  })
  @IsString()
  readonly lacre?: string;
}
