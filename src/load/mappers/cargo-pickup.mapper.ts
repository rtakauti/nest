import { CargoPickupDto } from '../dto';
import { CargoPickup } from '../interfaces';
import { DateTimeUtils } from '../../common/utils';

/**
 * Cargo Pickup Mapper
 * @class CargoPickupMapper
 * @public
 */
export class CargoPickupMapper {
  /**
   * Mapping method
   * @param {CargoPickupDto} dto
   * @returns {CargoPickup}
   */
  public static mapping(dto: CargoPickupDto): CargoPickup {
    if (!dto) {
      return undefined;
    }

    return {
      DT_COLETA: DateTimeUtils.formatDate(dto.coletaData),
      HR_COLETA: DateTimeUtils.formatTime(dto.coletaHora),
    };
  }
}
