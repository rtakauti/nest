import { DriverMapper } from './driver.mapper';
import { DriverMock } from './mocks';

describe('DriverMapper', () => {
  it('should be defined', () => {
    expect(new DriverMapper()).toBeDefined();
  });

  it('should be undefined', () => {
    expect(DriverMapper.mapping(null)).toBeUndefined();
  });

  it('should convert all required fields', () => {
    expect(DriverMapper.mapping(DriverMock.rightInput())).toEqual(
      DriverMock.rightOutput(),
    );
  });
});
