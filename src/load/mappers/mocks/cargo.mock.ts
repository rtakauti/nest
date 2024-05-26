/* istanbul ignore file */

import { CargoDto } from '../../dto';
import { Cargo } from '../../interfaces';

export abstract class CargoMock {
  public static rightInput(): CargoDto {
    return {
      ordem: '001',
      numeroCarga: 'T-1112-Z3',
      numeroPedido: 'R-1113-Z3',
      protocoloCarga: '999999',
      protocoloPedido: '999999',
    };
  }

  public static rightOutput(): Cargo {
    return {
      ORDEM: '001',
      NR_CARGA: 'T-1112-Z3',
      NR_PEDIDO: 'R-1113-Z3',
      PROT_CARGA: '999999',
      PROT_PEDIDO: '999999',
    };
  }

  public static noProtocolInput(): CargoDto {
    return {
      ordem: '001',
      numeroCarga: 'T-1112-Z3',
      numeroPedido: 'R-1113-Z3',
    };
  }

  public static noProtocolOutput(): Cargo {
    return {
      ORDEM: '001',
      NR_CARGA: 'T-1112-Z3',
      NR_PEDIDO: 'R-1113-Z3',
      PROT_CARGA: '',
      PROT_PEDIDO: '',
    };
  }

  public static rightArrayInput(): CargoDto[] {
    return [
      {
        ordem: '001',
        numeroCarga: 'T-1112-Z3',
        numeroPedido: 'R-1113-Z3',
        protocoloCarga: '999999',
        protocoloPedido: '999999',
      },
      {
        ordem: '002',
        numeroCarga: 'T-1112-Z4',
        numeroPedido: 'R-1113-Z4',
        protocoloCarga: '999999',
        protocoloPedido: '999999',
      },
    ];
  }

  public static rightArrayOutput(): Cargo[] {
    return [
      {
        ORDEM: '001',
        NR_CARGA: 'T-1112-Z3',
        NR_PEDIDO: 'R-1113-Z3',
        PROT_CARGA: '999999',
        PROT_PEDIDO: '999999',
      },
      {
        ORDEM: '002',
        NR_CARGA: 'T-1112-Z4',
        NR_PEDIDO: 'R-1113-Z4',
        PROT_CARGA: '999999',
        PROT_PEDIDO: '999999',
      },
    ];
  }
}
