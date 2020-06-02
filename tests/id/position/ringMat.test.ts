import { RingMat } from '#/id/position/ringMat';

describe('RingMat', (): void => {
  const minX = 45;
  const minY = 45;
  const maxX = 455;
  const maxY = 455;
  const centerX = Math.floor((minX + maxX) / 2);
  const centerY = Math.floor((minY + maxY) / 2);

  const radius = 190;
  const blueLineY = 88;
  const greenLineY = 410;
  const startPointBlueSideX = 250;
  const startPointBlueSideY = 198;
  const startPointGreenSideX = 250;
  const startPointGreenSideY = 300;

  describe('Property', (): void => {
    test('All Check', (): void => {
      expect(RingMat.minX).toBe(minX);
      expect(RingMat.minY).toBe(minY);
      expect(RingMat.maxX).toBe(maxX);
      expect(RingMat.maxY).toBe(maxY);
      expect(RingMat.centerX).toBeGreaterThanOrEqual(centerX - 1);
      expect(RingMat.centerX).toBeLessThanOrEqual(centerX + 1);
      expect(RingMat.centerY).toBeGreaterThanOrEqual(centerY - 1);
      expect(RingMat.centerY).toBeLessThanOrEqual(centerY + 1);

      expect(RingMat.radius).toBe(radius);
      expect(RingMat.blueLineY).toBe(blueLineY);
      expect(RingMat.greenLineY).toBe(greenLineY);
      expect(RingMat.startPointBlueSideX).toBe(startPointBlueSideX);
      expect(RingMat.startPointBlueSideY).toBe(startPointBlueSideY);
      expect(RingMat.startPointGreenSideX).toBe(startPointGreenSideX);
      expect(RingMat.startPointGreenSideY).toBe(startPointGreenSideY);
    });
  });

  describe('isOnMat', (): void => {
    test('Normal Case', (): void => {
      expect(RingMat.isOnMat(minX - 1, minY - 1)).toBe(false);
      expect(RingMat.isOnMat(minX - 1, minY)).toBe(false);
      expect(RingMat.isOnMat(minX - 1, minY + 1)).toBe(false);
      expect(RingMat.isOnMat(minX - 1, centerY)).toBe(false);
      expect(RingMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
      expect(RingMat.isOnMat(minX - 1, maxY)).toBe(false);
      expect(RingMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

      expect(RingMat.isOnMat(minX, minY - 1)).toBe(false);
      expect(RingMat.isOnMat(minX, minY)).toBe(true);
      expect(RingMat.isOnMat(minX, minY + 1)).toBe(true);
      expect(RingMat.isOnMat(minX, centerY)).toBe(true);
      expect(RingMat.isOnMat(minX, maxY - 1)).toBe(true);
      expect(RingMat.isOnMat(minX, maxY)).toBe(true);
      expect(RingMat.isOnMat(minX, maxY + 1)).toBe(false);

      expect(RingMat.isOnMat(centerX, minY - 1)).toBe(false);
      expect(RingMat.isOnMat(centerX, minY)).toBe(true);
      expect(RingMat.isOnMat(centerX, minY + 1)).toBe(true);
      expect(RingMat.isOnMat(centerX, centerY)).toBe(true);
      expect(RingMat.isOnMat(centerX, maxY - 1)).toBe(true);
      expect(RingMat.isOnMat(centerX, maxY)).toBe(true);
      expect(RingMat.isOnMat(centerX, maxY + 1)).toBe(false);

      expect(RingMat.isOnMat(maxX, minY - 1)).toBe(false);
      expect(RingMat.isOnMat(maxX, minY)).toBe(true);
      expect(RingMat.isOnMat(maxX, minY + 1)).toBe(true);
      expect(RingMat.isOnMat(maxX, centerY)).toBe(true);
      expect(RingMat.isOnMat(maxX, maxY - 1)).toBe(true);
      expect(RingMat.isOnMat(maxX, maxY)).toBe(true);
      expect(RingMat.isOnMat(maxX, maxY + 1)).toBe(false);

      expect(RingMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, minY)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, centerY)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, maxY)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
    });

    test('Illegal Case', (): void => {
      expect(RingMat.isOnMat(undefined, minY - 1)).toBe(false);
      expect(RingMat.isOnMat(undefined, minY)).toBe(false);
      expect(RingMat.isOnMat(undefined, minY + 1)).toBe(false);
      expect(RingMat.isOnMat(undefined, centerY)).toBe(false);
      expect(RingMat.isOnMat(undefined, maxY - 1)).toBe(false);
      expect(RingMat.isOnMat(undefined, maxY)).toBe(false);
      expect(RingMat.isOnMat(undefined, maxY + 1)).toBe(false);

      expect(RingMat.isOnMat(minX - 1, undefined)).toBe(false);
      expect(RingMat.isOnMat(minX, undefined)).toBe(false);
      expect(RingMat.isOnMat(centerX, undefined)).toBe(false);
      expect(RingMat.isOnMat(maxX, undefined)).toBe(false);
      expect(RingMat.isOnMat(maxX + 1, undefined)).toBe(false);
    });
  });

  describe('isInsideCircle', (): void => {
    test('Check some points', (): void => {
      expect(RingMat.isInsideCircle(centerX, centerY)).toBe(true);
      expect(RingMat.isInsideCircle(minX, minY)).toBe(false);
      expect(RingMat.isInsideCircle(maxX, maxY)).toBe(false);
    });
  });

  describe('isInFrontOfBlueLine', (): void => {
    test('Check some points', (): void => {
      expect(RingMat.isInFrontOfBlueLine(centerY)).toBe(true);
      expect(RingMat.isInFrontOfBlueLine(minY)).toBe(false);
      expect(RingMat.isInFrontOfBlueLine(maxY)).toBe(true);
    });
  });

  describe('isInFrontOfGreenLine', (): void => {
    test('Check some points', (): void => {
      expect(RingMat.isInFrontOfGreenLine(centerY)).toBe(true);
      expect(RingMat.isInFrontOfGreenLine(minY)).toBe(true);
      expect(RingMat.isInFrontOfGreenLine(maxY)).toBe(false);
    });
  });
});
