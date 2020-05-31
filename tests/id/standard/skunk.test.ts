import { Skunk } from '#/id/standard/skunk';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670078, expect: Skunk.names.blueSkunk },
  { target: 3670042, expect: Skunk.names.greenSkunk },
  { target: 3670080, expect: Skunk.names.yellowSkunk },
  { target: 3670044, expect: Skunk.names.orangeSkunk },
  { target: 3670082, expect: Skunk.names.redSkunk },
  { target: 3670046, expect: Skunk.names.brownSkunk },
];

describe('Skunk', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(Skunk.names.blueSkunk).toBe('blueSkunk');
      expect(Skunk.names.greenSkunk).toBe('greenSkunk');
      expect(Skunk.names.yellowSkunk).toBe('yellowSkunk');
      expect(Skunk.names.orangeSkunk).toBe('orangeSkunk');
      expect(Skunk.names.redSkunk).toBe('redSkunk');
      expect(Skunk.names.brownSkunk).toBe('brownSkunk');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of Skunk.idTable) {
          if (element.id === item.target) {
            expect(element.name).toBe(item.expect);
            continue;
          }
        }
      }
    });
  });

  describe('getIdName', (): void => {
    test('Normal Cases', (): void => {
      for (const item of idTestItems) {
        expect(Skunk.getIdName(item.target)).toBe(item.expect);
      }
    });

    test('Illegal Cases', (): void => {
      const testItems: { target: number; expect: string | undefined }[] = [
        { target: 1234567, expect: undefined },
        { target: -3670337, expect: undefined },
        { target: 0, expect: undefined },
        { target: 3670323, expect: undefined },
        { target: 3670062, expect: undefined },
      ];

      for (const item of testItems) {
        expect(Skunk.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: Skunk.names.blueSkunk, expect: true },
        { target: Skunk.names.greenSkunk, expect: true },
        { target: Skunk.names.yellowSkunk, expect: true },
        { target: Skunk.names.orangeSkunk, expect: true },
        { target: Skunk.names.redSkunk, expect: true },
        { target: Skunk.names.brownSkunk, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(Skunk.includes(item.target)).toBe(item.expect);
      }
    });

    test('False Cases', (): void => {
      const testItems: { target: string; expect: boolean }[] = [
        { target: '', expect: false },
        { target: 'markR ', expect: false },
        { target: 'mark5', expect: false },
        { target: 'markPercent', expect: false },
        { target: 'rythmAndGo', expect: false },
      ];

      for (const item of testItems) {
        expect(Skunk.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
