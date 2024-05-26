import { CargoMapper } from './cargo.mapper';
import { CargoMock } from './mocks';

describe('CargoMapper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(new CargoMapper()).toBeDefined();
  });

  it('should be undefined', () => {
    expect(CargoMapper.mapping(null)).toBeUndefined();
  });

  it('should convert all required fields', () => {
    expect(CargoMapper.mapping(CargoMock.rightInput())).toEqual(
      CargoMock.rightOutput(),
    );
  });

  it('should convert all required fields less protocols', () => {
    expect(CargoMapper.mapping(CargoMock.noProtocolInput())).toEqual(
      CargoMock.noProtocolOutput(),
    );
  });

  it('should convert all the items in the array', () => {
    expect(CargoMapper.mappingArray(CargoMock.rightArrayInput())).toEqual(
      CargoMock.rightArrayOutput(),
    );
  });

  it('should return empty array for empty input', () => {
    expect(CargoMapper.mappingArray([])).toEqual([]);
  });
});
