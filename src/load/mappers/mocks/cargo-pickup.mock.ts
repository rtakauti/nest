/* istanbul ignore file */

import { CargoPickupDto } from '../../dto';
import { CargoPickup } from '../../interfaces';

export abstract class CargoPickupMock {
  public static rightInput(): CargoPickupDto {
    return {
      coletaData: '2021-12-31',
      coletaHora: '18:00:00',
    };
  }

  public static rightOutput(): CargoPickup {
    return {
      DT_COLETA: '20211231',
      HR_COLETA: '180000',
    };
  }
}
