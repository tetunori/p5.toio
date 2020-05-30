import { CubeUtil } from '#/common/util';

describe('CubeUtil', (): void => {
  describe('clipNumberUInt8', (): void => {
    test('Normal samples', (): void => {
      const testItems: { target: number; expect: number }[] = [
        { target: 4, expect: 4 },
        { target: 8, expect: 8 },
        { target: 128, expect: 128 },
      ];

      for (const item of testItems) {
        const returnValue: number = CubeUtil.clipNumberUInt8(item.target);
        expect(returnValue).toBe(item.expect);
      }
    });

    test('Boundary values', (): void => {
      const testItems: { target: number; expect: number }[] = [
        { target: -1, expect: 0 },
        { target: -0.001, expect: 0 },
        { target: 0, expect: 0 },
        { target: 1, expect: 1 },
        { target: 254, expect: 254 },
        { target: 255, expect: 255 },
        { target: 255.001, expect: 255 },
        { target: 256, expect: 255 },
      ];

      for (const item of testItems) {
        const returnValue: number = CubeUtil.clipNumberUInt8(item.target);
        expect(returnValue).toBe(item.expect);
      }
    });

    test('Negative/Non-integer values', (): void => {
      const testItems: { target: number; expect: number }[] = [
        { target: -50, expect: 0 },
        { target: -20.987, expect: 0 },
        { target: 0.5, expect: 0 },
        { target: 3.1415, expect: 3 },
        { target: 254.03, expect: 254 },
        { target: 65535, expect: 255 },
      ];

      for (const item of testItems) {
        const returnValue: number = CubeUtil.clipNumberUInt8(item.target);
        expect(returnValue).toBe(item.expect);
      }
    });
  });

  describe('clipNumberUInt16', (): void => {
    test('Normal samples', (): void => {
      const testItems: { target: number; expect: number }[] = [
        { target: 4, expect: 4 },
        { target: 128, expect: 128 },
        { target: 3210, expect: 3210 },
        { target: 60000, expect: 60000 },
      ];

      for (const item of testItems) {
        const returnValue: number = CubeUtil.clipNumberUInt16(item.target);
        expect(returnValue).toBe(item.expect);
      }
    });

    test('Boundary values', (): void => {
      const testItems: { target: number; expect: number }[] = [
        { target: -1, expect: 0 },
        { target: -0.001, expect: 0 },
        { target: 0, expect: 0 },
        { target: 1, expect: 1 },
        { target: 65534, expect: 65534 },
        { target: 65535, expect: 65535 },
        { target: 65535.001, expect: 65535 },
        { target: 65536, expect: 65535 },
      ];

      for (const item of testItems) {
        const returnValue: number = CubeUtil.clipNumberUInt16(item.target);
        expect(returnValue).toBe(item.expect);
      }
    });

    test('Negative/Non-integer values', (): void => {
      const testItems: { target: number; expect: number }[] = [
        { target: -5000, expect: 0 },
        { target: -20.987, expect: 0 },
        { target: 0.5, expect: 0 },
        { target: 3.1415, expect: 3 },
        { target: 254.03, expect: 254 },
        { target: 125535, expect: 65535 },
      ];

      for (const item of testItems) {
        const returnValue: number = CubeUtil.clipNumberUInt16(item.target);
        expect(returnValue).toBe(item.expect);
      }
    });
  });
});
