import {
  DevMat01,
  DevMat02,
  DevMat03,
  DevMat04,
  DevMat05,
  DevMat06,
  DevMat07,
  DevMat08,
  DevMat09,
  DevMat10,
  DevMat11,
  DevMat12,
} from '#/id/position/devMat';

const devMat01 = {
  minX: DevMat01.minX,
  maxX: DevMat01.maxX,
  minY: DevMat01.minY,
  maxY: DevMat01.maxY,
  centerX: DevMat01.centerX,
  centerY: DevMat01.centerY,
  isOnMat: DevMat01.isOnMat,
};

const devMat02 = {
  minX: DevMat02.minX,
  maxX: DevMat02.maxX,
  minY: DevMat02.minY,
  maxY: DevMat02.maxY,
  centerX: DevMat02.centerX,
  centerY: DevMat02.centerY,
  isOnMat: DevMat02.isOnMat,
};

const devMat03 = {
  minX: DevMat03.minX,
  maxX: DevMat03.maxX,
  minY: DevMat03.minY,
  maxY: DevMat03.maxY,
  centerX: DevMat03.centerX,
  centerY: DevMat03.centerY,
  isOnMat: DevMat03.isOnMat,
};

const devMat04 = {
  minX: DevMat04.minX,
  maxX: DevMat04.maxX,
  minY: DevMat04.minY,
  maxY: DevMat04.maxY,
  centerX: DevMat04.centerX,
  centerY: DevMat04.centerY,
  isOnMat: DevMat04.isOnMat,
};

const devMat05 = {
  minX: DevMat05.minX,
  maxX: DevMat05.maxX,
  minY: DevMat05.minY,
  maxY: DevMat05.maxY,
  centerX: DevMat05.centerX,
  centerY: DevMat05.centerY,
  isOnMat: DevMat05.isOnMat,
};

const devMat06 = {
  minX: DevMat06.minX,
  maxX: DevMat06.maxX,
  minY: DevMat06.minY,
  maxY: DevMat06.maxY,
  centerX: DevMat06.centerX,
  centerY: DevMat06.centerY,
  isOnMat: DevMat06.isOnMat,
};

const devMat07 = {
  minX: DevMat07.minX,
  maxX: DevMat07.maxX,
  minY: DevMat07.minY,
  maxY: DevMat07.maxY,
  centerX: DevMat07.centerX,
  centerY: DevMat07.centerY,
  isOnMat: DevMat07.isOnMat,
};

const devMat08 = {
  minX: DevMat08.minX,
  maxX: DevMat08.maxX,
  minY: DevMat08.minY,
  maxY: DevMat08.maxY,
  centerX: DevMat08.centerX,
  centerY: DevMat08.centerY,
  isOnMat: DevMat08.isOnMat,
};

const devMat09 = {
  minX: DevMat09.minX,
  maxX: DevMat09.maxX,
  minY: DevMat09.minY,
  maxY: DevMat09.maxY,
  centerX: DevMat09.centerX,
  centerY: DevMat09.centerY,
  isOnMat: DevMat09.isOnMat,
};

const devMat10 = {
  minX: DevMat10.minX,
  maxX: DevMat10.maxX,
  minY: DevMat10.minY,
  maxY: DevMat10.maxY,
  centerX: DevMat10.centerX,
  centerY: DevMat10.centerY,
  isOnMat: DevMat10.isOnMat,
};

const devMat11 = {
  minX: DevMat11.minX,
  maxX: DevMat11.maxX,
  minY: DevMat11.minY,
  maxY: DevMat11.maxY,
  centerX: DevMat11.centerX,
  centerY: DevMat11.centerY,
  isOnMat: DevMat11.isOnMat,
};

const devMat12 = {
  minX: DevMat12.minX,
  maxX: DevMat12.maxX,
  minY: DevMat12.minY,
  maxY: DevMat12.maxY,
  centerX: DevMat12.centerX,
  centerY: DevMat12.centerY,
  isOnMat: DevMat12.isOnMat,
};

const devMats = [
  devMat01,
  devMat02,
  devMat03,
  devMat04,
  devMat05,
  devMat06,
  devMat07,
  devMat08,
  devMat09,
  devMat10,
  devMat11,
  devMat12,
];

const testDevMat = (
  devMatId: number,
  minX: number,
  minY: number,
  maxX: number,
  maxY: number,
): void => {
  const devMat = devMats[devMatId];
  const centerX = Math.floor((minX + maxX) / 2);
  const centerY = Math.floor((minY + maxY) / 2);

  describe('Property', (): void => {
    test('All Check', (): void => {
      expect(devMat.minX).toBe(minX);
      expect(devMat.minY).toBe(minY);
      expect(devMat.maxX).toBe(maxX);
      expect(devMat.maxY).toBe(maxY);
      expect(devMat.centerX).toBeGreaterThanOrEqual(centerX - 1);
      expect(devMat.centerX).toBeLessThanOrEqual(centerX + 1);
      expect(devMat.centerY).toBeGreaterThanOrEqual(centerY - 1);
      expect(devMat.centerY).toBeLessThanOrEqual(centerY + 1);
    });
  });

  describe('isOnMat', (): void => {
    test('Normal Case', (): void => {
      expect(devMat.isOnMat(minX - 1, minY - 1)).toBe(false);
      expect(devMat.isOnMat(minX - 1, minY)).toBe(false);
      expect(devMat.isOnMat(minX - 1, minY + 1)).toBe(false);
      expect(devMat.isOnMat(minX - 1, centerY)).toBe(false);
      expect(devMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
      expect(devMat.isOnMat(minX - 1, maxY)).toBe(false);
      expect(devMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

      expect(devMat.isOnMat(minX, minY - 1)).toBe(false);
      expect(devMat.isOnMat(minX, minY)).toBe(true);
      expect(devMat.isOnMat(minX, minY + 1)).toBe(true);
      expect(devMat.isOnMat(minX, centerY)).toBe(true);
      expect(devMat.isOnMat(minX, maxY - 1)).toBe(true);
      expect(devMat.isOnMat(minX, maxY)).toBe(true);
      expect(devMat.isOnMat(minX, maxY + 1)).toBe(false);

      expect(devMat.isOnMat(centerX, minY - 1)).toBe(false);
      expect(devMat.isOnMat(centerX, minY)).toBe(true);
      expect(devMat.isOnMat(centerX, minY + 1)).toBe(true);
      expect(devMat.isOnMat(centerX, centerY)).toBe(true);
      expect(devMat.isOnMat(centerX, maxY - 1)).toBe(true);
      expect(devMat.isOnMat(centerX, maxY)).toBe(true);
      expect(devMat.isOnMat(centerX, maxY + 1)).toBe(false);

      expect(devMat.isOnMat(maxX, minY - 1)).toBe(false);
      expect(devMat.isOnMat(maxX, minY)).toBe(true);
      expect(devMat.isOnMat(maxX, minY + 1)).toBe(true);
      expect(devMat.isOnMat(maxX, centerY)).toBe(true);
      expect(devMat.isOnMat(maxX, maxY - 1)).toBe(true);
      expect(devMat.isOnMat(maxX, maxY)).toBe(true);
      expect(devMat.isOnMat(maxX, maxY + 1)).toBe(false);

      expect(devMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, minY)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, centerY)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, maxY)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
    });

    test('Illegal Case', (): void => {
      expect(devMat.isOnMat(undefined, minY - 1)).toBe(false);
      expect(devMat.isOnMat(undefined, minY)).toBe(false);
      expect(devMat.isOnMat(undefined, minY + 1)).toBe(false);
      expect(devMat.isOnMat(undefined, centerY)).toBe(false);
      expect(devMat.isOnMat(undefined, maxY - 1)).toBe(false);
      expect(devMat.isOnMat(undefined, maxY)).toBe(false);
      expect(devMat.isOnMat(undefined, maxY + 1)).toBe(false);

      expect(devMat.isOnMat(minX - 1, undefined)).toBe(false);
      expect(devMat.isOnMat(minX, undefined)).toBe(false);
      expect(devMat.isOnMat(centerX, undefined)).toBe(false);
      expect(devMat.isOnMat(maxX, undefined)).toBe(false);
      expect(devMat.isOnMat(maxX + 1, undefined)).toBe(false);
    });
  });
};

describe('DevMat01', (): void => {
  testDevMat(0, 34, 35, 339, 250);
});
describe('DevMat02', (): void => {
  testDevMat(1, 34, 251, 339, 466);
});
describe('DevMat03', (): void => {
  testDevMat(2, 34, 467, 339, 682);
});
describe('DevMat04', (): void => {
  testDevMat(3, 34, 683, 339, 898);
});
describe('DevMat05', (): void => {
  testDevMat(4, 340, 35, 644, 250);
});
describe('DevMat06', (): void => {
  testDevMat(5, 340, 251, 644, 466);
});
describe('DevMat07', (): void => {
  testDevMat(6, 340, 467, 644, 682);
});
describe('DevMat08', (): void => {
  testDevMat(7, 340, 683, 644, 898);
});
describe('DevMat09', (): void => {
  testDevMat(8, 645, 35, 949, 250);
});
describe('DevMat10', (): void => {
  testDevMat(9, 645, 251, 949, 466);
});
describe('DevMat11', (): void => {
  testDevMat(10, 645, 467, 949, 682);
});
describe('DevMat12', (): void => {
  testDevMat(11, 645, 683, 949, 898);
});
