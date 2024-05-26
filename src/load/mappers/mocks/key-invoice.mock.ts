import { KeyInvoiceDto } from '../../dto';
import { KeyInvoice } from '../../interfaces/key-invoice.interface';

export abstract class KeyInvoiceMock {
  public static rightInput(): KeyInvoiceDto {
    return {
      chaveNFe: '35240106147451001538550010013952761678676459',
    };
  }

  public static rightOutput(): KeyInvoice {
    return {
      CHAVE_NFE: '35240106147451001538550010013952761678676459',
    };
  }

  public static rightArrayInput(): KeyInvoiceDto[] {
    return [
      {
        chaveNFe: '35240106147451001538550010013952761678676459',
      },
      {
        chaveNFe: '35240106147451001538550010013952751678253364',
      },
    ];
  }

  public static rightArrayOutput(): KeyInvoice[] {
    return [
      {
        CHAVE_NFE: '35240106147451001538550010013952761678676459',
      },
      {
        CHAVE_NFE: '35240106147451001538550010013952751678253364',
      },
    ];
  }
}
