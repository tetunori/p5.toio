import { SimpleCardAlphabet } from '#/id/standard/alphabet';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670337, expect: SimpleCardAlphabet.names.markA },
  { target: 3670338, expect: SimpleCardAlphabet.names.markB },
  { target: 3670339, expect: SimpleCardAlphabet.names.markC },
  { target: 3670340, expect: SimpleCardAlphabet.names.markD },
  { target: 3670341, expect: SimpleCardAlphabet.names.markE },
  { target: 3670342, expect: SimpleCardAlphabet.names.markF },
  { target: 3670343, expect: SimpleCardAlphabet.names.markG },
  { target: 3670344, expect: SimpleCardAlphabet.names.markH },
  { target: 3670345, expect: SimpleCardAlphabet.names.markI },
  { target: 3670346, expect: SimpleCardAlphabet.names.markJ },
  { target: 3670347, expect: SimpleCardAlphabet.names.markK },
  { target: 3670348, expect: SimpleCardAlphabet.names.markL },
  { target: 3670349, expect: SimpleCardAlphabet.names.markM },
  { target: 3670350, expect: SimpleCardAlphabet.names.markN },
  { target: 3670351, expect: SimpleCardAlphabet.names.markO },
  { target: 3670352, expect: SimpleCardAlphabet.names.markP },
  { target: 3670353, expect: SimpleCardAlphabet.names.markQ },
  { target: 3670354, expect: SimpleCardAlphabet.names.markR },
  { target: 3670355, expect: SimpleCardAlphabet.names.markS },
  { target: 3670356, expect: SimpleCardAlphabet.names.markT },
  { target: 3670357, expect: SimpleCardAlphabet.names.markU },
  { target: 3670358, expect: SimpleCardAlphabet.names.markV },
  { target: 3670359, expect: SimpleCardAlphabet.names.markW },
  { target: 3670360, expect: SimpleCardAlphabet.names.markX },
  { target: 3670361, expect: SimpleCardAlphabet.names.markY },
  { target: 3670362, expect: SimpleCardAlphabet.names.markZ },
];

describe('SimpleCardAlphabet', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(SimpleCardAlphabet.names.markA).toBe('markA');
      expect(SimpleCardAlphabet.names.markB).toBe('markB');
      expect(SimpleCardAlphabet.names.markC).toBe('markC');
      expect(SimpleCardAlphabet.names.markD).toBe('markD');
      expect(SimpleCardAlphabet.names.markE).toBe('markE');
      expect(SimpleCardAlphabet.names.markF).toBe('markF');
      expect(SimpleCardAlphabet.names.markG).toBe('markG');
      expect(SimpleCardAlphabet.names.markH).toBe('markH');
      expect(SimpleCardAlphabet.names.markI).toBe('markI');
      expect(SimpleCardAlphabet.names.markJ).toBe('markJ');
      expect(SimpleCardAlphabet.names.markK).toBe('markK');
      expect(SimpleCardAlphabet.names.markL).toBe('markL');
      expect(SimpleCardAlphabet.names.markM).toBe('markM');
      expect(SimpleCardAlphabet.names.markN).toBe('markN');
      expect(SimpleCardAlphabet.names.markO).toBe('markO');
      expect(SimpleCardAlphabet.names.markP).toBe('markP');
      expect(SimpleCardAlphabet.names.markQ).toBe('markQ');
      expect(SimpleCardAlphabet.names.markR).toBe('markR');
      expect(SimpleCardAlphabet.names.markS).toBe('markS');
      expect(SimpleCardAlphabet.names.markT).toBe('markT');
      expect(SimpleCardAlphabet.names.markU).toBe('markU');
      expect(SimpleCardAlphabet.names.markV).toBe('markV');
      expect(SimpleCardAlphabet.names.markW).toBe('markW');
      expect(SimpleCardAlphabet.names.markX).toBe('markX');
      expect(SimpleCardAlphabet.names.markY).toBe('markY');
      expect(SimpleCardAlphabet.names.markZ).toBe('markZ');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of SimpleCardAlphabet.idTable) {
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
        expect(SimpleCardAlphabet.getIdName(item.target)).toBe(item.expect);
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
        expect(SimpleCardAlphabet.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: SimpleCardAlphabet.names.markA, expect: true },
        { target: SimpleCardAlphabet.names.markB, expect: true },
        { target: SimpleCardAlphabet.names.markC, expect: true },
        { target: SimpleCardAlphabet.names.markD, expect: true },
        { target: SimpleCardAlphabet.names.markE, expect: true },
        { target: SimpleCardAlphabet.names.markF, expect: true },
        { target: SimpleCardAlphabet.names.markG, expect: true },
        { target: SimpleCardAlphabet.names.markH, expect: true },
        { target: SimpleCardAlphabet.names.markI, expect: true },
        { target: SimpleCardAlphabet.names.markJ, expect: true },
        { target: SimpleCardAlphabet.names.markK, expect: true },
        { target: SimpleCardAlphabet.names.markL, expect: true },
        { target: SimpleCardAlphabet.names.markM, expect: true },
        { target: SimpleCardAlphabet.names.markN, expect: true },
        { target: SimpleCardAlphabet.names.markO, expect: true },
        { target: SimpleCardAlphabet.names.markP, expect: true },
        { target: SimpleCardAlphabet.names.markQ, expect: true },
        { target: SimpleCardAlphabet.names.markR, expect: true },
        { target: SimpleCardAlphabet.names.markS, expect: true },
        { target: SimpleCardAlphabet.names.markT, expect: true },
        { target: SimpleCardAlphabet.names.markU, expect: true },
        { target: SimpleCardAlphabet.names.markV, expect: true },
        { target: SimpleCardAlphabet.names.markW, expect: true },
        { target: SimpleCardAlphabet.names.markX, expect: true },
        { target: SimpleCardAlphabet.names.markY, expect: true },
        { target: SimpleCardAlphabet.names.markZ, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(SimpleCardAlphabet.includes(item.target)).toBe(item.expect);
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
        expect(SimpleCardAlphabet.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
