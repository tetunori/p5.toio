export class Mat {
  protected static minX: number;
  protected static minY: number;
  protected static maxX: number;
  protected static maxY: number;
  protected static centerX: number;
  protected static centerY: number;

  /**
   * Specified coordinate is on the mat or not.
   *
   * @param x X coordinate of checking target point.
   * @param y Y coordinate of checking target point.
   *
   * @returns true iff specified (x, y) is on this mat.
   */
  public static isOnMat(x: number | undefined, y: number | undefined): boolean {
    if (x === undefined || y === undefined) {
      return false;
    }

    if (x < this.minX || x > this.maxX) {
      return false;
    }

    if (y < this.minY || y > this.maxY) {
      return false;
    }

    return true;
  }
}
