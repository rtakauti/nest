import { SapRfcStructure } from 'nestjs-sap-rfc';

/**
 * Cargo Interface
 * @interfaces Cargo
 * @extends SapRfcStructure
 * @public
 */
export interface Cargo extends SapRfcStructure {
  ORDEM: string;
  NR_CARGA: string;
  NR_PEDIDO: string;
  PROT_CARGA?: string;
  PROT_PEDIDO?: string;
}
