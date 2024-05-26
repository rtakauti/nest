import { KeyInvoiceDto } from '../dto';
import { KeyInvoice } from '../interfaces/key-invoice.interface';

/**
 * Key Invoice Mapper
 * @class KeyInvoiceMapper
 * @public
 */
export class KeyInvoiceMapper {
  /**
   * Mapping method
   * @param {KeyInvoiceDto} dto
   * @returns {KeyInvoice}
   */
  public static mapping(dto: KeyInvoiceDto): KeyInvoice {
    if (!dto) {
      return undefined;
    }

    return {
      CHAVE_NFE: dto.chaveNFe,
    };
  }

  /**
   * Mapping array method
   * @param {KeyInvoiceDto[]} keys
   * @returns {KeyInvoice[]}
   */
  public static mappingArray(keys: KeyInvoiceDto[]): KeyInvoice[] {
    if (!keys || keys.length === 0) {
      return [];
    }

    return keys.map((key) => KeyInvoiceMapper.mapping(key));
  }
}
