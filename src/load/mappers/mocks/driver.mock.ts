/* istanbul ignore file */

import { DriverDto } from '../../dto';
import { Driver } from '../../interfaces';

export abstract class DriverMock {
  public static rightInput(): DriverDto {
    return {
      cpf: '12345678901',
      nomeCompleto: 'John Doe',
    };
  }

  public static rightOutput(): Driver {
    return {
      CPF: '12345678901',
      NOME: 'John Doe',
    };
  }
}
