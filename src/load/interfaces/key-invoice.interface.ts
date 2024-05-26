import { SapRfcStructure } from 'nestjs-sap-rfc';

/**
 * KeyInvoice Interface
 * @interfaces KeyInvoice
 * @extends SapRfcStructure
 * @public
 */
export interface KeyInvoice extends SapRfcStructure {
  CHAVE_NFE: string;
}
