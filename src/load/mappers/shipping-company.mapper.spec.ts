import { ShippingCompanyMapper } from './shipping-company.mapper';
import { ShippingCompanyMock } from './mocks';

describe('ShippingCompanyMapper', () => {
  it('should be defined', () => {
    expect(new ShippingCompanyMapper()).toBeDefined();
  });

  it('should be undefined', () => {
    expect(ShippingCompanyMapper.mapping(null)).toBeUndefined();
  });

  it('should convert all required fields', () => {
    expect(
      ShippingCompanyMapper.mapping(ShippingCompanyMock.rightInput()),
    ).toEqual(ShippingCompanyMock.rightOutput());
  });
});
