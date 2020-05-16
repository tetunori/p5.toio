class RingMat extends Mat {
  // Override
  public static readonly minX = 45;
  public static readonly minY = 45;
  public static readonly maxX = 455;
  public static readonly maxY = 455;
  public static readonly centerX = 250;
  public static readonly centerY = 250;

  // Original
  public static readonly radius = 190;
  public static readonly blueLineY = 88;
  public static readonly greenLineY = 410;
  public static readonly startPointBlueSideX = 250;
  public static readonly startPointBlueSideY = 198;
  public static readonly startPointGreenSideX = 250;
  public static readonly startPointGreenSideY = 300;

  /**
   * Specified coordinate is inside of the circle of toio Collection ring mat or not.
   *
   * @param x X coordinate of checking target point.
   * @param y Y coordinate of checking target point.
   *
   * @returns true iff specified (x, y) is inside of the circle.
   */
  public static isInsideCircle(x: number, y: number): boolean {
    const diffX = x - this.centerX;
    const diffY = y - this.centerY;
    const distanceFromCenter = Math.sqrt(diffX * diffX + diffY * diffY);
    if (distanceFromCenter < this.radius) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Specified coordinate is in front of the blue line of toio Collection ring mat or not.
   *
   * @param x X coordinate of checking target point.
   * @param y Y coordinate of checking target point.
   *
   * @returns true iff specified (x, y) is in front of the blue line.
   */
  public static isInFrontOfBlueLine(y: number): boolean {
    if (y < this.blueLineY) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Specified coordinate is in front of the green line of toio Collection ring mat or not.
   *
   * @param x X coordinate of checking target point.
   * @param y Y coordinate of checking target point.
   *
   * @returns true iff specified (x, y) is in front of the green line.
   */
  public static isInFrontOfGreenLine(y: number): boolean {
    if (y > this.greenLineY) {
      return false;
    } else {
      return true;
    }
  }
}
