import { ShippingCompanyDto } from '../dto';
import { ShippingCompany } from '../interfaces';

/**
 * Shipping Company
 * @class ShippingCompanyMapper
 * @public
 */
export class ShippingCompanyMapper {
  /**
   * Mapping method
   * @param {ShippingCompanyDto} dto
   * @returns {ShippingCompany}
   * @static
   * @public
   */
  public static mapping(dto: ShippingCompanyDto): ShippingCompany {
    if (!dto) {
      return undefined;
    }

    return {
      CNPJ: dto.cnpj,
      COD_TRANSP: dto.codigoTransportadora,
    };
  }
}
