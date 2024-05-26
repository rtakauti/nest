import { DriverDto } from '../dto';
import { Driver } from '../interfaces';

/**
 * Driver Mapper
 * @class DriverMapper
 * @public
 */
export class DriverMapper {
  /**
   * Mapping method
   * @param {DriverDto} dto
   * @returns {Driver}
   * @static
   * @public
   */
  public static mapping(dto: DriverDto): Driver {
    if (!dto) {
      return undefined;
    }

    return {
      CPF: dto.cpf,
      NOME: dto.nomeCompleto,
    };
  }
}
