import { CargoDto } from '../dto';
import { Cargo } from '../interfaces';

/**
 * Cargo Mapper
 * @class CargoMapper
 * @public
 */
export class CargoMapper {
  /**
   * Mapping method
   * @param {CargoDto} dto
   * @returns {Cargo}
   * @static
   * @public
   */
  public static mapping(dto: CargoDto): Cargo {
    if (!dto) {
      return undefined;
    }

    const {
      ordem,
      numeroCarga,
      numeroPedido,
      protocoloCarga,
      protocoloPedido,
    } = dto;

    return {
      ORDEM: ordem,
      NR_CARGA: numeroCarga,
      NR_PEDIDO: numeroPedido,
      PROT_CARGA: protocoloCarga ?? '',
      PROT_PEDIDO: protocoloPedido ?? '',
    };
  }

  /**
   * Mapping array method
   * @param {CargoDto[]} cargoes
   * @returns {Cargo[]}
   */
  public static mappingArray(cargoes: CargoDto[]): Cargo[] {
    if (!cargoes || cargoes.length === 0) {
      return [];
    }

    return cargoes.map((cargo) => CargoMapper.mapping(cargo));
  }
}
