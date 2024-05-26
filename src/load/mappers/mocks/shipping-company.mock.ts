/* istanbul ignore file */

import { ShippingCompanyDto } from '../../dto';
import { ShippingCompany } from '../../interfaces';

export abstract class ShippingCompanyMock {
  public static rightInput(): ShippingCompanyDto {
    return {
      codigoTransportadora: 'R-123',
      cnpj: '01234567890123',
    };
  }

  public static rightOutput(): ShippingCompany {
    return {
      COD_TRANSP: 'R-123',
      CNPJ: '01234567890123',
    };
  }
}
