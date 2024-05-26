import { SapRfcObject } from 'nestjs-sap-rfc';

/**
 * Confirmation Response
 * @interfaces ConfirmationResponse
 * @extends SapRfcObject
 */
export interface ConfirmationResponse extends SapRfcObject {
  readonly E_SUCESSO: string;
  readonly E_MENSAGEM: string;
}
