import { SimpleTileMat } from '#/id/position/simpleTileMat';

describe('SimpleTileMat', (): void => {
  const minX = 98;
  const minY = 142;
  const maxX = 402;
  const maxY = 358;
  const centerX = Math.floor((minX + maxX) / 2);
  const centerY = Math.floor((minY + maxY) / 2);

  const matrixMinX = minX;
  const matrixMinY = minY;
  const matrixMaxX = maxX;
  const matrixMaxY = maxY;
  const matrixRows = 5;
  const matrixColumns = 7;

  describe('isOnMat', (): void => {
    test('Normal Case', (): void => {
      expect(SimpleTileMat.isOnMat(minX - 1, minY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX - 1, minY)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX - 1, minY + 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX - 1, centerY)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX - 1, maxY)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

      expect(SimpleTileMat.isOnMat(minX, minY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX, minY)).toBe(true);
      expect(SimpleTileMat.isOnMat(minX, minY + 1)).toBe(true);
      expect(SimpleTileMat.isOnMat(minX, centerY)).toBe(true);
      expect(SimpleTileMat.isOnMat(minX, maxY - 1)).toBe(true);
      expect(SimpleTileMat.isOnMat(minX, maxY)).toBe(true);
      expect(SimpleTileMat.isOnMat(minX, maxY + 1)).toBe(false);

      expect(SimpleTileMat.isOnMat(centerX, minY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(centerX, minY)).toBe(true);
      expect(SimpleTileMat.isOnMat(centerX, minY + 1)).toBe(true);
      expect(SimpleTileMat.isOnMat(centerX, centerY)).toBe(true);
      expect(SimpleTileMat.isOnMat(centerX, maxY - 1)).toBe(true);
      expect(SimpleTileMat.isOnMat(centerX, maxY)).toBe(true);
      expect(SimpleTileMat.isOnMat(centerX, maxY + 1)).toBe(false);

      expect(SimpleTileMat.isOnMat(maxX, minY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX, minY)).toBe(true);
      expect(SimpleTileMat.isOnMat(maxX, minY + 1)).toBe(true);
      expect(SimpleTileMat.isOnMat(maxX, centerY)).toBe(true);
      expect(SimpleTileMat.isOnMat(maxX, maxY - 1)).toBe(true);
      expect(SimpleTileMat.isOnMat(maxX, maxY)).toBe(true);
      expect(SimpleTileMat.isOnMat(maxX, maxY + 1)).toBe(false);

      expect(SimpleTileMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, minY)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, centerY)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, maxY)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
    });

    test('Illegal Case', (): void => {
      expect(SimpleTileMat.isOnMat(undefined, minY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(undefined, minY)).toBe(false);
      expect(SimpleTileMat.isOnMat(undefined, minY + 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(undefined, centerY)).toBe(false);
      expect(SimpleTileMat.isOnMat(undefined, maxY - 1)).toBe(false);
      expect(SimpleTileMat.isOnMat(undefined, maxY)).toBe(false);
      expect(SimpleTileMat.isOnMat(undefined, maxY + 1)).toBe(false);

      expect(SimpleTileMat.isOnMat(minX - 1, undefined)).toBe(false);
      expect(SimpleTileMat.isOnMat(minX, undefined)).toBe(false);
      expect(SimpleTileMat.isOnMat(centerX, undefined)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX, undefined)).toBe(false);
      expect(SimpleTileMat.isOnMat(maxX + 1, undefined)).toBe(false);
    });
  });

  describe('getTileCenter', (): void => {
    test('Normal case', (): void => {
      expect(SimpleTileMat.getTileCenter(0, 0)).toMatchObject({
        x: (maxX - minX) / (2 * matrixColumns) + minX,
        y: (maxY - minY) / (2 * matrixRows) + minY,
      });
      expect(SimpleTileMat.getTileCenter(2, 3)).toMatchObject({
        x: (matrixColumns * (maxX - minX)) / (2 * matrixColumns) + minX,
        y: (matrixRows * (maxY - minY)) / (2 * matrixRows) + minY,
      });
      expect(SimpleTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)).toMatchObject({
        x: maxX - (maxX - minX) / (2 * matrixColumns),
        y: maxY - (maxY - minY) / (2 * matrixRows),
      });
    });

    test('Illegal case', (): void => {
      expect(SimpleTileMat.getTileCenter(undefined, Math.floor(matrixColumns / 2))).toBe(undefined);
      expect(SimpleTileMat.getTileCenter(Math.floor(matrixRows / 2), undefined)).toBe(undefined);
      expect(SimpleTileMat.getTileCenter(undefined, undefined)).toBe(undefined);

      expect(SimpleTileMat.getTileCenter(-1, Math.floor(matrixColumns / 2))).toBe(undefined);
      expect(SimpleTileMat.getTileCenter(matrixRows, Math.floor(matrixColumns / 2))).toBe(
        undefined,
      );
      expect(SimpleTileMat.getTileCenter(Math.floor(matrixRows / 2), -1)).toBe(undefined);
      expect(SimpleTileMat.getTileCenter(Math.floor(matrixRows / 2), matrixColumns)).toBe(
        undefined,
      );
    });
  });

  describe('getTileMatrixIndex', (): void => {
    test('Normal case', (): void => {
      expect(SimpleTileMat.getTileMatrixIndex(matrixMinX, matrixMaxY)).toMatchObject({
        row: matrixRows - 1,
        column: 0,
      });
      expect(SimpleTileMat.getTileMatrixIndex(centerX, centerY)).toMatchObject({
        row: Math.floor(matrixRows / 2),
        column: Math.floor(matrixColumns / 2),
      });
      expect(SimpleTileMat.getTileMatrixIndex(matrixMaxX, matrixMinY)).toMatchObject({
        row: 0,
        column: matrixColumns - 1,
      });
    });

    test('Illegal case', (): void => {
      expect(SimpleTileMat.getTileMatrixIndex(undefined, centerY)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(centerX, undefined)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(undefined, undefined)).toBe(undefined);

      expect(SimpleTileMat.getTileMatrixIndex(minX - 1, centerY)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(matrixMinX - 1, centerY)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(matrixMaxX + 1, centerY)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(maxX + 1, centerY)).toBe(undefined);

      expect(SimpleTileMat.getTileMatrixIndex(centerX, minY - 1)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(centerX, matrixMinY - 1)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(centerX, matrixMaxY + 1)).toBe(undefined);
      expect(SimpleTileMat.getTileMatrixIndex(centerX, maxY + 1)).toBe(undefined);
    });
  });

  describe('getTileRow', (): void => {
    test('Check some y values', (): void => {
      expect(SimpleTileMat.getTileRow(undefined)).toBe(undefined);
      expect(SimpleTileMat.getTileRow(minY - 1)).toBe(undefined);
      expect(SimpleTileMat.getTileRow(minY)).toBe(0);
      expect(SimpleTileMat.getTileRow(matrixMinY - 1)).toBe(undefined);
      expect(SimpleTileMat.getTileRow(matrixMinY)).toBe(0);
      expect(SimpleTileMat.getTileRow(centerY)).toBe(Math.floor(matrixRows / 2));
      expect(SimpleTileMat.getTileRow(matrixMaxY)).toBe(matrixRows - 1);
      expect(SimpleTileMat.getTileRow(matrixMaxY + 1)).toBe(undefined);
      expect(SimpleTileMat.getTileRow(maxY)).toBe(matrixRows - 1);
      expect(SimpleTileMat.getTileRow(maxY + 1)).toBe(undefined);
    });
  });

  describe('getTileColumn', (): void => {
    test('Check some x values', (): void => {
      expect(SimpleTileMat.getTileColumn(undefined)).toBe(undefined);
      expect(SimpleTileMat.getTileColumn(minX - 1)).toBe(undefined);
      expect(SimpleTileMat.getTileColumn(matrixMinX - 1)).toBe(undefined);
      expect(SimpleTileMat.getTileColumn(matrixMinX)).toBe(0);
      expect(SimpleTileMat.getTileColumn(centerX)).toBe(Math.floor(matrixColumns / 2));
      expect(SimpleTileMat.getTileColumn(matrixMaxX)).toBe(matrixColumns - 1);
      expect(SimpleTileMat.getTileColumn(matrixMaxX + 1)).toBe(undefined);
      expect(SimpleTileMat.getTileColumn(maxX + 1)).toBe(undefined);
    });
  });
});
