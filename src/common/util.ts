export class CubeUtil {
  /**
   * Clip and modify a specified number as it is in 0-255 integer value.
   *
   * @param number Clipping target value.
   */
  static clipNumberUInt8(num: number): number {
    if (num < 0) {
      return 0;
    }
    if (num > 255) {
      return 255;
    }
    return Math.floor(num);
  }

  /**
   * Clip and modify a specified number as it is in 0-65535 integer value.
   *
   * @param number Clipping target value.
   */
  static clipNumberUInt16(num: number): number {
    if (num < 0) {
      return 0;
    }
    if (num > 65535) {
      return 65535;
    }
    return Math.floor(num);
  }
}
