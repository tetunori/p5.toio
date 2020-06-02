import { SimpleCardNumber } from '#/id/standard/number';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670320, expect: SimpleCardNumber.names.mark0 },
  { target: 3670321, expect: SimpleCardNumber.names.mark1 },
  { target: 3670322, expect: SimpleCardNumber.names.mark2 },
  { target: 3670323, expect: SimpleCardNumber.names.mark3 },
  { target: 3670324, expect: SimpleCardNumber.names.mark4 },
  { target: 3670325, expect: SimpleCardNumber.names.mark5 },
  { target: 3670326, expect: SimpleCardNumber.names.mark6 },
  { target: 3670327, expect: SimpleCardNumber.names.mark7 },
  { target: 3670328, expect: SimpleCardNumber.names.mark8 },
  { target: 3670329, expect: SimpleCardNumber.names.mark9 },
];

describe('SimpleCardNumber', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(SimpleCardNumber.names.mark0).toBe('mark0');
      expect(SimpleCardNumber.names.mark1).toBe('mark1');
      expect(SimpleCardNumber.names.mark2).toBe('mark2');
      expect(SimpleCardNumber.names.mark3).toBe('mark3');
      expect(SimpleCardNumber.names.mark4).toBe('mark4');
      expect(SimpleCardNumber.names.mark5).toBe('mark5');
      expect(SimpleCardNumber.names.mark6).toBe('mark6');
      expect(SimpleCardNumber.names.mark7).toBe('mark7');
      expect(SimpleCardNumber.names.mark8).toBe('mark8');
      expect(SimpleCardNumber.names.mark9).toBe('mark9');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of SimpleCardNumber.idTable) {
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
        expect(SimpleCardNumber.getIdName(item.target)).toBe(item.expect);
      }
    });

    test('Illegal Cases', (): void => {
      const testItems: { target: number; expect: string | undefined }[] = [
        { target: 1234567, expect: undefined },
        { target: -3670337, expect: undefined },
        { target: 0, expect: undefined },
        { target: 3670024, expect: undefined },
        { target: 3670078, expect: undefined },
      ];

      for (const item of testItems) {
        expect(SimpleCardNumber.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: SimpleCardNumber.names.mark0, expect: true },
        { target: SimpleCardNumber.names.mark1, expect: true },
        { target: SimpleCardNumber.names.mark2, expect: true },
        { target: SimpleCardNumber.names.mark3, expect: true },
        { target: SimpleCardNumber.names.mark4, expect: true },
        { target: SimpleCardNumber.names.mark5, expect: true },
        { target: SimpleCardNumber.names.mark6, expect: true },
        { target: SimpleCardNumber.names.mark7, expect: true },
        { target: SimpleCardNumber.names.mark8, expect: true },
        { target: SimpleCardNumber.names.mark9, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(SimpleCardNumber.includes(item.target)).toBe(item.expect);
      }
    });

    test('False Cases', (): void => {
      const testItems: { target: string; expect: boolean }[] = [
        { target: '', expect: false },
        { target: 'markR ', expect: false },
        { target: 'markPercent', expect: false },
        { target: 'rythmAndGo', expect: false },
      ];

      for (const item of testItems) {
        expect(SimpleCardNumber.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
