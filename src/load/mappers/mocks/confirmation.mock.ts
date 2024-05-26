/* istanbul ignore file */

import { ConfirmationRequestDto } from '../../dto';
import { Confirmation } from '../../interfaces';
import { CargoPickupMock } from './cargo-pickup.mock';
import { CargoMock } from './cargo.mock';
import { DriverMock } from './driver.mock';
import { KeyInvoiceMock } from './key-invoice.mock';
import { ShippingCompanyMock } from './shipping-company.mock';

export abstract class ConfirmationMock {
  public static rightInput(): ConfirmationRequestDto {
    return {
      numeroCargaConsolidada: 'T-1111-Z1',
      cargas: CargoMock.rightArrayInput(),
      notasFiscais: KeyInvoiceMock.rightArrayInput(),
      transportadora: ShippingCompanyMock.rightInput(),
      coleta: CargoPickupMock.rightInput(),
      motorista: DriverMock.rightInput(),
      caminhao: {
        placa: 'AAA1A1A',
        lacre: 'A123456',
      },
    };
  }

  public static rightOutput(): Confirmation {
    return {
      I_NR_CARGA_CONSOLID: 'T-1111-Z1',
      IT_CARGAS: CargoMock.rightArrayOutput(),
      IT_NOTAS_FISCAIS: KeyInvoiceMock.rightArrayOutput(),
      I_TRANSPORTADORA: ShippingCompanyMock.rightOutput(),
      I_COLETA: CargoPickupMock.rightOutput(),
      I_MOTORISTA: DriverMock.rightOutput(),
      I_PLACA: 'AAA1A1A',
      I_LACRE: 'A123456',
    };
  }

  public static errorRfcLib() {
    return {
      name: 'RfcLibError',
      group: 3,
      code: 2,
      codeString: 'RFC_LOGON_FAILURE',
      key: 'RFC_LOGON_FAILURE',
      message: 'Usuário sem permissão ou senha bloqueada',
    };
  }

  public static noLacreInput(): ConfirmationRequestDto {
    return {
      numeroCargaConsolidada: 'T-1111-Z1',
      cargas: CargoMock.rightArrayInput(),
      notasFiscais: KeyInvoiceMock.rightArrayInput(),
      transportadora: ShippingCompanyMock.rightInput(),
      coleta: CargoPickupMock.rightInput(),
      motorista: DriverMock.rightInput(),
      caminhao: {
        placa: 'AAA1A1A',
      },
    };
  }

  public static noLacreOutput(): Confirmation {
    return {
      I_NR_CARGA_CONSOLID: 'T-1111-Z1',
      IT_CARGAS: CargoMock.rightArrayOutput(),
      IT_NOTAS_FISCAIS: KeyInvoiceMock.rightArrayOutput(),
      I_TRANSPORTADORA: ShippingCompanyMock.rightOutput(),
      I_COLETA: CargoPickupMock.rightOutput(),
      I_MOTORISTA: DriverMock.rightOutput(),
      I_PLACA: 'AAA1A1A',
      I_LACRE: '',
    };
  }

  public static wrongInput(): ConfirmationRequestDto {
    return {
      numeroCargaConsolidada: 'T-1111-Z1',
      cargas: CargoMock.rightArrayInput(),
      notasFiscais: KeyInvoiceMock.rightArrayInput(),
      transportadora: ShippingCompanyMock.rightInput(),
      coleta: CargoPickupMock.rightInput(),
      motorista: DriverMock.rightInput(),
      caminhao: {
        placa: 'AAA1A1A',
      },
    };
  }
}
