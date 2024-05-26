import { KeyInvoiceMapper } from './key-invoice.mapper';
import { KeyInvoiceMock } from './mocks';

describe('KeyInvoiceMapper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(new KeyInvoiceMapper()).toBeDefined();
  });

  it('should be undefined', () => {
    expect(KeyInvoiceMapper.mapping(null)).toBeUndefined();
  });

  it('should convert all required fields', () => {
    expect(KeyInvoiceMapper.mapping(KeyInvoiceMock.rightInput())).toEqual(
      KeyInvoiceMock.rightOutput(),
    );
  });

  it('should convert all the items in the array', () => {
    expect(
      KeyInvoiceMapper.mappingArray(KeyInvoiceMock.rightArrayInput()),
    ).toEqual(KeyInvoiceMock.rightArrayOutput());
  });

  it('should return empty array for empty input', () => {
    expect(KeyInvoiceMapper.mappingArray([])).toEqual([]);
  });
});
