import { TileMat } from './tileMat';
export class ColorTileMat extends TileMat {
  // Override
  public static readonly minX = 545;
  public static readonly minY = 45;
  public static readonly maxX = 955;
  public static readonly maxY = 455;
  public static readonly centerX = 750;
  public static readonly centerY = 250;

  public static readonly matrixMinX = 555;
  public static readonly matrixMinY = 53;
  public static readonly matrixMaxX = 947;
  public static readonly matrixMaxY = 446;
  public static readonly matrixRows = 9;
  public static readonly matrixColumns = 9;

  /**
   * toio Collection tile color names.
   */
  public static readonly tileColor = {
    white: '#FFFFFF',
    red: '#e85654',
    blue: '#00aeca',
    green: '#95ba25',
    yellow: '#f0ac00',
  } as const;

  private static readonly cW = ColorTileMat.tileColor.white;
  private static readonly cR = ColorTileMat.tileColor.red;
  private static readonly cB = ColorTileMat.tileColor.blue;
  private static readonly cG = ColorTileMat.tileColor.green;
  private static readonly cY = ColorTileMat.tileColor.yellow;

  /**
   * toio Collection tile color matrix.
   */
  public static tileColorMatrix = [
    [
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cR,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cR,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
    ],
    [
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cB,
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cY,
    ],
    [
      ColorTileMat.cW,
      ColorTileMat.cR,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
      ColorTileMat.cY,
      ColorTileMat.cW,
      ColorTileMat.cG,
      ColorTileMat.cW,
    ],
  ];

  public static redTiles = [
    { row: 0, column: 5 },
    { row: 0, column: 7 },
    { row: 1, column: 2 },
    { row: 3, column: 4 },
    { row: 3, column: 8 },
    { row: 4, column: 1 },
    { row: 5, column: 8 },
    { row: 6, column: 3 },
    { row: 7, column: 6 },
    { row: 8, column: 1 },
  ];

  public static blueTiles = [
    { row: 0, column: 1 },
    { row: 1, column: 4 },
    { row: 1, column: 6 },
    { row: 3, column: 0 },
    { row: 3, column: 6 },
    { row: 5, column: 2 },
    { row: 5, column: 4 },
    { row: 6, column: 7 },
    { row: 7, column: 0 },
    { row: 7, column: 4 },
  ];

  public static greenTiles = [
    { row: 1, column: 0 },
    { row: 2, column: 5 },
    { row: 2, column: 7 },
    { row: 3, column: 2 },
    { row: 4, column: 5 },
    { row: 4, column: 7 },
    { row: 6, column: 1 },
    { row: 6, column: 5 },
    { row: 8, column: 3 },
    { row: 8, column: 7 },
  ];

  public static yellowTiles = [
    { row: 0, column: 3 },
    { row: 1, column: 8 },
    { row: 2, column: 1 },
    { row: 2, column: 3 },
    { row: 4, column: 3 },
    { row: 5, column: 0 },
    { row: 5, column: 6 },
    { row: 7, column: 2 },
    { row: 7, column: 8 },
    { row: 8, column: 5 },
  ];

  public static whiteTiles = [
    { row: 0, column: 0 },
    { row: 0, column: 2 },
    { row: 0, column: 4 },
    { row: 0, column: 6 },
    { row: 0, column: 8 },
    { row: 1, column: 1 },
    { row: 1, column: 3 },
    { row: 1, column: 5 },
    { row: 1, column: 7 },
    { row: 2, column: 0 },
    { row: 2, column: 2 },
    { row: 2, column: 4 },
    { row: 2, column: 6 },
    { row: 2, column: 8 },
    { row: 3, column: 1 },
    { row: 3, column: 3 },
    { row: 3, column: 5 },
    { row: 3, column: 7 },
    { row: 4, column: 0 },
    { row: 4, column: 2 },
    { row: 4, column: 4 },
    { row: 4, column: 6 },
    { row: 4, column: 8 },
    { row: 5, column: 1 },
    { row: 5, column: 3 },
    { row: 5, column: 5 },
    { row: 5, column: 7 },
    { row: 6, column: 0 },
    { row: 6, column: 2 },
    { row: 6, column: 4 },
    { row: 6, column: 6 },
    { row: 6, column: 8 },
    { row: 7, column: 1 },
    { row: 7, column: 3 },
    { row: 7, column: 5 },
    { row: 7, column: 7 },
    { row: 8, column: 0 },
    { row: 8, column: 2 },
    { row: 8, column: 4 },
    { row: 8, column: 6 },
    { row: 8, column: 8 },
  ];

  /**
   * Get tile color of toio Collection.
   *
   * @param x X coordinate of checking target point.
   * @param y Y coordinate of checking target point.
   *
   * @returns tile color name string. If specified (x, y) is not on toio Collection tile mat, this function returns undefined.
   */
  public static getTileColor(x: number | undefined, y: number | undefined): string | undefined {
    const row = this.getTileRow(y);
    const column = this.getTileColumn(x);

    if (row !== undefined && column !== undefined) {
      return this.tileColorMatrix[row][column];
    } else {
      return undefined;
    }
  }
}
