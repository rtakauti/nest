import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from '../../common/dto';
import { CargoPickupDto } from './cargo-pickup.dto';
import { CargoDto } from './cargo.dto';
import { DriverDto } from './driver.dto';
import { KeyInvoiceDto } from './key-invoice.dto';
import { ShippingCompanyDto } from './shipping-company.dto';
import { TruckDto } from './truck.dto';

/**
 * Stores data of request from client
 *
 * @class ConfirmationRequestDto
 * @extends BaseDto
 * @public
 */
export class ConfirmationRequestDto extends BaseDto<ConfirmationRequestDto> {
  /**
   * Number of the Cargo
   * @type string
   * @property numeroCargaConsolidada
   * @readonly
   */
  @ApiProperty({
    description: 'Consolidated load number',
    default: 'T-1111-Z1',
  })
  @IsNotEmpty({
    message: 'Consolidated load number mandatory',
  })
  readonly numeroCargaConsolidada: string;

  /**
   * Cargoes
   * @type Array(BaseDto)
   * @property cargas
   * @readonly
   */
  @ApiProperty({
    description: 'Cargo data for confirmation',
    type: [CargoDto],
  })
  @Type(/* istanbul ignore next */ () => CargoDto)
  @ValidateNested()
  @ArrayNotEmpty({
    message: 'Must contain at least one load',
  })
  readonly cargas: CargoDto[];

  /**
   * Invoices
   * @type Array(BaseDto)
   * @property Invoices
   * @readonly
   */
  @ApiProperty({
    description: 'Invoice data for confirmation',
    type: [KeyInvoiceDto],
  })
  @Type(/* istanbul ignore next */ () => KeyInvoiceDto)
  @ValidateNested()
  readonly notasFiscais: KeyInvoiceDto[];

  /**
   * Shipping Company
   * @type ShippingCompanyDto
   * @property transportadora
   * @readonly
   */
  @ApiProperty({
    description: 'Shipping company data',
    type: ShippingCompanyDto,
  })
  @Type(/* istanbul ignore next */ () => ShippingCompanyDto)
  @ValidateNested()
  @IsNotEmptyObject()
  readonly transportadora: ShippingCompanyDto;

  /**
   * Cargo Pickup
   * @type CargoPickupDto
   * @property coleta
   * @readonly
   */
  @ApiProperty({
    description: 'Cargo pickup data',
    type: CargoPickupDto,
  })
  @Type(/* istanbul ignore next */ () => CargoPickupDto)
  @ValidateNested()
  @IsNotEmptyObject()
  readonly coleta: CargoPickupDto;

  /**
   * Driver
   * @type DriverDto
   * @property motorista
   * @readonly
   */
  @ApiProperty({
    description: 'Driver data',
    type: DriverDto,
  })
  @Type(/* istanbul ignore next */ () => DriverDto)
  @ValidateNested()
  @IsNotEmptyObject()
  readonly motorista: DriverDto;

  /**
   * Truck
   * @type TruckDto
   * @property caminhao
   * @readonly
   */
  @ApiProperty({
    description: 'Vehicle Data',
    type: TruckDto,
  })
  @Type(/* istanbul ignore next */ () => TruckDto)
  @ValidateNested()
  @IsNotEmptyObject()
  readonly caminhao: TruckDto;
}
