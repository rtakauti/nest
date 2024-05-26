import { SapRfcStructure } from 'nestjs-sap-rfc';
/**
 * Shipping Company Interface
 * @interfaces ShippingCompany
 * @extends SapRfcStructure
 * @public
 */
export interface ShippingCompany extends SapRfcStructure {
  CNPJ: string;
  COD_TRANSP: string;
}
