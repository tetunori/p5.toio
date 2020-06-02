import { Sticker } from '#/id/standard/sticker';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670066, expect: Sticker.names.speedUpSticker },
  { target: 3670030, expect: Sticker.names.speedDownSticker },
  { target: 3670068, expect: Sticker.names.wobbleSticker },
  { target: 3670032, expect: Sticker.names.panicSticker },
  { target: 3670070, expect: Sticker.names.spinSticker },
  { target: 3670034, expect: Sticker.names.shockSticker },
];

describe('Sticker', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(Sticker.names.speedUpSticker).toBe('speedUpSticker');
      expect(Sticker.names.speedDownSticker).toBe('speedDownSticker');
      expect(Sticker.names.wobbleSticker).toBe('wobbleSticker');
      expect(Sticker.names.panicSticker).toBe('panicSticker');
      expect(Sticker.names.spinSticker).toBe('spinSticker');
      expect(Sticker.names.shockSticker).toBe('shockSticker');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of Sticker.idTable) {
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
        expect(Sticker.getIdName(item.target)).toBe(item.expect);
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
        expect(Sticker.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: Sticker.names.speedUpSticker, expect: true },
        { target: Sticker.names.speedDownSticker, expect: true },
        { target: Sticker.names.wobbleSticker, expect: true },
        { target: Sticker.names.panicSticker, expect: true },
        { target: Sticker.names.spinSticker, expect: true },
        { target: Sticker.names.shockSticker, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(Sticker.includes(item.target)).toBe(item.expect);
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
        expect(Sticker.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
