import { DateTimeUtils } from './date-time.utils';

const mockDate = '2021-12-31';
const mockInvalidDate = '00000000';
const mockDateFormatted = '20211231';

const mockTime = '18:00:00';
const mockInvalidTime = '000000';
const mockTimeFormatted = '180000';

describe('DateTimeUtils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test.each([
    [null, undefined],
    [mockInvalidDate, undefined],
    [mockDate, mockDateFormatted],
  ])('should format date as expected %s => %s', (current, expected) => {
    expect(DateTimeUtils.formatDate(current)).toBe(expected);
  });

  test.each([
    [null, undefined],
    [mockInvalidTime, undefined],
    [mockTime, mockTimeFormatted],
  ])('should format time as expected %s => %s', (current, expected) => {
    expect(DateTimeUtils.formatTime(current)).toBe(expected);
  });
});
