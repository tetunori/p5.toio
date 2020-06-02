import { Mat } from '#/id/position/mat';

// Prepare
class TestClass extends Mat {
  public static readonly minX = 0;
  public static readonly minY = 0;
  public static readonly maxX = 200;
  public static readonly maxY = 200;
  public static readonly centerX = 100;
  public static readonly centerY = 100;
}

describe('Mat', (): void => {
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
});
