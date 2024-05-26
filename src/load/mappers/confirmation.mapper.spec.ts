import { ConfirmationMapper } from './confirmation.mapper';
import { ConfirmationMock } from './mocks';

describe('ConfirmationMapper', () => {
  it('should be defined', () => {
    expect(new ConfirmationMapper()).toBeDefined();
  });

  it('should be undefined', () => {
    expect(ConfirmationMapper.mapping(null)).toBeUndefined();
  });

  it('should convert all required fields', () => {
    expect(ConfirmationMapper.mapping(ConfirmationMock.rightInput())).toEqual(
      ConfirmationMock.rightOutput(),
    );
  });

  it('should convert all required fields less lacre', () => {
    expect(ConfirmationMapper.mapping(ConfirmationMock.noLacreInput())).toEqual(
      ConfirmationMock.noLacreOutput(),
    );
  });
});
