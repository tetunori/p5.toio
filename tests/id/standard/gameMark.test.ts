import { GameMark } from '#/id/standard/gameMark';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670048, expect: GameMark.names.craftFighter },
  { target: 3670052, expect: GameMark.names.rythmAndGo },
  { target: 3670086, expect: GameMark.names.skunkChaser },
  { target: 3670050, expect: GameMark.names.fingerStrike2P },
  { target: 3670088, expect: GameMark.names.fingerStrike1P },
  { target: 3670084, expect: GameMark.names.freeMove },
];

describe('GameMark', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(GameMark.names.craftFighter).toBe('craftFighter');
      expect(GameMark.names.rythmAndGo).toBe('rythmAndGo');
      expect(GameMark.names.skunkChaser).toBe('skunkChaser');
      expect(GameMark.names.fingerStrike2P).toBe('fingerStrike2P');
      expect(GameMark.names.fingerStrike1P).toBe('fingerStrike1P');
      expect(GameMark.names.freeMove).toBe('freeMove');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of GameMark.idTable) {
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
        expect(GameMark.getIdName(item.target)).toBe(item.expect);
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
        expect(GameMark.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: GameMark.names.craftFighter, expect: true },
        { target: GameMark.names.rythmAndGo, expect: true },
        { target: GameMark.names.skunkChaser, expect: true },
        { target: GameMark.names.fingerStrike2P, expect: true },
        { target: GameMark.names.fingerStrike1P, expect: true },
        { target: GameMark.names.freeMove, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(GameMark.includes(item.target)).toBe(item.expect);
      }
    });

    test('False Cases', (): void => {
      const testItems: { target: string; expect: boolean }[] = [
        { target: '', expect: false },
        { target: 'markR ', expect: false },
        { target: 'mark5', expect: false },
        { target: 'markPercent', expect: false },
      ];

      for (const item of testItems) {
        expect(GameMark.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
