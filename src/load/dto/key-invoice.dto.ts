import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from '../../common/dto';

/**
 * Stores Key of Invoice
 *
 * @class KeyInvoiceDto
 * @extends BaseDto
 * @public
 */
export class KeyInvoiceDto extends BaseDto<KeyInvoiceDto> {
  /**
   *
   */
  @ApiProperty({
    description: 'Chave da nota fiscal eletrônica',
    default: '35240106147451001538550010013952761678676459',
  })
  @IsNotEmpty({
    message: 'Chave NFe obrigatória',
  })
  readonly chaveNFe: string;
}
