import { SapRfcObject } from 'nestjs-sap-rfc';
import { CargoPickup } from './cargo-pickup.interface';
import { Cargo } from './cargo.interface';
import { Driver } from './driver.interface';
import { KeyInvoice } from './key-invoice.interface';
import { ShippingCompany } from './shipping-company.interface';

/**
 * Confirmation Interface
 * @interfaces Confirmation
 * @extends SapRfcObject
 * @public
 */
export interface Confirmation extends SapRfcObject {
  I_NR_CARGA_CONSOLID: string;
  IT_CARGAS: Cargo[];
  IT_NOTAS_FISCAIS?: KeyInvoice[];
  I_TRANSPORTADORA: ShippingCompany;
  I_COLETA: CargoPickup;
  I_MOTORISTA: Driver;
  I_PLACA: string;
  I_LACRE?: string;
}
