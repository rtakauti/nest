import { SapRfcStructure } from 'nestjs-sap-rfc';

/**
 * CargoOutput Pickup Interface
 * @interfaces CargoPickup
 * @extends SapRfcStructure
 * @public
 */
export interface CargoPickup extends SapRfcStructure {
  DT_COLETA: string;
  HR_COLETA: string;
}
