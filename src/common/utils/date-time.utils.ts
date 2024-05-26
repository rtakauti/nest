import { format, isValid, parse } from 'date-fns';

/**
 * Date Time Utilities
 */
export abstract class DateTimeUtils {
  public static readonly FROM_DATE: string = 'yyyy-MM-dd';
  public static readonly TO_DATE: string = 'yyyyMMdd';
  public static readonly FROM_TIME: string = 'HH:mm:ss';
  public static readonly TO_TIME: string = 'HHmmss';

  public static formatDate(date: string): string | undefined {
    return this.formatDateTime(date, this.FROM_DATE, this.TO_DATE);
  }

  public static formatTime(time: string): string | undefined {
    return this.formatDateTime(time, this.FROM_TIME, this.TO_TIME);
  }

  /**
   * Format Date and Time
   * @param {string} date
   * @param {string} formatIn
   * @param {string} formatOut
   * @returns {string | undefined}
   */
  private static formatDateTime(
    date: string,
    formatIn: string,
    formatOut: string,
  ): string | undefined {
    if (!date) {
      return undefined;
    }
    const parsedDate = parse(date, formatIn, new Date());

    if (!isValid(parsedDate)) {
      return undefined;
    }

    return format(parsedDate, formatOut);
  }
}
