import { ColorTileMat } from '#/id/position/colorTileMat';

describe('ColorTileMat', (): void => {
  const minX = 545;
  const minY = 45;
  const maxX = 955;
  const maxY = 455;
  const centerX = Math.floor((minX + maxX) / 2);
  const centerY = Math.floor((minY + maxY) / 2);

  const matrixMinX = minX + 10;
  const matrixMinY = minY + 8;
  const matrixMaxX = maxX - 8;
  const matrixMaxY = maxY - 9;
  const matrixRows = 9;
  const matrixColumns = 9;

  describe('tileColor', (): void => {
    test('Color Check', (): void => {
      expect(ColorTileMat.tileColor.white).toBe('#FFFFFF');
      expect(ColorTileMat.tileColor.red).toBe('#e85654');
      expect(ColorTileMat.tileColor.blue).toBe('#00aeca');
      expect(ColorTileMat.tileColor.green).toBe('#95ba25');
      expect(ColorTileMat.tileColor.yellow).toBe('#f0ac00');
    });
  });

  describe('tileColorMatrix', (): void => {
    const matrix = ColorTileMat.tileColorMatrix;
    const cW = ColorTileMat.tileColor.white;
    const cR = ColorTileMat.tileColor.red;
    const cB = ColorTileMat.tileColor.blue;
    const cG = ColorTileMat.tileColor.green;
    const cY = ColorTileMat.tileColor.yellow;

    test('Color Check', (): void => {
      expect(matrix[0][0]).toBe(cW);
      expect(matrix[0][1]).toBe(cB);
      expect(matrix[0][2]).toBe(cW);
      expect(matrix[0][3]).toBe(cY);
      expect(matrix[0][4]).toBe(cW);
      expect(matrix[0][5]).toBe(cR);
      expect(matrix[0][6]).toBe(cW);
      expect(matrix[0][7]).toBe(cR);
      expect(matrix[0][8]).toBe(cW);

      expect(matrix[1][0]).toBe(cG);
      expect(matrix[1][1]).toBe(cW);
      expect(matrix[1][2]).toBe(cR);
      expect(matrix[1][3]).toBe(cW);
      expect(matrix[1][4]).toBe(cB);
      expect(matrix[1][5]).toBe(cW);
      expect(matrix[1][6]).toBe(cB);
      expect(matrix[1][7]).toBe(cW);
      expect(matrix[1][8]).toBe(cY);

      expect(matrix[2][0]).toBe(cW);
      expect(matrix[2][1]).toBe(cY);
      expect(matrix[2][2]).toBe(cW);
      expect(matrix[2][3]).toBe(cY);
      expect(matrix[2][4]).toBe(cW);
      expect(matrix[2][5]).toBe(cG);
      expect(matrix[2][6]).toBe(cW);
      expect(matrix[2][7]).toBe(cG);
      expect(matrix[2][8]).toBe(cW);

      expect(matrix[3][0]).toBe(cB);
      expect(matrix[3][1]).toBe(cW);
      expect(matrix[3][2]).toBe(cG);
      expect(matrix[3][3]).toBe(cW);
      expect(matrix[3][4]).toBe(cR);
      expect(matrix[3][5]).toBe(cW);
      expect(matrix[3][6]).toBe(cB);
      expect(matrix[3][7]).toBe(cW);
      expect(matrix[3][8]).toBe(cR);

      expect(matrix[4][0]).toBe(cW);
      expect(matrix[4][1]).toBe(cR);
      expect(matrix[4][2]).toBe(cW);
      expect(matrix[4][3]).toBe(cY);
      expect(matrix[4][4]).toBe(cW);
      expect(matrix[4][5]).toBe(cG);
      expect(matrix[4][6]).toBe(cW);
      expect(matrix[4][7]).toBe(cG);
      expect(matrix[4][8]).toBe(cW);

      expect(matrix[5][0]).toBe(cY);
      expect(matrix[5][1]).toBe(cW);
      expect(matrix[5][2]).toBe(cB);
      expect(matrix[5][3]).toBe(cW);
      expect(matrix[5][4]).toBe(cB);
      expect(matrix[5][5]).toBe(cW);
      expect(matrix[5][6]).toBe(cY);
      expect(matrix[5][7]).toBe(cW);
      expect(matrix[5][8]).toBe(cR);

      expect(matrix[6][0]).toBe(cW);
      expect(matrix[6][1]).toBe(cG);
      expect(matrix[6][2]).toBe(cW);
      expect(matrix[6][3]).toBe(cR);
      expect(matrix[6][4]).toBe(cW);
      expect(matrix[6][5]).toBe(cG);
      expect(matrix[6][6]).toBe(cW);
      expect(matrix[6][7]).toBe(cB);
      expect(matrix[6][8]).toBe(cW);

      expect(matrix[7][0]).toBe(cB);
      expect(matrix[7][1]).toBe(cW);
      expect(matrix[7][2]).toBe(cY);
      expect(matrix[7][3]).toBe(cW);
      expect(matrix[7][4]).toBe(cB);
      expect(matrix[7][5]).toBe(cW);
      expect(matrix[7][6]).toBe(cR);
      expect(matrix[7][7]).toBe(cW);
      expect(matrix[7][8]).toBe(cY);

      expect(matrix[8][0]).toBe(cW);
      expect(matrix[8][1]).toBe(cR);
      expect(matrix[8][2]).toBe(cW);
      expect(matrix[8][3]).toBe(cG);
      expect(matrix[8][4]).toBe(cW);
      expect(matrix[8][5]).toBe(cY);
      expect(matrix[8][6]).toBe(cW);
      expect(matrix[8][7]).toBe(cG);
      expect(matrix[8][8]).toBe(cW);
    });
  });

  describe('redTiles', (): void => {
    const redTiles = ColorTileMat.redTiles;

    test('Color Check', (): void => {
      expect(redTiles).toEqual(
        expect.arrayContaining([
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
        ]),
      );
    });
  });

  describe('blueTiles', (): void => {
    const blueTiles = ColorTileMat.blueTiles;

    test('Color Check', (): void => {
      expect(blueTiles).toEqual(
        expect.arrayContaining([
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
        ]),
      );
    });
  });

  describe('greenTiles', (): void => {
    const greenTiles = ColorTileMat.greenTiles;

    test('Color Check', (): void => {
      expect(greenTiles).toEqual(
        expect.arrayContaining([
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
        ]),
      );
    });
  });

  describe('yellowTiles', (): void => {
    const yellowTiles = ColorTileMat.yellowTiles;

    test('Color Check', (): void => {
      expect(yellowTiles).toEqual(
        expect.arrayContaining([
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
        ]),
      );
    });
  });

  describe('whiteTiles', (): void => {
    const whiteTiles = ColorTileMat.whiteTiles;

    test('Color Check', (): void => {
      expect(whiteTiles).toEqual(
        expect.arrayContaining([
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
        ]),
      );
    });
  });

  describe('isOnMat', (): void => {
    test('Normal Case', (): void => {
      expect(ColorTileMat.isOnMat(minX - 1, minY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(minX - 1, minY)).toBe(false);
      expect(ColorTileMat.isOnMat(minX - 1, minY + 1)).toBe(false);
      expect(ColorTileMat.isOnMat(minX - 1, centerY)).toBe(false);
      expect(ColorTileMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(minX - 1, maxY)).toBe(false);
      expect(ColorTileMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

      expect(ColorTileMat.isOnMat(minX, minY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(minX, minY)).toBe(true);
      expect(ColorTileMat.isOnMat(minX, minY + 1)).toBe(true);
      expect(ColorTileMat.isOnMat(minX, centerY)).toBe(true);
      expect(ColorTileMat.isOnMat(minX, maxY - 1)).toBe(true);
      expect(ColorTileMat.isOnMat(minX, maxY)).toBe(true);
      expect(ColorTileMat.isOnMat(minX, maxY + 1)).toBe(false);

      expect(ColorTileMat.isOnMat(centerX, minY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(centerX, minY)).toBe(true);
      expect(ColorTileMat.isOnMat(centerX, minY + 1)).toBe(true);
      expect(ColorTileMat.isOnMat(centerX, centerY)).toBe(true);
      expect(ColorTileMat.isOnMat(centerX, maxY - 1)).toBe(true);
      expect(ColorTileMat.isOnMat(centerX, maxY)).toBe(true);
      expect(ColorTileMat.isOnMat(centerX, maxY + 1)).toBe(false);

      expect(ColorTileMat.isOnMat(maxX, minY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX, minY)).toBe(true);
      expect(ColorTileMat.isOnMat(maxX, minY + 1)).toBe(true);
      expect(ColorTileMat.isOnMat(maxX, centerY)).toBe(true);
      expect(ColorTileMat.isOnMat(maxX, maxY - 1)).toBe(true);
      expect(ColorTileMat.isOnMat(maxX, maxY)).toBe(true);
      expect(ColorTileMat.isOnMat(maxX, maxY + 1)).toBe(false);

      expect(ColorTileMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, minY)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, centerY)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, maxY)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
    });

    test('Illegal Case', (): void => {
      expect(ColorTileMat.isOnMat(undefined, minY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(undefined, minY)).toBe(false);
      expect(ColorTileMat.isOnMat(undefined, minY + 1)).toBe(false);
      expect(ColorTileMat.isOnMat(undefined, centerY)).toBe(false);
      expect(ColorTileMat.isOnMat(undefined, maxY - 1)).toBe(false);
      expect(ColorTileMat.isOnMat(undefined, maxY)).toBe(false);
      expect(ColorTileMat.isOnMat(undefined, maxY + 1)).toBe(false);

      expect(ColorTileMat.isOnMat(minX - 1, undefined)).toBe(false);
      expect(ColorTileMat.isOnMat(minX, undefined)).toBe(false);
      expect(ColorTileMat.isOnMat(centerX, undefined)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX, undefined)).toBe(false);
      expect(ColorTileMat.isOnMat(maxX + 1, undefined)).toBe(false);
    });
  });

  describe('getTileCenter', (): void => {
    test('Normal case', (): void => {
      expect(ColorTileMat.getTileCenter(0, 0)).toMatchObject({
        x: (matrixMaxX - matrixMinX) / (2 * matrixColumns) + matrixMinX,
        y: (matrixMaxY - matrixMinY) / (2 * matrixRows) + matrixMinY,
      });
      expect(ColorTileMat.getTileCenter(4, 4)).toMatchObject({
        x: (matrixColumns * (matrixMaxX - matrixMinX)) / (2 * matrixColumns) + matrixMinX,
        y: (matrixRows * (matrixMaxY - matrixMinY)) / (2 * matrixRows) + matrixMinY,
      });

      expect(
        ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.x,
      ).toBeGreaterThanOrEqual(matrixMaxX - (matrixMaxX - matrixMinX) / (2 * matrixColumns) - 1);
      expect(ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.x).toBeLessThanOrEqual(
        matrixMaxX - (matrixMaxX - matrixMinX) / (2 * matrixColumns) + 1,
      );

      expect(
        ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.y,
      ).toBeGreaterThanOrEqual(matrixMaxY - (matrixMaxY - matrixMinY) / (2 * matrixRows) - 1);
      expect(ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.y).toBeLessThanOrEqual(
        matrixMaxY - (matrixMaxY - matrixMinY) / (2 * matrixRows) + 1,
      );
    });

    test('Illegal case', (): void => {
      expect(ColorTileMat.getTileCenter(undefined, Math.floor(matrixColumns / 2))).toBe(undefined);
      expect(ColorTileMat.getTileCenter(Math.floor(matrixRows / 2), undefined)).toBe(undefined);
      expect(ColorTileMat.getTileCenter(undefined, undefined)).toBe(undefined);

      expect(ColorTileMat.getTileCenter(-1, Math.floor(matrixColumns / 2))).toBe(undefined);
      expect(ColorTileMat.getTileCenter(matrixRows, Math.floor(matrixColumns / 2))).toBe(undefined);
      expect(ColorTileMat.getTileCenter(Math.floor(matrixRows / 2), -1)).toBe(undefined);
      expect(ColorTileMat.getTileCenter(Math.floor(matrixRows / 2), matrixColumns)).toBe(undefined);
    });
  });

  describe('getTileMatrixIndex', (): void => {
    test('Normal case', (): void => {
      expect(ColorTileMat.getTileMatrixIndex(matrixMinX, matrixMaxY)).toMatchObject({
        row: matrixRows - 1,
        column: 0,
      });
      expect(ColorTileMat.getTileMatrixIndex(centerX, centerY)).toMatchObject({
        row: Math.floor(matrixRows / 2),
        column: Math.floor(matrixColumns / 2),
      });
      expect(ColorTileMat.getTileMatrixIndex(matrixMaxX, matrixMinY)).toMatchObject({
        row: 0,
        column: matrixColumns - 1,
      });
    });

    test('Illegal case', (): void => {
      expect(ColorTileMat.getTileMatrixIndex(undefined, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(centerX, undefined)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(undefined, undefined)).toBe(undefined);

      expect(ColorTileMat.getTileMatrixIndex(minX - 1, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(minX, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(matrixMinX - 1, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(matrixMaxX + 1, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(maxX, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(maxX + 1, centerY)).toBe(undefined);

      expect(ColorTileMat.getTileMatrixIndex(centerX, minY - 1)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(centerX, minY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(centerX, matrixMinY - 1)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(centerX, matrixMaxY + 1)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(centerX, maxY)).toBe(undefined);
      expect(ColorTileMat.getTileMatrixIndex(centerX, maxY + 1)).toBe(undefined);
    });
  });

  describe('getTileRow', (): void => {
    test('Check some y values', (): void => {
      expect(ColorTileMat.getTileRow(undefined)).toBe(undefined);
      expect(ColorTileMat.getTileRow(minY - 1)).toBe(undefined);
      expect(ColorTileMat.getTileRow(minY)).toBe(undefined);
      expect(ColorTileMat.getTileRow(matrixMinY - 1)).toBe(undefined);
      expect(ColorTileMat.getTileRow(matrixMinY)).toBe(0);
      expect(ColorTileMat.getTileRow(centerY)).toBe(Math.floor(matrixRows / 2));
      expect(ColorTileMat.getTileRow(matrixMaxY)).toBe(matrixRows - 1);
      expect(ColorTileMat.getTileRow(matrixMaxY + 1)).toBe(undefined);
      expect(ColorTileMat.getTileRow(maxY)).toBe(undefined);
      expect(ColorTileMat.getTileRow(maxY + 1)).toBe(undefined);
    });
  });

  describe('getTileColumn', (): void => {
    test('Check some x values', (): void => {
      expect(ColorTileMat.getTileColumn(undefined)).toBe(undefined);
      expect(ColorTileMat.getTileColumn(minX - 1)).toBe(undefined);
      expect(ColorTileMat.getTileColumn(minX)).toBe(undefined);
      expect(ColorTileMat.getTileColumn(matrixMinX - 1)).toBe(undefined);
      expect(ColorTileMat.getTileColumn(matrixMinX)).toBe(0);
      expect(ColorTileMat.getTileColumn(centerX)).toBe(Math.floor(matrixColumns / 2));
      expect(ColorTileMat.getTileColumn(matrixMaxX)).toBe(matrixColumns - 1);
      expect(ColorTileMat.getTileColumn(matrixMaxX + 1)).toBe(undefined);
      expect(ColorTileMat.getTileColumn(maxX)).toBe(undefined);
      expect(ColorTileMat.getTileColumn(maxX + 1)).toBe(undefined);
    });
  });

  describe('getTileColor', (): void => {
    const cW = ColorTileMat.tileColor.white;
    const cR = ColorTileMat.tileColor.red;
    const cB = ColorTileMat.tileColor.blue;
    const cG = ColorTileMat.tileColor.green;
    const cY = ColorTileMat.tileColor.yellow;

    test('Normal Case', (): void => {
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 0)?.x,
          ColorTileMat.getTileCenter(0, 0)?.y,
        ),
      ).toBe(cW);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 1)?.x,
          ColorTileMat.getTileCenter(0, 1)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 2)?.x,
          ColorTileMat.getTileCenter(0, 2)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 3)?.x,
          ColorTileMat.getTileCenter(0, 3)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 4)?.x,
          ColorTileMat.getTileCenter(0, 4)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 5)?.x,
          ColorTileMat.getTileCenter(0, 5)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 6)?.x,
          ColorTileMat.getTileCenter(0, 6)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 7)?.x,
          ColorTileMat.getTileCenter(0, 7)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(0, 8)?.x,
          ColorTileMat.getTileCenter(0, 8)?.y,
        ),
      ).toBe(cW);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 0)?.x,
          ColorTileMat.getTileCenter(1, 0)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 1)?.x,
          ColorTileMat.getTileCenter(1, 1)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 2)?.x,
          ColorTileMat.getTileCenter(1, 2)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 3)?.x,
          ColorTileMat.getTileCenter(1, 3)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 4)?.x,
          ColorTileMat.getTileCenter(1, 4)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 5)?.x,
          ColorTileMat.getTileCenter(1, 5)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 6)?.x,
          ColorTileMat.getTileCenter(1, 6)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 7)?.x,
          ColorTileMat.getTileCenter(1, 7)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(1, 8)?.x,
          ColorTileMat.getTileCenter(1, 8)?.y,
        ),
      ).toBe(cY);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 0)?.x,
          ColorTileMat.getTileCenter(2, 0)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 1)?.x,
          ColorTileMat.getTileCenter(2, 1)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 2)?.x,
          ColorTileMat.getTileCenter(2, 2)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 3)?.x,
          ColorTileMat.getTileCenter(2, 3)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 4)?.x,
          ColorTileMat.getTileCenter(2, 4)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 5)?.x,
          ColorTileMat.getTileCenter(2, 5)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 6)?.x,
          ColorTileMat.getTileCenter(2, 6)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 7)?.x,
          ColorTileMat.getTileCenter(2, 7)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(2, 8)?.x,
          ColorTileMat.getTileCenter(2, 8)?.y,
        ),
      ).toBe(cW);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 0)?.x,
          ColorTileMat.getTileCenter(3, 0)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 1)?.x,
          ColorTileMat.getTileCenter(3, 1)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 2)?.x,
          ColorTileMat.getTileCenter(3, 2)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 3)?.x,
          ColorTileMat.getTileCenter(3, 3)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 4)?.x,
          ColorTileMat.getTileCenter(3, 4)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 5)?.x,
          ColorTileMat.getTileCenter(3, 5)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 6)?.x,
          ColorTileMat.getTileCenter(3, 6)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 7)?.x,
          ColorTileMat.getTileCenter(3, 7)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(3, 8)?.x,
          ColorTileMat.getTileCenter(3, 8)?.y,
        ),
      ).toBe(cR);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 0)?.x,
          ColorTileMat.getTileCenter(4, 0)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 1)?.x,
          ColorTileMat.getTileCenter(4, 1)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 2)?.x,
          ColorTileMat.getTileCenter(4, 2)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 3)?.x,
          ColorTileMat.getTileCenter(4, 3)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 4)?.x,
          ColorTileMat.getTileCenter(4, 4)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 5)?.x,
          ColorTileMat.getTileCenter(4, 5)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 6)?.x,
          ColorTileMat.getTileCenter(4, 6)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 7)?.x,
          ColorTileMat.getTileCenter(4, 7)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(4, 8)?.x,
          ColorTileMat.getTileCenter(4, 8)?.y,
        ),
      ).toBe(cW);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 0)?.x,
          ColorTileMat.getTileCenter(5, 0)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 1)?.x,
          ColorTileMat.getTileCenter(5, 1)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 2)?.x,
          ColorTileMat.getTileCenter(5, 2)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 3)?.x,
          ColorTileMat.getTileCenter(5, 3)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 4)?.x,
          ColorTileMat.getTileCenter(5, 4)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 5)?.x,
          ColorTileMat.getTileCenter(5, 5)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 6)?.x,
          ColorTileMat.getTileCenter(5, 6)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 7)?.x,
          ColorTileMat.getTileCenter(5, 7)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(5, 8)?.x,
          ColorTileMat.getTileCenter(5, 8)?.y,
        ),
      ).toBe(cR);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 0)?.x,
          ColorTileMat.getTileCenter(6, 0)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 1)?.x,
          ColorTileMat.getTileCenter(6, 1)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 2)?.x,
          ColorTileMat.getTileCenter(6, 2)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 3)?.x,
          ColorTileMat.getTileCenter(6, 3)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 4)?.x,
          ColorTileMat.getTileCenter(6, 4)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 5)?.x,
          ColorTileMat.getTileCenter(6, 5)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 6)?.x,
          ColorTileMat.getTileCenter(6, 6)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 7)?.x,
          ColorTileMat.getTileCenter(6, 7)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(6, 8)?.x,
          ColorTileMat.getTileCenter(6, 8)?.y,
        ),
      ).toBe(cW);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 0)?.x,
          ColorTileMat.getTileCenter(7, 0)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 1)?.x,
          ColorTileMat.getTileCenter(7, 1)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 2)?.x,
          ColorTileMat.getTileCenter(7, 2)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 3)?.x,
          ColorTileMat.getTileCenter(7, 3)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 4)?.x,
          ColorTileMat.getTileCenter(7, 4)?.y,
        ),
      ).toBe(cB);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 5)?.x,
          ColorTileMat.getTileCenter(7, 5)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 6)?.x,
          ColorTileMat.getTileCenter(7, 6)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 7)?.x,
          ColorTileMat.getTileCenter(7, 7)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(7, 8)?.x,
          ColorTileMat.getTileCenter(7, 8)?.y,
        ),
      ).toBe(cY);

      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 0)?.x,
          ColorTileMat.getTileCenter(8, 0)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 1)?.x,
          ColorTileMat.getTileCenter(8, 1)?.y,
        ),
      ).toBe(cR);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 2)?.x,
          ColorTileMat.getTileCenter(8, 2)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 3)?.x,
          ColorTileMat.getTileCenter(8, 3)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 4)?.x,
          ColorTileMat.getTileCenter(8, 4)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 5)?.x,
          ColorTileMat.getTileCenter(8, 5)?.y,
        ),
      ).toBe(cY);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 6)?.x,
          ColorTileMat.getTileCenter(8, 6)?.y,
        ),
      ).toBe(cW);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 7)?.x,
          ColorTileMat.getTileCenter(8, 7)?.y,
        ),
      ).toBe(cG);
      expect(
        ColorTileMat.getTileColor(
          ColorTileMat.getTileCenter(8, 8)?.x,
          ColorTileMat.getTileCenter(8, 8)?.y,
        ),
      ).toBe(cW);
    });

    test('Illegal Case', (): void => {
      expect(ColorTileMat.getTileColor(undefined, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(centerX, undefined)).toBe(undefined);
      expect(ColorTileMat.getTileColor(undefined, undefined)).toBe(undefined);

      expect(ColorTileMat.getTileColor(minX - 1, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(minX, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(matrixMinX - 1, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(matrixMaxX + 1, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(maxX, centerY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(maxX + 1, centerY)).toBe(undefined);

      expect(ColorTileMat.getTileColor(centerX, minY - 1)).toBe(undefined);
      expect(ColorTileMat.getTileColor(centerX, minY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(centerX, matrixMinY - 1)).toBe(undefined);
      expect(ColorTileMat.getTileColor(centerX, matrixMaxY + 1)).toBe(undefined);
      expect(ColorTileMat.getTileColor(centerX, maxY)).toBe(undefined);
      expect(ColorTileMat.getTileColor(centerX, maxY + 1)).toBe(undefined);
    });
  });
});
