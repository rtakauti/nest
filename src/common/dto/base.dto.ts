/* istanbul ignore file */

/**
 * Class that provides partial to its children classes
 */
export abstract class BaseDto<T> {
  /**
   * @constructor
   * @param {Partial<T>} partial
   */
  public constructor(partial?: Partial<T>) {
    Object.assign(this, partial);
  }
}
