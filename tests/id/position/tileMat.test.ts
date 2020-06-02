import { TileMat } from '#/id/position/tileMat';

// Prepare
class TestClass extends TileMat {
  public static readonly minX = 0;
  public static readonly minY = 0;
  public static readonly maxX = 200;
  public static readonly maxY = 200;
  public static readonly centerX = 100;
  public static readonly centerY = 100;

  public static readonly matrixMinX = 10;
  public static readonly matrixMinY = 10;
  public static readonly matrixMaxX = 190;
  public static readonly matrixMaxY = 190;
  public static readonly matrixRows = 3;
  public static readonly matrixColumns = 3;
}

describe('TileMat', (): void => {
  describe('isOnMat', (): void => {
    test('Normal Case', (): void => {
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.minY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.minY)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.minY + 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.centerY)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.maxY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.maxY)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX - 1, TestClass.maxY + 1)).toBe(false);

      expect(TestClass.isOnMat(TestClass.minX, TestClass.minY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX, TestClass.minY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.minX, TestClass.minY + 1)).toBe(true);
      expect(TestClass.isOnMat(TestClass.minX, TestClass.centerY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.minX, TestClass.maxY - 1)).toBe(true);
      expect(TestClass.isOnMat(TestClass.minX, TestClass.maxY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.minX, TestClass.maxY + 1)).toBe(false);

      expect(TestClass.isOnMat(TestClass.centerX, TestClass.minY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.centerX, TestClass.minY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.centerX, TestClass.minY + 1)).toBe(true);
      expect(TestClass.isOnMat(TestClass.centerX, TestClass.centerY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.centerX, TestClass.maxY - 1)).toBe(true);
      expect(TestClass.isOnMat(TestClass.centerX, TestClass.maxY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.centerX, TestClass.maxY + 1)).toBe(false);

      expect(TestClass.isOnMat(TestClass.maxX, TestClass.minY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX, TestClass.minY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.maxX, TestClass.minY + 1)).toBe(true);
      expect(TestClass.isOnMat(TestClass.maxX, TestClass.centerY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.maxX, TestClass.maxY - 1)).toBe(true);
      expect(TestClass.isOnMat(TestClass.maxX, TestClass.maxY)).toBe(true);
      expect(TestClass.isOnMat(TestClass.maxX, TestClass.maxY + 1)).toBe(false);

      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.minY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.minY)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.minY + 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.centerY)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.maxY - 1)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.maxY)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, TestClass.maxY + 1)).toBe(false);
    });

    test('Illegal Case', (): void => {
      expect(TestClass.isOnMat(undefined, TestClass.minY - 1)).toBe(false);
      expect(TestClass.isOnMat(undefined, TestClass.minY)).toBe(false);
      expect(TestClass.isOnMat(undefined, TestClass.minY + 1)).toBe(false);
      expect(TestClass.isOnMat(undefined, TestClass.centerY)).toBe(false);
      expect(TestClass.isOnMat(undefined, TestClass.maxY - 1)).toBe(false);
      expect(TestClass.isOnMat(undefined, TestClass.maxY)).toBe(false);
      expect(TestClass.isOnMat(undefined, TestClass.maxY + 1)).toBe(false);

      expect(TestClass.isOnMat(TestClass.minX - 1, undefined)).toBe(false);
      expect(TestClass.isOnMat(TestClass.minX, undefined)).toBe(false);
      expect(TestClass.isOnMat(TestClass.centerX, undefined)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX, undefined)).toBe(false);
      expect(TestClass.isOnMat(TestClass.maxX + 1, undefined)).toBe(false);
    });
  });

  describe('getTileCenter', (): void => {
    test('Normal case', (): void => {
      expect(TestClass.getTileCenter(0, 0)).toMatchObject({
        x: 40,
        y: 40,
      });
      expect(TestClass.getTileCenter(2, 1)).toMatchObject({
        x: 100,
        y: 160,
      });
      expect(TestClass.getTileCenter(1, 2)).toMatchObject({
        x: 160,
        y: 100,
      });
    });

    test('Illegal case', (): void => {
      expect(TestClass.getTileCenter(undefined, Math.floor(TestClass.matrixRows / 2))).toBe(
        undefined,
      );
      expect(TestClass.getTileCenter(Math.floor(TestClass.matrixColumns / 2), undefined)).toBe(
        undefined,
      );
      expect(TestClass.getTileCenter(undefined, undefined)).toBe(undefined);

      expect(TestClass.getTileCenter(-1, Math.floor(TestClass.matrixRows / 2))).toBe(undefined);
      expect(
        TestClass.getTileCenter(TestClass.matrixColumns, Math.floor(TestClass.matrixRows / 2)),
      ).toBe(undefined);
      expect(TestClass.getTileCenter(Math.floor(TestClass.matrixColumns / 2), -1)).toBe(undefined);
      expect(
        TestClass.getTileCenter(Math.floor(TestClass.matrixColumns / 2), TestClass.matrixRows),
      ).toBe(undefined);
    });
  });

  describe('getTileMatrixIndex', (): void => {
    test('Normal case', (): void => {
      expect(
        TestClass.getTileMatrixIndex(TestClass.matrixMinX, TestClass.matrixMaxY),
      ).toMatchObject({
        row: 2,
        column: 0,
      });
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.centerY)).toMatchObject({
        row: 1,
        column: 1,
      });
      expect(
        TestClass.getTileMatrixIndex(TestClass.matrixMaxX, TestClass.matrixMinY),
      ).toMatchObject({
        row: 0,
        column: 2,
      });
    });

    test('Illegal case', (): void => {
      expect(TestClass.getTileMatrixIndex(undefined, TestClass.centerY)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, undefined)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(undefined, undefined)).toBe(undefined);

      expect(TestClass.getTileMatrixIndex(TestClass.minX - 1, TestClass.centerY)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.minX, TestClass.centerY)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.matrixMinX - 1, TestClass.centerY)).toBe(
        undefined,
      );
      expect(TestClass.getTileMatrixIndex(TestClass.matrixMaxX + 1, TestClass.centerY)).toBe(
        undefined,
      );
      expect(TestClass.getTileMatrixIndex(TestClass.maxX, TestClass.centerY)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.maxX + 1, TestClass.centerY)).toBe(undefined);

      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.minY - 1)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.minY)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.matrixMinY - 1)).toBe(
        undefined,
      );
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.matrixMaxY + 1)).toBe(
        undefined,
      );
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.maxY)).toBe(undefined);
      expect(TestClass.getTileMatrixIndex(TestClass.centerX, TestClass.maxY + 1)).toBe(undefined);
    });
  });

  describe('getTileRow', (): void => {
    test('Check some y values', (): void => {
      expect(TestClass.getTileRow(undefined)).toBe(undefined);
      expect(TestClass.getTileRow(TestClass.minY - 1)).toBe(undefined);
      expect(TestClass.getTileRow(TestClass.minY)).toBe(undefined);
      expect(TestClass.getTileRow(TestClass.matrixMinY - 1)).toBe(undefined);
      expect(TestClass.getTileRow(TestClass.matrixMinY)).toBe(0);
      expect(TestClass.getTileRow(TestClass.centerY)).toBe(Math.floor(TestClass.matrixRows / 2));
      expect(TestClass.getTileRow(TestClass.matrixMaxY)).toBe(TestClass.matrixRows - 1);
      expect(TestClass.getTileRow(TestClass.matrixMaxY + 1)).toBe(undefined);
      expect(TestClass.getTileRow(TestClass.maxY)).toBe(undefined);
      expect(TestClass.getTileRow(TestClass.maxY + 1)).toBe(undefined);
    });
  });

  describe('getTileColumn', (): void => {
    test('Check some x values', (): void => {
      expect(TestClass.getTileColumn(undefined)).toBe(undefined);
      expect(TestClass.getTileColumn(TestClass.minX - 1)).toBe(undefined);
      expect(TestClass.getTileColumn(TestClass.minX)).toBe(undefined);
      expect(TestClass.getTileColumn(TestClass.matrixMinX - 1)).toBe(undefined);
      expect(TestClass.getTileColumn(TestClass.matrixMinX)).toBe(0);
      expect(TestClass.getTileColumn(TestClass.centerX)).toBe(
        Math.floor(TestClass.matrixColumns / 2),
      );
      expect(TestClass.getTileColumn(TestClass.matrixMaxX)).toBe(TestClass.matrixColumns - 1);
      expect(TestClass.getTileColumn(TestClass.matrixMaxX + 1)).toBe(undefined);
      expect(TestClass.getTileColumn(TestClass.maxX)).toBe(undefined);
      expect(TestClass.getTileColumn(TestClass.maxX + 1)).toBe(undefined);
    });
  });
});
