import { StandardId } from '#/id/standard/standardId';

// Prepare
class TestClass extends StandardId {
  public static readonly names = {
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
  };

  public static readonly idTable = [
    { name: TestClass.names.test1, id: 1234567 },
    { name: TestClass.names.test2, id: 7654321 },
    { name: TestClass.names.test3, id: 9999999 },
  ];
}

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 1234567, expect: TestClass.names.test1 },
  { target: 7654321, expect: TestClass.names.test2 },
  { target: 9999999, expect: TestClass.names.test3 },
];

describe('TestClass', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(TestClass.names.test1).toBe('test1');
      expect(TestClass.names.test2).toBe('test2');
      expect(TestClass.names.test3).toBe('test3');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of TestClass.idTable) {
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
        expect(TestClass.getIdName(item.target)).toBe(item.expect);
      }
    });

    test('Illegal Cases', (): void => {
      const testItems: { target: number; expect: string | undefined }[] = [
        { target: -3670337, expect: undefined },
        { target: 0, expect: undefined },
        { target: 3670323, expect: undefined },
        { target: 3670078, expect: undefined },
      ];

      for (const item of testItems) {
        expect(TestClass.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: TestClass.names.test1, expect: true },
        { target: TestClass.names.test2, expect: true },
        { target: TestClass.names.test3, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(TestClass.includes(item.target)).toBe(item.expect);
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
        expect(TestClass.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
