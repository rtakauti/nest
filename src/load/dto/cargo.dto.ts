import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { BaseDto } from '../../common/dto';

/**
 * Stores Cargo data
 *
 * @class CargoDto
 * @extends BaseDto
 * @public
 */
export class CargoDto extends BaseDto<CargoDto> {
  /**
   * Order number
   * @type string
   * @property ordem
   * @readonly
   */
  @ApiProperty({
    description: 'Ordem da carga',
    default: '001',
  })
  @IsNotEmpty({
    message: 'Ordem obrigatório',
  })
  readonly ordem: string;

  /**
   * Cargo number
   * @type string
   * @property numeroCarga
   * @readonly
   */
  @ApiProperty({
    description: 'Número da carga',
    default: 'T-1112-Z3',
  })
  @IsNotEmpty({
    message: 'Número da carga obrigatório',
  })
  @MaxLength(20, {
    message: 'Tamanho máximo 20 caracteres',
  })
  readonly numeroCarga: string;

  /**
   * Application number
   * @type string
   * @property numeroPedido
   * @readonly
   */
  @ApiProperty({
    description: 'Número do pedido',
    default: 'R-1112-Z3',
  })
  @IsNotEmpty({
    message: 'Número do pedido obrigatório',
  })
  @MaxLength(20, {
    message: 'Tamanho máximo 20 caracteres',
  })
  readonly numeroPedido: string;

  /**
   * Protocol number
   * @type string
   * @property Protocolo de Carga
   * @readonly
   */
  @ApiProperty({
    description: 'Protocolo da carga',
    default: '99999',
    required: false,
  })
  @IsOptional({
    message: 'Protocolo da carga opcional',
  })
  readonly protocoloCarga?: string;

  /**
   * Protocol number
   * @type string
   * @property protocoloPedido
   * @readonly
   */
  @ApiProperty({
    description: 'Protocolo do pedido',
    default: '99999',
    required: false,
  })
  @IsOptional({
    message: 'Protocolo do pedido opcional',
  })
  readonly protocoloPedido?: string;
}
