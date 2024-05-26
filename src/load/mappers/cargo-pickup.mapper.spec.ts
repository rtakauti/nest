import { CargoPickupMapper } from './cargo-pickup.mapper';
import { CargoPickupMock } from './mocks';

describe('CargoPickupMapper', () => {
  it('should be defined', () => {
    expect(CargoPickupMapper).toBeDefined();
  });

  it('should be undefined', () => {
    expect(CargoPickupMapper.mapping(null)).toBeUndefined();
  });

  it('should convert all required fields', () => {
    expect(CargoPickupMapper.mapping(CargoPickupMock.rightInput())).toEqual(
      CargoPickupMock.rightOutput(),
    );
  });
});
