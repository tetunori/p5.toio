import { Card } from '#/id/standard/card';

const idTestItems: { target: number; expect: string | undefined }[] = [
  { target: 3670016, expect: Card.names.typhoonCard },
  { target: 3670054, expect: Card.names.rushCard },
  { target: 3670018, expect: Card.names.autoTackleCard },
  { target: 3670056, expect: Card.names.randomCard },
  { target: 3670020, expect: Card.names.pushPowerUpCard },
  { target: 3670058, expect: Card.names.haritePowerUpCard },
  { target: 3670022, expect: Card.names.sideAttackCard },
  { target: 3670060, expect: Card.names.easyModeCard },
  { target: 3670024, expect: Card.names.leftCard },
  { target: 3670062, expect: Card.names.rightCard },
  { target: 3670026, expect: Card.names.frontCard },
  { target: 3670064, expect: Card.names.backCard },
  { target: 3670028, expect: Card.names.goCard },
];

describe('Card', (): void => {
  describe('names', (): void => {
    test('All Check', (): void => {
      expect(Card.names.typhoonCard).toBe('typhoonCard');
      expect(Card.names.rushCard).toBe('rushCard');
      expect(Card.names.autoTackleCard).toBe('autoTackleCard');
      expect(Card.names.randomCard).toBe('randomCard');
      expect(Card.names.pushPowerUpCard).toBe('pushPowerUpCard');
      expect(Card.names.haritePowerUpCard).toBe('haritePowerUpCard');
      expect(Card.names.sideAttackCard).toBe('sideAttackCard');
      expect(Card.names.easyModeCard).toBe('easyModeCard');
      expect(Card.names.leftCard).toBe('leftCard');
      expect(Card.names.rightCard).toBe('rightCard');
      expect(Card.names.frontCard).toBe('frontCard');
      expect(Card.names.backCard).toBe('backCard');
      expect(Card.names.goCard).toBe('goCard');
    });
  });

  describe('idTable', (): void => {
    test('All Check', (): void => {
      for (const item of idTestItems) {
        for (const element of Card.idTable) {
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
        expect(Card.getIdName(item.target)).toBe(item.expect);
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
        expect(Card.getIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('includes', (): void => {
    test('True Cases', (): void => {
      const includesTestItems: { target: string; expect: boolean }[] = [
        { target: Card.names.typhoonCard, expect: true },
        { target: Card.names.rushCard, expect: true },
        { target: Card.names.autoTackleCard, expect: true },
        { target: Card.names.randomCard, expect: true },
        { target: Card.names.pushPowerUpCard, expect: true },
        { target: Card.names.haritePowerUpCard, expect: true },
        { target: Card.names.sideAttackCard, expect: true },
        { target: Card.names.easyModeCard, expect: true },
        { target: Card.names.leftCard, expect: true },
        { target: Card.names.rightCard, expect: true },
        { target: Card.names.frontCard, expect: true },
        { target: Card.names.backCard, expect: true },
        { target: Card.names.goCard, expect: true },
      ];

      for (const item of includesTestItems) {
        expect(Card.includes(item.target)).toBe(item.expect);
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
        expect(Card.includes(item.target)).toBe(item.expect);
      }
    });
  });
});
