import { SapRfcStructure } from 'nestjs-sap-rfc';
/**
 * Driver Interface
 * @interfaces Driver
 * @extends SapRfcStructure
 * @public
 */
export interface Driver extends SapRfcStructure {
  CPF: string;
  NOME: string;
}
