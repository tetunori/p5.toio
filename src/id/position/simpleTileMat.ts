import { TileMat } from './tileMat';
export class SimpleTileMat extends TileMat {
  // Override
  public static readonly minX = 98;
  public static readonly minY = 142;
  public static readonly maxX = 402;
  public static readonly maxY = 358;
  public static readonly centerX = 250;
  public static readonly centerY = 250;

  public static readonly matrixMinX = 98;
  public static readonly matrixMinY = 142;
  public static readonly matrixMaxX = 402;
  public static readonly matrixMaxY = 358;
  public static readonly matrixRows = 5;
  public static readonly matrixColumns = 7;
}
