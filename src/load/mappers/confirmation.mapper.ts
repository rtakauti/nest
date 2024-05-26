import { ConfirmationRequestDto } from '../dto';
import { Confirmation } from '../interfaces';
import { CargoPickupMapper } from './cargo-pickup.mapper';
import { CargoMapper } from './cargo.mapper';
import { DriverMapper } from './driver.mapper';
import { KeyInvoiceMapper } from './key-invoice.mapper';
import { ShippingCompanyMapper } from './shipping-company.mapper';
/**
 * Confirmation Mapper
 * @class ConfirmationMapper
 * @public
 */
export class ConfirmationMapper {
  /**
   * Mapping method
   * @param {ConfirmationRequestDto} dto
   * @returns {Confirmation}
   * @static
   * @public
   */
  public static mapping(dto: ConfirmationRequestDto): Confirmation {
    if (!dto) {
      return undefined;
    }

    const {
      numeroCargaConsolidada,
      cargas,
      notasFiscais,
      transportadora,
      coleta,
      motorista,
      caminhao: { placa, lacre },
    } = dto;

    return {
      I_NR_CARGA_CONSOLID: numeroCargaConsolidada,
      IT_CARGAS: CargoMapper.mappingArray(cargas),
      IT_NOTAS_FISCAIS: KeyInvoiceMapper.mappingArray(notasFiscais),
      I_TRANSPORTADORA: ShippingCompanyMapper.mapping(transportadora),
      I_COLETA: CargoPickupMapper.mapping(coleta),
      I_MOTORISTA: DriverMapper.mapping(motorista),
      I_PLACA: placa,
      I_LACRE: lacre ?? '',
    };
  }
}
