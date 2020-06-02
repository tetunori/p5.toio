import { SimpleCardSymbol } from '#/id/standard/symbol';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670305, expect: SimpleCardSymbol.names.markExclamation },
  { target: 3670366, expect: SimpleCardSymbol.names.markUp },
  { target: 3670335, expect: SimpleCardSymbol.names.markQuestion },
  { target: 3670315, expect: SimpleCardSymbol.names.markPlus },
  { target: 3670317, expect: SimpleCardSymbol.names.markMinus },
  { target: 3670333, expect: SimpleCardSymbol.names.markEqual },
  { target: 3670332, expect: SimpleCardSymbol.names.markLeft },
  { target: 3670367, expect: SimpleCardSymbol.names.markDown },
  { target: 3670334, expect: SimpleCardSymbol.names.markRight },
  { target: 3670314, expect: SimpleCardSymbol.names.markMultiple },
  { target: 3670319, expect: SimpleCardSymbol.names.markDivision },
  { target: 3670309, expect: SimpleCardSymbol.names.markPercent },
];

describe('SimpleCardSymbol', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(SimpleCardSymbol.names.markExclamation).toBe('markExclamation');
      expect(SimpleCardSymbol.names.markUp).toBe('markUp');
      expect(SimpleCardSymbol.names.markQuestion).toBe('markQuestion');
      expect(SimpleCardSymbol.names.markPlus).toBe('markPlus');
      expect(SimpleCardSymbol.names.markMinus).toBe('markMinus');
      expect(SimpleCardSymbol.names.markEqual).toBe('markEqual');
      expect(SimpleCardSymbol.names.markLeft).toBe('markLeft');
      expect(SimpleCardSymbol.names.markDown).toBe('markDown');
      expect(SimpleCardSymbol.names.markRight).toBe('markRight');
      expect(SimpleCardSymbol.names.markMultiple).toBe('markMultiple');
      expect(SimpleCardSymbol.names.markDivision).toBe('markDivision');
      expect(SimpleCardSymbol.names.markPercent).toBe('markPercent');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of SimpleCardSymbol.idTable) {
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
        expect(SimpleCardSymbol.getIdName(item.target)).toBe(item.expect);
      }
    });

    test('Illegal Cases', (): void => {
      const testItems: { target: number; expect: string | undefined }[] = [
        { target: 1234567, expect: undefined },
        { target: -3670337, expect: undefined },
        { target: 0, expect: undefined },
        { target: 3670323, expect: undefined },
        { target: 3670078, expect: undefined },
      ];

      for (const item of testItems) {
        expect(SimpleCardSymbol.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: SimpleCardSymbol.names.markExclamation, expect: true },
        { target: SimpleCardSymbol.names.markUp, expect: true },
        { target: SimpleCardSymbol.names.markQuestion, expect: true },
        { target: SimpleCardSymbol.names.markPlus, expect: true },
        { target: SimpleCardSymbol.names.markMinus, expect: true },
        { target: SimpleCardSymbol.names.markEqual, expect: true },
        { target: SimpleCardSymbol.names.markLeft, expect: true },
        { target: SimpleCardSymbol.names.markDown, expect: true },
        { target: SimpleCardSymbol.names.markRight, expect: true },
        { target: SimpleCardSymbol.names.markMultiple, expect: true },
        { target: SimpleCardSymbol.names.markDivision, expect: true },
        { target: SimpleCardSymbol.names.markPercent, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(SimpleCardSymbol.includes(item.target)).toBe(item.expect);
      }
    });

    test('False Cases', (): void => {
      const testItems: { target: string; expect: boolean }[] = [
        { target: '', expect: false },
        { target: 'markPercent ', expect: false },
        { target: 'mark5', expect: false },
        { target: 'rythmAndGo', expect: false },
      ];

      for (const item of testItems) {
        expect(SimpleCardSymbol.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
