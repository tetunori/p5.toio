class TileMat extends Mat {
  public static readonly matrixMinX: number;
  public static readonly matrixMinY: number;
  public static readonly matrixMaxX: number;
  public static readonly matrixMaxY: number;
  public static readonly matrixRows: number;
  public static readonly matrixColumns: number;

  /**
   * Get center of the tile position.
   *
   * @param row Target row number.
   * @param column Target column number.
   *
   * @returns Center position x, y of the specified row/column. If specified row/column is invalid, this function returns undefined.
   */
  public static getTileCenter(
    row: number | undefined,
    column: number | undefined,
  ): { x: number; y: number } | undefined {
    if (row === undefined || column === undefined) {
      return undefined;
    }

    if (!this.isValidRow(row) || !this.isValidColumn(column)) {
      // Invalid row/column number
      return undefined;
    }

    const xUnit = (this.matrixMaxX - this.matrixMinX) / this.matrixColumns;
    const xOffset = this.matrixMinX + xUnit / 2;
    const yUnit = (this.matrixMaxY - this.matrixMinY) / this.matrixRows;
    const yOffset = this.matrixMinY + yUnit / 2;

    const x = xOffset + xUnit * column;
    const y = yOffset + yUnit * row;
    return { x: x, y: y };
  }

  /**
   * Get matrix index of simple play(tile) mat.
   *
   * @param x X coordinate of checking target point.
   * @param y Y coordinate of checking target point.
   *
   * @returns row/column numbers. If specified (x, y) is not on toio Collection tile mat, this function returns undefined.
   */
  public static getTileMatrixIndex(
    x: number | undefined,
    y: number | undefined,
  ): { row: number; column: number } | undefined {
    if (x === undefined || y === undefined) {
      return undefined;
    }

    const row = this.getTileRow(y);
    const column = this.getTileColumn(x);

    if (row === undefined || column === undefined) {
      return undefined;
    }

    if (!this.isValidRow(row) || !this.isValidColumn(column)) {
      // Invalid row/column number
      return undefined;
    }

    return { row: row, column: column };
  }

  /**
   * Get row index number of the tile matrix.
   *
   * @param y Y coordinate of checking target point.
   *
   * @returns Row index number.
   */
  public static getTileRow(y: number | undefined): number | undefined {
    if (y === undefined) {
      return undefined;
    }

    const row = Math.floor(
      ((y - this.matrixMinY) / (this.matrixMaxY - this.matrixMinY)) * this.matrixRows,
    );

    if (this.isValidRow(row)) {
      return row;
    } else {
      return undefined;
    }
  }

  /**
   * Get column index number of the tile matrix.
   *
   * @param x X coordinate of checking target point.
   *
   * @returns Column index number.
   */
  public static getTileColumn(x: number | undefined): number | undefined {
    if (x === undefined) {
      return undefined;
    }

    const column = Math.floor(
      ((x - this.matrixMinX) / (this.matrixMaxX - this.matrixMinX)) * this.matrixColumns,
    );

    if (this.isValidColumn(column)) {
      return column;
    } else {
      return undefined;
    }
  }

  /**
   * Specified row index number of the tile matrix is valid or not.
   *
   * @param row checking target row number.
   *
   * @returns boolean.
   */
  private static isValidRow(row: number): boolean {
    if (row < 0 || row > this.matrixRows - 1) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Specified column index number of the tile matrix is valid or not.
   *
   * @param column checking target column number.
   *
   * @returns boolean.
   */
  private static isValidColumn(column: number): boolean {
    if (column < 0 || column > this.matrixColumns - 1) {
      return false;
    } else {
      return true;
    }
  }
}
