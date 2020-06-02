import { P5tId } from '#/p5tId';

describe('P5tId', (): void => {
  describe('getStandardIdName', (): void => {
    const alphabetTestItems: { target: number; expect: string }[] = [
      { target: 3670337, expect: 'markA' },
      { target: 3670338, expect: 'markB' },
      { target: 3670339, expect: 'markC' },
      { target: 3670340, expect: 'markD' },
      { target: 3670341, expect: 'markE' },
      { target: 3670342, expect: 'markF' },
      { target: 3670343, expect: 'markG' },
      { target: 3670344, expect: 'markH' },
      { target: 3670345, expect: 'markI' },
      { target: 3670346, expect: 'markJ' },
      { target: 3670347, expect: 'markK' },
      { target: 3670348, expect: 'markL' },
      { target: 3670349, expect: 'markM' },
      { target: 3670350, expect: 'markN' },
      { target: 3670351, expect: 'markO' },
      { target: 3670352, expect: 'markP' },
      { target: 3670353, expect: 'markQ' },
      { target: 3670354, expect: 'markR' },
      { target: 3670355, expect: 'markS' },
      { target: 3670356, expect: 'markT' },
      { target: 3670357, expect: 'markU' },
      { target: 3670358, expect: 'markV' },
      { target: 3670359, expect: 'markW' },
      { target: 3670360, expect: 'markX' },
      { target: 3670361, expect: 'markY' },
      { target: 3670362, expect: 'markZ' },
    ];

    const cardTestItems: { target: number; expect: string }[] = [
      { target: 3670016, expect: 'typhoonCard' },
      { target: 3670054, expect: 'rushCard' },
      { target: 3670018, expect: 'autoTackleCard' },
      { target: 3670056, expect: 'randomCard' },
      { target: 3670020, expect: 'pushPowerUpCard' },
      { target: 3670058, expect: 'haritePowerUpCard' },
      { target: 3670022, expect: 'sideAttackCard' },
      { target: 3670060, expect: 'easyModeCard' },
      { target: 3670024, expect: 'leftCard' },
      { target: 3670062, expect: 'rightCard' },
      { target: 3670026, expect: 'frontCard' },
      { target: 3670064, expect: 'backCard' },
      { target: 3670028, expect: 'goCard' },
    ];

    const gameMarkTestItems: { target: number; expect: string }[] = [
      { target: 3670048, expect: 'craftFighter' },
      { target: 3670052, expect: 'rythmAndGo' },
      { target: 3670086, expect: 'skunkChaser' },
      { target: 3670050, expect: 'fingerStrike2P' },
      { target: 3670088, expect: 'fingerStrike1P' },
      { target: 3670084, expect: 'freeMove' },
    ];

    const numberTestItems: { target: number; expect: string }[] = [
      { target: 3670320, expect: 'mark0' },
      { target: 3670321, expect: 'mark1' },
      { target: 3670322, expect: 'mark2' },
      { target: 3670323, expect: 'mark3' },
      { target: 3670324, expect: 'mark4' },
      { target: 3670325, expect: 'mark5' },
      { target: 3670326, expect: 'mark6' },
      { target: 3670327, expect: 'mark7' },
      { target: 3670328, expect: 'mark8' },
      { target: 3670329, expect: 'mark9' },
    ];

    const skunkTestItems: { target: number; expect: string }[] = [
      { target: 3670078, expect: 'blueSkunk' },
      { target: 3670042, expect: 'greenSkunk' },
      { target: 3670080, expect: 'yellowSkunk' },
      { target: 3670044, expect: 'orangeSkunk' },
      { target: 3670082, expect: 'redSkunk' },
      { target: 3670046, expect: 'brownSkunk' },
    ];

    const stickerTestItems: { target: number; expect: string }[] = [
      { target: 3670066, expect: 'speedUpSticker' },
      { target: 3670030, expect: 'speedDownSticker' },
      { target: 3670068, expect: 'wobbleSticker' },
      { target: 3670032, expect: 'panicSticker' },
      { target: 3670070, expect: 'spinSticker' },
      { target: 3670034, expect: 'shockSticker' },
    ];

    const symbolTestItems: { target: number; expect: string }[] = [
      { target: 3670305, expect: 'markExclamation' },
      { target: 3670366, expect: 'markUp' },
      { target: 3670335, expect: 'markQuestion' },
      { target: 3670315, expect: 'markPlus' },
      { target: 3670317, expect: 'markMinus' },
      { target: 3670333, expect: 'markEqual' },
      { target: 3670332, expect: 'markLeft' },
      { target: 3670367, expect: 'markDown' },
      { target: 3670334, expect: 'markRight' },
      { target: 3670314, expect: 'markMultiple' },
      { target: 3670319, expect: 'markDivision' },
      { target: 3670309, expect: 'markPercent' },
    ];

    const illegalTestItems: { target: number; expect: string }[] = [
      { target: 1234567, expect: '1234567' },
      { target: 0, expect: '0' },
      { target: -1, expect: '-1' },
      { target: 0.5, expect: '0.5' },
    ];

    test('Normal Cases: Alphabet', (): void => {
      for (const item of alphabetTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Normal Cases: Card', (): void => {
      for (const item of cardTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Normal Cases: Game Mark', (): void => {
      for (const item of gameMarkTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Normal Cases: Number', (): void => {
      for (const item of numberTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Normal Cases: Skunk', (): void => {
      for (const item of skunkTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Normal Cases: Sticker', (): void => {
      for (const item of stickerTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Normal Cases: Symbol', (): void => {
      for (const item of symbolTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
    test('Illegal Cases', (): void => {
      for (const item of illegalTestItems) {
        expect(P5tId.getStandardIdName(item.target)).toBe(item.expect);
      }
    });
  });

  describe('Card', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670016, expect: P5tId.Card.names.typhoonCard },
      { target: 3670054, expect: P5tId.Card.names.rushCard },
      { target: 3670018, expect: P5tId.Card.names.autoTackleCard },
      { target: 3670056, expect: P5tId.Card.names.randomCard },
      { target: 3670020, expect: P5tId.Card.names.pushPowerUpCard },
      { target: 3670058, expect: P5tId.Card.names.haritePowerUpCard },
      { target: 3670022, expect: P5tId.Card.names.sideAttackCard },
      { target: 3670060, expect: P5tId.Card.names.easyModeCard },
      { target: 3670024, expect: P5tId.Card.names.leftCard },
      { target: 3670062, expect: P5tId.Card.names.rightCard },
      { target: 3670026, expect: P5tId.Card.names.frontCard },
      { target: 3670064, expect: P5tId.Card.names.backCard },
      { target: 3670028, expect: P5tId.Card.names.goCard },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.Card.names.typhoonCard).toBe('typhoonCard');
        expect(P5tId.Card.names.rushCard).toBe('rushCard');
        expect(P5tId.Card.names.autoTackleCard).toBe('autoTackleCard');
        expect(P5tId.Card.names.randomCard).toBe('randomCard');
        expect(P5tId.Card.names.pushPowerUpCard).toBe('pushPowerUpCard');
        expect(P5tId.Card.names.haritePowerUpCard).toBe('haritePowerUpCard');
        expect(P5tId.Card.names.sideAttackCard).toBe('sideAttackCard');
        expect(P5tId.Card.names.easyModeCard).toBe('easyModeCard');
        expect(P5tId.Card.names.leftCard).toBe('leftCard');
        expect(P5tId.Card.names.rightCard).toBe('rightCard');
        expect(P5tId.Card.names.frontCard).toBe('frontCard');
        expect(P5tId.Card.names.backCard).toBe('backCard');
        expect(P5tId.Card.names.goCard).toBe('goCard');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.Card.idTable) {
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
          expect(P5tId.Card.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.Card.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.Card.names.typhoonCard, expect: true },
          { target: P5tId.Card.names.rushCard, expect: true },
          { target: P5tId.Card.names.autoTackleCard, expect: true },
          { target: P5tId.Card.names.randomCard, expect: true },
          { target: P5tId.Card.names.pushPowerUpCard, expect: true },
          { target: P5tId.Card.names.haritePowerUpCard, expect: true },
          { target: P5tId.Card.names.sideAttackCard, expect: true },
          { target: P5tId.Card.names.easyModeCard, expect: true },
          { target: P5tId.Card.names.leftCard, expect: true },
          { target: P5tId.Card.names.rightCard, expect: true },
          { target: P5tId.Card.names.frontCard, expect: true },
          { target: P5tId.Card.names.backCard, expect: true },
          { target: P5tId.Card.names.goCard, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.Card.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.Card.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('GameMark', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670048, expect: P5tId.GameMark.names.craftFighter },
      { target: 3670052, expect: P5tId.GameMark.names.rythmAndGo },
      { target: 3670086, expect: P5tId.GameMark.names.skunkChaser },
      { target: 3670050, expect: P5tId.GameMark.names.fingerStrike2P },
      { target: 3670088, expect: P5tId.GameMark.names.fingerStrike1P },
      { target: 3670084, expect: P5tId.GameMark.names.freeMove },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.GameMark.names.craftFighter).toBe('craftFighter');
        expect(P5tId.GameMark.names.rythmAndGo).toBe('rythmAndGo');
        expect(P5tId.GameMark.names.skunkChaser).toBe('skunkChaser');
        expect(P5tId.GameMark.names.fingerStrike2P).toBe('fingerStrike2P');
        expect(P5tId.GameMark.names.fingerStrike1P).toBe('fingerStrike1P');
        expect(P5tId.GameMark.names.freeMove).toBe('freeMove');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.GameMark.idTable) {
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
          expect(P5tId.GameMark.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.GameMark.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.GameMark.names.craftFighter, expect: true },
          { target: P5tId.GameMark.names.rythmAndGo, expect: true },
          { target: P5tId.GameMark.names.skunkChaser, expect: true },
          { target: P5tId.GameMark.names.fingerStrike2P, expect: true },
          { target: P5tId.GameMark.names.fingerStrike1P, expect: true },
          { target: P5tId.GameMark.names.freeMove, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.GameMark.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.GameMark.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('Skunk', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670078, expect: P5tId.Skunk.names.blueSkunk },
      { target: 3670042, expect: P5tId.Skunk.names.greenSkunk },
      { target: 3670080, expect: P5tId.Skunk.names.yellowSkunk },
      { target: 3670044, expect: P5tId.Skunk.names.orangeSkunk },
      { target: 3670082, expect: P5tId.Skunk.names.redSkunk },
      { target: 3670046, expect: P5tId.Skunk.names.brownSkunk },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.Skunk.names.blueSkunk).toBe('blueSkunk');
        expect(P5tId.Skunk.names.greenSkunk).toBe('greenSkunk');
        expect(P5tId.Skunk.names.yellowSkunk).toBe('yellowSkunk');
        expect(P5tId.Skunk.names.orangeSkunk).toBe('orangeSkunk');
        expect(P5tId.Skunk.names.redSkunk).toBe('redSkunk');
        expect(P5tId.Skunk.names.brownSkunk).toBe('brownSkunk');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.Skunk.idTable) {
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
          expect(P5tId.Skunk.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.Skunk.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.Skunk.names.blueSkunk, expect: true },
          { target: P5tId.Skunk.names.greenSkunk, expect: true },
          { target: P5tId.Skunk.names.yellowSkunk, expect: true },
          { target: P5tId.Skunk.names.orangeSkunk, expect: true },
          { target: P5tId.Skunk.names.redSkunk, expect: true },
          { target: P5tId.Skunk.names.brownSkunk, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.Skunk.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.Skunk.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('Sticker', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670066, expect: P5tId.Sticker.names.speedUpSticker },
      { target: 3670030, expect: P5tId.Sticker.names.speedDownSticker },
      { target: 3670068, expect: P5tId.Sticker.names.wobbleSticker },
      { target: 3670032, expect: P5tId.Sticker.names.panicSticker },
      { target: 3670070, expect: P5tId.Sticker.names.spinSticker },
      { target: 3670034, expect: P5tId.Sticker.names.shockSticker },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.Sticker.names.speedUpSticker).toBe('speedUpSticker');
        expect(P5tId.Sticker.names.speedDownSticker).toBe('speedDownSticker');
        expect(P5tId.Sticker.names.wobbleSticker).toBe('wobbleSticker');
        expect(P5tId.Sticker.names.panicSticker).toBe('panicSticker');
        expect(P5tId.Sticker.names.spinSticker).toBe('spinSticker');
        expect(P5tId.Sticker.names.shockSticker).toBe('shockSticker');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.Sticker.idTable) {
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
          expect(P5tId.Sticker.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.Sticker.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.Sticker.names.speedUpSticker, expect: true },
          { target: P5tId.Sticker.names.speedDownSticker, expect: true },
          { target: P5tId.Sticker.names.wobbleSticker, expect: true },
          { target: P5tId.Sticker.names.panicSticker, expect: true },
          { target: P5tId.Sticker.names.spinSticker, expect: true },
          { target: P5tId.Sticker.names.shockSticker, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.Sticker.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.Sticker.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('SimpleCardNumber', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670320, expect: P5tId.SimpleCardNumber.names.mark0 },
      { target: 3670321, expect: P5tId.SimpleCardNumber.names.mark1 },
      { target: 3670322, expect: P5tId.SimpleCardNumber.names.mark2 },
      { target: 3670323, expect: P5tId.SimpleCardNumber.names.mark3 },
      { target: 3670324, expect: P5tId.SimpleCardNumber.names.mark4 },
      { target: 3670325, expect: P5tId.SimpleCardNumber.names.mark5 },
      { target: 3670326, expect: P5tId.SimpleCardNumber.names.mark6 },
      { target: 3670327, expect: P5tId.SimpleCardNumber.names.mark7 },
      { target: 3670328, expect: P5tId.SimpleCardNumber.names.mark8 },
      { target: 3670329, expect: P5tId.SimpleCardNumber.names.mark9 },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.SimpleCardNumber.names.mark0).toBe('mark0');
        expect(P5tId.SimpleCardNumber.names.mark1).toBe('mark1');
        expect(P5tId.SimpleCardNumber.names.mark2).toBe('mark2');
        expect(P5tId.SimpleCardNumber.names.mark3).toBe('mark3');
        expect(P5tId.SimpleCardNumber.names.mark4).toBe('mark4');
        expect(P5tId.SimpleCardNumber.names.mark5).toBe('mark5');
        expect(P5tId.SimpleCardNumber.names.mark6).toBe('mark6');
        expect(P5tId.SimpleCardNumber.names.mark7).toBe('mark7');
        expect(P5tId.SimpleCardNumber.names.mark8).toBe('mark8');
        expect(P5tId.SimpleCardNumber.names.mark9).toBe('mark9');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.SimpleCardNumber.idTable) {
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
          expect(P5tId.SimpleCardNumber.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.SimpleCardNumber.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.SimpleCardNumber.names.mark0, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark1, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark2, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark3, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark4, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark5, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark6, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark7, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark8, expect: true },
          { target: P5tId.SimpleCardNumber.names.mark9, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.SimpleCardNumber.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.SimpleCardNumber.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('SimpleCardAlphabet', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670337, expect: P5tId.SimpleCardAlphabet.names.markA },
      { target: 3670338, expect: P5tId.SimpleCardAlphabet.names.markB },
      { target: 3670339, expect: P5tId.SimpleCardAlphabet.names.markC },
      { target: 3670340, expect: P5tId.SimpleCardAlphabet.names.markD },
      { target: 3670341, expect: P5tId.SimpleCardAlphabet.names.markE },
      { target: 3670342, expect: P5tId.SimpleCardAlphabet.names.markF },
      { target: 3670343, expect: P5tId.SimpleCardAlphabet.names.markG },
      { target: 3670344, expect: P5tId.SimpleCardAlphabet.names.markH },
      { target: 3670345, expect: P5tId.SimpleCardAlphabet.names.markI },
      { target: 3670346, expect: P5tId.SimpleCardAlphabet.names.markJ },
      { target: 3670347, expect: P5tId.SimpleCardAlphabet.names.markK },
      { target: 3670348, expect: P5tId.SimpleCardAlphabet.names.markL },
      { target: 3670349, expect: P5tId.SimpleCardAlphabet.names.markM },
      { target: 3670350, expect: P5tId.SimpleCardAlphabet.names.markN },
      { target: 3670351, expect: P5tId.SimpleCardAlphabet.names.markO },
      { target: 3670352, expect: P5tId.SimpleCardAlphabet.names.markP },
      { target: 3670353, expect: P5tId.SimpleCardAlphabet.names.markQ },
      { target: 3670354, expect: P5tId.SimpleCardAlphabet.names.markR },
      { target: 3670355, expect: P5tId.SimpleCardAlphabet.names.markS },
      { target: 3670356, expect: P5tId.SimpleCardAlphabet.names.markT },
      { target: 3670357, expect: P5tId.SimpleCardAlphabet.names.markU },
      { target: 3670358, expect: P5tId.SimpleCardAlphabet.names.markV },
      { target: 3670359, expect: P5tId.SimpleCardAlphabet.names.markW },
      { target: 3670360, expect: P5tId.SimpleCardAlphabet.names.markX },
      { target: 3670361, expect: P5tId.SimpleCardAlphabet.names.markY },
      { target: 3670362, expect: P5tId.SimpleCardAlphabet.names.markZ },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.SimpleCardAlphabet.names.markA).toBe('markA');
        expect(P5tId.SimpleCardAlphabet.names.markB).toBe('markB');
        expect(P5tId.SimpleCardAlphabet.names.markC).toBe('markC');
        expect(P5tId.SimpleCardAlphabet.names.markD).toBe('markD');
        expect(P5tId.SimpleCardAlphabet.names.markE).toBe('markE');
        expect(P5tId.SimpleCardAlphabet.names.markF).toBe('markF');
        expect(P5tId.SimpleCardAlphabet.names.markG).toBe('markG');
        expect(P5tId.SimpleCardAlphabet.names.markH).toBe('markH');
        expect(P5tId.SimpleCardAlphabet.names.markI).toBe('markI');
        expect(P5tId.SimpleCardAlphabet.names.markJ).toBe('markJ');
        expect(P5tId.SimpleCardAlphabet.names.markK).toBe('markK');
        expect(P5tId.SimpleCardAlphabet.names.markL).toBe('markL');
        expect(P5tId.SimpleCardAlphabet.names.markM).toBe('markM');
        expect(P5tId.SimpleCardAlphabet.names.markN).toBe('markN');
        expect(P5tId.SimpleCardAlphabet.names.markO).toBe('markO');
        expect(P5tId.SimpleCardAlphabet.names.markP).toBe('markP');
        expect(P5tId.SimpleCardAlphabet.names.markQ).toBe('markQ');
        expect(P5tId.SimpleCardAlphabet.names.markR).toBe('markR');
        expect(P5tId.SimpleCardAlphabet.names.markS).toBe('markS');
        expect(P5tId.SimpleCardAlphabet.names.markT).toBe('markT');
        expect(P5tId.SimpleCardAlphabet.names.markU).toBe('markU');
        expect(P5tId.SimpleCardAlphabet.names.markV).toBe('markV');
        expect(P5tId.SimpleCardAlphabet.names.markW).toBe('markW');
        expect(P5tId.SimpleCardAlphabet.names.markX).toBe('markX');
        expect(P5tId.SimpleCardAlphabet.names.markY).toBe('markY');
        expect(P5tId.SimpleCardAlphabet.names.markZ).toBe('markZ');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.SimpleCardAlphabet.idTable) {
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
          expect(P5tId.SimpleCardAlphabet.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.SimpleCardAlphabet.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.SimpleCardAlphabet.names.markA, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markB, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markC, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markD, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markE, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markF, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markG, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markH, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markI, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markJ, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markK, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markL, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markM, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markN, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markO, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markP, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markQ, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markR, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markS, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markT, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markU, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markV, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markW, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markX, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markY, expect: true },
          { target: P5tId.SimpleCardAlphabet.names.markZ, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.SimpleCardAlphabet.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.SimpleCardAlphabet.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('SimpleCardSymbol', (): void => {
    const idTestItems: { target: number; expect: string | undefined }[] = [
      { target: 3670305, expect: P5tId.SimpleCardSymbol.names.markExclamation },
      { target: 3670366, expect: P5tId.SimpleCardSymbol.names.markUp },
      { target: 3670335, expect: P5tId.SimpleCardSymbol.names.markQuestion },
      { target: 3670315, expect: P5tId.SimpleCardSymbol.names.markPlus },
      { target: 3670317, expect: P5tId.SimpleCardSymbol.names.markMinus },
      { target: 3670333, expect: P5tId.SimpleCardSymbol.names.markEqual },
      { target: 3670332, expect: P5tId.SimpleCardSymbol.names.markLeft },
      { target: 3670367, expect: P5tId.SimpleCardSymbol.names.markDown },
      { target: 3670334, expect: P5tId.SimpleCardSymbol.names.markRight },
      { target: 3670314, expect: P5tId.SimpleCardSymbol.names.markMultiple },
      { target: 3670319, expect: P5tId.SimpleCardSymbol.names.markDivision },
      { target: 3670309, expect: P5tId.SimpleCardSymbol.names.markPercent },
    ];

    describe('names', (): void => {
      test('All Check', (): void => {
        expect(P5tId.SimpleCardSymbol.names.markExclamation).toBe('markExclamation');
        expect(P5tId.SimpleCardSymbol.names.markUp).toBe('markUp');
        expect(P5tId.SimpleCardSymbol.names.markQuestion).toBe('markQuestion');
        expect(P5tId.SimpleCardSymbol.names.markPlus).toBe('markPlus');
        expect(P5tId.SimpleCardSymbol.names.markMinus).toBe('markMinus');
        expect(P5tId.SimpleCardSymbol.names.markEqual).toBe('markEqual');
        expect(P5tId.SimpleCardSymbol.names.markLeft).toBe('markLeft');
        expect(P5tId.SimpleCardSymbol.names.markDown).toBe('markDown');
        expect(P5tId.SimpleCardSymbol.names.markRight).toBe('markRight');
        expect(P5tId.SimpleCardSymbol.names.markMultiple).toBe('markMultiple');
        expect(P5tId.SimpleCardSymbol.names.markDivision).toBe('markDivision');
        expect(P5tId.SimpleCardSymbol.names.markPercent).toBe('markPercent');
      });
    });

    describe('idTable', (): void => {
      test('All Check', (): void => {
        for (const item of idTestItems) {
          for (const element of P5tId.SimpleCardSymbol.idTable) {
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
          expect(P5tId.SimpleCardSymbol.getIdName(item.target)).toBe(item.expect);
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
          expect(P5tId.SimpleCardSymbol.getIdName(item.target)).toBe(item.expect);
        }
      });
    });

    describe('includes', (): void => {
      test('True Cases', (): void => {
        const includesTestItems: { target: string; expect: boolean }[] = [
          { target: P5tId.SimpleCardSymbol.names.markExclamation, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markUp, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markQuestion, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markPlus, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markMinus, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markEqual, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markLeft, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markDown, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markRight, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markMultiple, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markDivision, expect: true },
          { target: P5tId.SimpleCardSymbol.names.markPercent, expect: true },
        ];

        for (const item of includesTestItems) {
          expect(P5tId.SimpleCardSymbol.includes(item.target)).toBe(item.expect);
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
          expect(P5tId.SimpleCardSymbol.includes(item.target)).toBe(item.expect);
        }
      });
    });
  });

  describe('ColorTileMat', (): void => {
    const minX = 545;
    const minY = 45;
    const maxX = 955;
    const maxY = 455;
    const centerX = Math.floor((minX + maxX) / 2);
    const centerY = Math.floor((minY + maxY) / 2);

    const matrixMinX = minX + 10;
    const matrixMinY = minY + 8;
    const matrixMaxX = maxX - 8;
    const matrixMaxY = maxY - 9;
    const matrixRows = 9;
    const matrixColumns = 9;

    describe('tileColor', (): void => {
      test('Color Check', (): void => {
        expect(P5tId.ColorTileMat.tileColor.white).toBe('#FFFFFF');
        expect(P5tId.ColorTileMat.tileColor.red).toBe('#e85654');
        expect(P5tId.ColorTileMat.tileColor.blue).toBe('#00aeca');
        expect(P5tId.ColorTileMat.tileColor.green).toBe('#95ba25');
        expect(P5tId.ColorTileMat.tileColor.yellow).toBe('#f0ac00');
      });
    });

    describe('tileColorMatrix', (): void => {
      const matrix = P5tId.ColorTileMat.tileColorMatrix;
      const cW = P5tId.ColorTileMat.tileColor.white;
      const cR = P5tId.ColorTileMat.tileColor.red;
      const cB = P5tId.ColorTileMat.tileColor.blue;
      const cG = P5tId.ColorTileMat.tileColor.green;
      const cY = P5tId.ColorTileMat.tileColor.yellow;

      test('Color Check', (): void => {
        expect(matrix[0][0]).toBe(cW);
        expect(matrix[0][1]).toBe(cB);
        expect(matrix[0][2]).toBe(cW);
        expect(matrix[0][3]).toBe(cY);
        expect(matrix[0][4]).toBe(cW);
        expect(matrix[0][5]).toBe(cR);
        expect(matrix[0][6]).toBe(cW);
        expect(matrix[0][7]).toBe(cR);
        expect(matrix[0][8]).toBe(cW);

        expect(matrix[1][0]).toBe(cG);
        expect(matrix[1][1]).toBe(cW);
        expect(matrix[1][2]).toBe(cR);
        expect(matrix[1][3]).toBe(cW);
        expect(matrix[1][4]).toBe(cB);
        expect(matrix[1][5]).toBe(cW);
        expect(matrix[1][6]).toBe(cB);
        expect(matrix[1][7]).toBe(cW);
        expect(matrix[1][8]).toBe(cY);

        expect(matrix[2][0]).toBe(cW);
        expect(matrix[2][1]).toBe(cY);
        expect(matrix[2][2]).toBe(cW);
        expect(matrix[2][3]).toBe(cY);
        expect(matrix[2][4]).toBe(cW);
        expect(matrix[2][5]).toBe(cG);
        expect(matrix[2][6]).toBe(cW);
        expect(matrix[2][7]).toBe(cG);
        expect(matrix[2][8]).toBe(cW);

        expect(matrix[3][0]).toBe(cB);
        expect(matrix[3][1]).toBe(cW);
        expect(matrix[3][2]).toBe(cG);
        expect(matrix[3][3]).toBe(cW);
        expect(matrix[3][4]).toBe(cR);
        expect(matrix[3][5]).toBe(cW);
        expect(matrix[3][6]).toBe(cB);
        expect(matrix[3][7]).toBe(cW);
        expect(matrix[3][8]).toBe(cR);

        expect(matrix[4][0]).toBe(cW);
        expect(matrix[4][1]).toBe(cR);
        expect(matrix[4][2]).toBe(cW);
        expect(matrix[4][3]).toBe(cY);
        expect(matrix[4][4]).toBe(cW);
        expect(matrix[4][5]).toBe(cG);
        expect(matrix[4][6]).toBe(cW);
        expect(matrix[4][7]).toBe(cG);
        expect(matrix[4][8]).toBe(cW);

        expect(matrix[5][0]).toBe(cY);
        expect(matrix[5][1]).toBe(cW);
        expect(matrix[5][2]).toBe(cB);
        expect(matrix[5][3]).toBe(cW);
        expect(matrix[5][4]).toBe(cB);
        expect(matrix[5][5]).toBe(cW);
        expect(matrix[5][6]).toBe(cY);
        expect(matrix[5][7]).toBe(cW);
        expect(matrix[5][8]).toBe(cR);

        expect(matrix[6][0]).toBe(cW);
        expect(matrix[6][1]).toBe(cG);
        expect(matrix[6][2]).toBe(cW);
        expect(matrix[6][3]).toBe(cR);
        expect(matrix[6][4]).toBe(cW);
        expect(matrix[6][5]).toBe(cG);
        expect(matrix[6][6]).toBe(cW);
        expect(matrix[6][7]).toBe(cB);
        expect(matrix[6][8]).toBe(cW);

        expect(matrix[7][0]).toBe(cB);
        expect(matrix[7][1]).toBe(cW);
        expect(matrix[7][2]).toBe(cY);
        expect(matrix[7][3]).toBe(cW);
        expect(matrix[7][4]).toBe(cB);
        expect(matrix[7][5]).toBe(cW);
        expect(matrix[7][6]).toBe(cR);
        expect(matrix[7][7]).toBe(cW);
        expect(matrix[7][8]).toBe(cY);

        expect(matrix[8][0]).toBe(cW);
        expect(matrix[8][1]).toBe(cR);
        expect(matrix[8][2]).toBe(cW);
        expect(matrix[8][3]).toBe(cG);
        expect(matrix[8][4]).toBe(cW);
        expect(matrix[8][5]).toBe(cY);
        expect(matrix[8][6]).toBe(cW);
        expect(matrix[8][7]).toBe(cG);
        expect(matrix[8][8]).toBe(cW);
      });
    });

    describe('redTiles', (): void => {
      const redTiles = P5tId.ColorTileMat.redTiles;

      test('Color Check', (): void => {
        expect(redTiles).toEqual(
          expect.arrayContaining([
            { row: 0, column: 5 },
            { row: 0, column: 7 },
            { row: 1, column: 2 },
            { row: 3, column: 4 },
            { row: 3, column: 8 },
            { row: 4, column: 1 },
            { row: 5, column: 8 },
            { row: 6, column: 3 },
            { row: 7, column: 6 },
            { row: 8, column: 1 },
          ]),
        );
      });
    });

    describe('blueTiles', (): void => {
      const blueTiles = P5tId.ColorTileMat.blueTiles;

      test('Color Check', (): void => {
        expect(blueTiles).toEqual(
          expect.arrayContaining([
            { row: 0, column: 1 },
            { row: 1, column: 4 },
            { row: 1, column: 6 },
            { row: 3, column: 0 },
            { row: 3, column: 6 },
            { row: 5, column: 2 },
            { row: 5, column: 4 },
            { row: 6, column: 7 },
            { row: 7, column: 0 },
            { row: 7, column: 4 },
          ]),
        );
      });
    });

    describe('greenTiles', (): void => {
      const greenTiles = P5tId.ColorTileMat.greenTiles;

      test('Color Check', (): void => {
        expect(greenTiles).toEqual(
          expect.arrayContaining([
            { row: 1, column: 0 },
            { row: 2, column: 5 },
            { row: 2, column: 7 },
            { row: 3, column: 2 },
            { row: 4, column: 5 },
            { row: 4, column: 7 },
            { row: 6, column: 1 },
            { row: 6, column: 5 },
            { row: 8, column: 3 },
            { row: 8, column: 7 },
          ]),
        );
      });
    });

    describe('yellowTiles', (): void => {
      const yellowTiles = P5tId.ColorTileMat.yellowTiles;

      test('Color Check', (): void => {
        expect(yellowTiles).toEqual(
          expect.arrayContaining([
            { row: 0, column: 3 },
            { row: 1, column: 8 },
            { row: 2, column: 1 },
            { row: 2, column: 3 },
            { row: 4, column: 3 },
            { row: 5, column: 0 },
            { row: 5, column: 6 },
            { row: 7, column: 2 },
            { row: 7, column: 8 },
            { row: 8, column: 5 },
          ]),
        );
      });
    });

    describe('whiteTiles', (): void => {
      const whiteTiles = P5tId.ColorTileMat.whiteTiles;

      test('Color Check', (): void => {
        expect(whiteTiles).toEqual(
          expect.arrayContaining([
            { row: 0, column: 0 },
            { row: 0, column: 2 },
            { row: 0, column: 4 },
            { row: 0, column: 6 },
            { row: 0, column: 8 },
            { row: 1, column: 1 },
            { row: 1, column: 3 },
            { row: 1, column: 5 },
            { row: 1, column: 7 },
            { row: 2, column: 0 },
            { row: 2, column: 2 },
            { row: 2, column: 4 },
            { row: 2, column: 6 },
            { row: 2, column: 8 },
            { row: 3, column: 1 },
            { row: 3, column: 3 },
            { row: 3, column: 5 },
            { row: 3, column: 7 },
            { row: 4, column: 0 },
            { row: 4, column: 2 },
            { row: 4, column: 4 },
            { row: 4, column: 6 },
            { row: 4, column: 8 },
            { row: 5, column: 1 },
            { row: 5, column: 3 },
            { row: 5, column: 5 },
            { row: 5, column: 7 },
            { row: 6, column: 0 },
            { row: 6, column: 2 },
            { row: 6, column: 4 },
            { row: 6, column: 6 },
            { row: 6, column: 8 },
            { row: 7, column: 1 },
            { row: 7, column: 3 },
            { row: 7, column: 5 },
            { row: 7, column: 7 },
            { row: 8, column: 0 },
            { row: 8, column: 2 },
            { row: 8, column: 4 },
            { row: 8, column: 6 },
            { row: 8, column: 8 },
          ]),
        );
      });
    });

    describe('isOnMat', (): void => {
      test('Normal Case', (): void => {
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, minY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, minY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, minY + 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, centerY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, maxY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

        expect(P5tId.ColorTileMat.isOnMat(minX, minY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX, minY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(minX, minY + 1)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(minX, centerY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(minX, maxY - 1)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(minX, maxY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(minX, maxY + 1)).toBe(false);

        expect(P5tId.ColorTileMat.isOnMat(centerX, minY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(centerX, minY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(centerX, minY + 1)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(centerX, centerY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(centerX, maxY - 1)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(centerX, maxY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(centerX, maxY + 1)).toBe(false);

        expect(P5tId.ColorTileMat.isOnMat(maxX, minY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX, minY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(maxX, minY + 1)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(maxX, centerY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(maxX, maxY - 1)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(maxX, maxY)).toBe(true);
        expect(P5tId.ColorTileMat.isOnMat(maxX, maxY + 1)).toBe(false);

        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, minY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, centerY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, maxY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
      });

      test('Illegal Case', (): void => {
        expect(P5tId.ColorTileMat.isOnMat(undefined, minY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(undefined, minY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(undefined, minY + 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(undefined, centerY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(undefined, maxY - 1)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(undefined, maxY)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(undefined, maxY + 1)).toBe(false);

        expect(P5tId.ColorTileMat.isOnMat(minX - 1, undefined)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(minX, undefined)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(centerX, undefined)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX, undefined)).toBe(false);
        expect(P5tId.ColorTileMat.isOnMat(maxX + 1, undefined)).toBe(false);
      });
    });

    describe('getTileCenter', (): void => {
      test('Normal case', (): void => {
        expect(P5tId.ColorTileMat.getTileCenter(0, 0)).toMatchObject({
          x: (matrixMaxX - matrixMinX) / (2 * matrixColumns) + matrixMinX,
          y: (matrixMaxY - matrixMinY) / (2 * matrixRows) + matrixMinY,
        });
        expect(P5tId.ColorTileMat.getTileCenter(4, 4)).toMatchObject({
          x: (matrixColumns * (matrixMaxX - matrixMinX)) / (2 * matrixColumns) + matrixMinX,
          y: (matrixRows * (matrixMaxY - matrixMinY)) / (2 * matrixRows) + matrixMinY,
        });

        expect(
          P5tId.ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.x,
        ).toBeGreaterThanOrEqual(matrixMaxX - (matrixMaxX - matrixMinX) / (2 * matrixColumns) - 1);
        expect(
          P5tId.ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.x,
        ).toBeLessThanOrEqual(matrixMaxX - (matrixMaxX - matrixMinX) / (2 * matrixColumns) + 1);

        expect(
          P5tId.ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.y,
        ).toBeGreaterThanOrEqual(matrixMaxY - (matrixMaxY - matrixMinY) / (2 * matrixRows) - 1);
        expect(
          P5tId.ColorTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)?.y,
        ).toBeLessThanOrEqual(matrixMaxY - (matrixMaxY - matrixMinY) / (2 * matrixRows) + 1);
      });

      test('Illegal case', (): void => {
        expect(P5tId.ColorTileMat.getTileCenter(undefined, Math.floor(matrixColumns / 2))).toBe(
          undefined,
        );
        expect(P5tId.ColorTileMat.getTileCenter(Math.floor(matrixRows / 2), undefined)).toBe(
          undefined,
        );
        expect(P5tId.ColorTileMat.getTileCenter(undefined, undefined)).toBe(undefined);

        expect(P5tId.ColorTileMat.getTileCenter(-1, Math.floor(matrixColumns / 2))).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileCenter(matrixRows, Math.floor(matrixColumns / 2))).toBe(
          undefined,
        );
        expect(P5tId.ColorTileMat.getTileCenter(Math.floor(matrixRows / 2), -1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileCenter(Math.floor(matrixRows / 2), matrixColumns)).toBe(
          undefined,
        );
      });
    });

    describe('getTileMatrixIndex', (): void => {
      test('Normal case', (): void => {
        expect(P5tId.ColorTileMat.getTileMatrixIndex(matrixMinX, matrixMaxY)).toMatchObject({
          row: matrixRows - 1,
          column: 0,
        });
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, centerY)).toMatchObject({
          row: Math.floor(matrixRows / 2),
          column: Math.floor(matrixColumns / 2),
        });
        expect(P5tId.ColorTileMat.getTileMatrixIndex(matrixMaxX, matrixMinY)).toMatchObject({
          row: 0,
          column: matrixColumns - 1,
        });
      });

      test('Illegal case', (): void => {
        expect(P5tId.ColorTileMat.getTileMatrixIndex(undefined, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, undefined)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(undefined, undefined)).toBe(undefined);

        expect(P5tId.ColorTileMat.getTileMatrixIndex(minX - 1, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(minX, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(matrixMinX - 1, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(matrixMaxX + 1, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(maxX, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(maxX + 1, centerY)).toBe(undefined);

        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, minY - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, minY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, matrixMinY - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, matrixMaxY + 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, maxY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileMatrixIndex(centerX, maxY + 1)).toBe(undefined);
      });
    });

    describe('getTileRow', (): void => {
      test('Check some y values', (): void => {
        expect(P5tId.ColorTileMat.getTileRow(undefined)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileRow(minY - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileRow(minY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileRow(matrixMinY - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileRow(matrixMinY)).toBe(0);
        expect(P5tId.ColorTileMat.getTileRow(centerY)).toBe(Math.floor(matrixRows / 2));
        expect(P5tId.ColorTileMat.getTileRow(matrixMaxY)).toBe(matrixRows - 1);
        expect(P5tId.ColorTileMat.getTileRow(matrixMaxY + 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileRow(maxY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileRow(maxY + 1)).toBe(undefined);
      });
    });

    describe('getTileColumn', (): void => {
      test('Check some x values', (): void => {
        expect(P5tId.ColorTileMat.getTileColumn(undefined)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColumn(minX - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColumn(minX)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColumn(matrixMinX - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColumn(matrixMinX)).toBe(0);
        expect(P5tId.ColorTileMat.getTileColumn(centerX)).toBe(Math.floor(matrixColumns / 2));
        expect(P5tId.ColorTileMat.getTileColumn(matrixMaxX)).toBe(matrixColumns - 1);
        expect(P5tId.ColorTileMat.getTileColumn(matrixMaxX + 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColumn(maxX)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColumn(maxX + 1)).toBe(undefined);
      });
    });

    describe('getTileColor', (): void => {
      const cW = P5tId.ColorTileMat.tileColor.white;
      const cR = P5tId.ColorTileMat.tileColor.red;
      const cB = P5tId.ColorTileMat.tileColor.blue;
      const cG = P5tId.ColorTileMat.tileColor.green;
      const cY = P5tId.ColorTileMat.tileColor.yellow;

      test('Normal Case', (): void => {
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 0)?.y,
          ),
        ).toBe(cW);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 1)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 2)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 3)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 4)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 5)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 6)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 7)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(0, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(0, 8)?.y,
          ),
        ).toBe(cW);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 0)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 1)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 2)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 3)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 4)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 5)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 6)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 7)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(1, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(1, 8)?.y,
          ),
        ).toBe(cY);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 0)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 1)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 2)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 3)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 4)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 5)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 6)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 7)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(2, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(2, 8)?.y,
          ),
        ).toBe(cW);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 0)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 1)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 2)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 3)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 4)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 5)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 6)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 7)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(3, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(3, 8)?.y,
          ),
        ).toBe(cR);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 0)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 1)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 2)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 3)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 4)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 5)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 6)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 7)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(4, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(4, 8)?.y,
          ),
        ).toBe(cW);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 0)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 1)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 2)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 3)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 4)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 5)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 6)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 7)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(5, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(5, 8)?.y,
          ),
        ).toBe(cR);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 0)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 1)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 2)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 3)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 4)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 5)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 6)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 7)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(6, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(6, 8)?.y,
          ),
        ).toBe(cW);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 0)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 1)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 2)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 3)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 4)?.y,
          ),
        ).toBe(cB);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 5)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 6)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 7)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(7, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(7, 8)?.y,
          ),
        ).toBe(cY);

        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 0)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 0)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 1)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 1)?.y,
          ),
        ).toBe(cR);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 2)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 2)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 3)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 3)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 4)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 4)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 5)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 5)?.y,
          ),
        ).toBe(cY);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 6)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 6)?.y,
          ),
        ).toBe(cW);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 7)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 7)?.y,
          ),
        ).toBe(cG);
        expect(
          P5tId.ColorTileMat.getTileColor(
            P5tId.ColorTileMat.getTileCenter(8, 8)?.x,
            P5tId.ColorTileMat.getTileCenter(8, 8)?.y,
          ),
        ).toBe(cW);
      });

      test('Illegal Case', (): void => {
        expect(P5tId.ColorTileMat.getTileColor(undefined, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(centerX, undefined)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(undefined, undefined)).toBe(undefined);

        expect(P5tId.ColorTileMat.getTileColor(minX - 1, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(minX, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(matrixMinX - 1, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(matrixMaxX + 1, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(maxX, centerY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(maxX + 1, centerY)).toBe(undefined);

        expect(P5tId.ColorTileMat.getTileColor(centerX, minY - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(centerX, minY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(centerX, matrixMinY - 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(centerX, matrixMaxY + 1)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(centerX, maxY)).toBe(undefined);
        expect(P5tId.ColorTileMat.getTileColor(centerX, maxY + 1)).toBe(undefined);
      });
    });
  });

  describe('RingMat', (): void => {
    const minX = 45;
    const minY = 45;
    const maxX = 455;
    const maxY = 455;
    const centerX = Math.floor((minX + maxX) / 2);
    const centerY = Math.floor((minY + maxY) / 2);

    const radius = 190;
    const blueLineY = 88;
    const greenLineY = 410;
    const startPointBlueSideX = 250;
    const startPointBlueSideY = 198;
    const startPointGreenSideX = 250;
    const startPointGreenSideY = 300;

    describe('Property', (): void => {
      test('All Check', (): void => {
        expect(P5tId.RingMat.minX).toBe(minX);
        expect(P5tId.RingMat.minY).toBe(minY);
        expect(P5tId.RingMat.maxX).toBe(maxX);
        expect(P5tId.RingMat.maxY).toBe(maxY);
        expect(P5tId.RingMat.centerX).toBeGreaterThanOrEqual(centerX - 1);
        expect(P5tId.RingMat.centerX).toBeLessThanOrEqual(centerX + 1);
        expect(P5tId.RingMat.centerY).toBeGreaterThanOrEqual(centerY - 1);
        expect(P5tId.RingMat.centerY).toBeLessThanOrEqual(centerY + 1);

        expect(P5tId.RingMat.radius).toBe(radius);
        expect(P5tId.RingMat.blueLineY).toBe(blueLineY);
        expect(P5tId.RingMat.greenLineY).toBe(greenLineY);
        expect(P5tId.RingMat.startPointBlueSideX).toBe(startPointBlueSideX);
        expect(P5tId.RingMat.startPointBlueSideY).toBe(startPointBlueSideY);
        expect(P5tId.RingMat.startPointGreenSideX).toBe(startPointGreenSideX);
        expect(P5tId.RingMat.startPointGreenSideY).toBe(startPointGreenSideY);
      });
    });

    describe('isOnMat', (): void => {
      test('Normal Case', (): void => {
        expect(P5tId.RingMat.isOnMat(minX - 1, minY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX - 1, minY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX - 1, minY + 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX - 1, centerY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX - 1, maxY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

        expect(P5tId.RingMat.isOnMat(minX, minY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX, minY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(minX, minY + 1)).toBe(true);
        expect(P5tId.RingMat.isOnMat(minX, centerY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(minX, maxY - 1)).toBe(true);
        expect(P5tId.RingMat.isOnMat(minX, maxY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(minX, maxY + 1)).toBe(false);

        expect(P5tId.RingMat.isOnMat(centerX, minY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(centerX, minY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(centerX, minY + 1)).toBe(true);
        expect(P5tId.RingMat.isOnMat(centerX, centerY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(centerX, maxY - 1)).toBe(true);
        expect(P5tId.RingMat.isOnMat(centerX, maxY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(centerX, maxY + 1)).toBe(false);

        expect(P5tId.RingMat.isOnMat(maxX, minY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX, minY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(maxX, minY + 1)).toBe(true);
        expect(P5tId.RingMat.isOnMat(maxX, centerY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(maxX, maxY - 1)).toBe(true);
        expect(P5tId.RingMat.isOnMat(maxX, maxY)).toBe(true);
        expect(P5tId.RingMat.isOnMat(maxX, maxY + 1)).toBe(false);

        expect(P5tId.RingMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, minY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, centerY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, maxY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
      });

      test('Illegal Case', (): void => {
        expect(P5tId.RingMat.isOnMat(undefined, minY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(undefined, minY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(undefined, minY + 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(undefined, centerY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(undefined, maxY - 1)).toBe(false);
        expect(P5tId.RingMat.isOnMat(undefined, maxY)).toBe(false);
        expect(P5tId.RingMat.isOnMat(undefined, maxY + 1)).toBe(false);

        expect(P5tId.RingMat.isOnMat(minX - 1, undefined)).toBe(false);
        expect(P5tId.RingMat.isOnMat(minX, undefined)).toBe(false);
        expect(P5tId.RingMat.isOnMat(centerX, undefined)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX, undefined)).toBe(false);
        expect(P5tId.RingMat.isOnMat(maxX + 1, undefined)).toBe(false);
      });
    });

    describe('isInsideCircle', (): void => {
      test('Check some points', (): void => {
        expect(P5tId.RingMat.isInsideCircle(centerX, centerY)).toBe(true);
        expect(P5tId.RingMat.isInsideCircle(minX, minY)).toBe(false);
        expect(P5tId.RingMat.isInsideCircle(maxX, maxY)).toBe(false);
      });
    });

    describe('isInFrontOfBlueLine', (): void => {
      test('Check some points', (): void => {
        expect(P5tId.RingMat.isInFrontOfBlueLine(centerY)).toBe(true);
        expect(P5tId.RingMat.isInFrontOfBlueLine(minY)).toBe(false);
        expect(P5tId.RingMat.isInFrontOfBlueLine(maxY)).toBe(true);
      });
    });

    describe('isInFrontOfGreenLine', (): void => {
      test('Check some points', (): void => {
        expect(P5tId.RingMat.isInFrontOfGreenLine(centerY)).toBe(true);
        expect(P5tId.RingMat.isInFrontOfGreenLine(minY)).toBe(true);
        expect(P5tId.RingMat.isInFrontOfGreenLine(maxY)).toBe(false);
      });
    });
  });

  describe('SimpleTileMat', (): void => {
    const minX = 98;
    const minY = 142;
    const maxX = 402;
    const maxY = 358;
    const centerX = Math.floor((minX + maxX) / 2);
    const centerY = Math.floor((minY + maxY) / 2);

    const matrixMinX = minX;
    const matrixMinY = minY;
    const matrixMaxX = maxX;
    const matrixMaxY = maxY;
    const matrixRows = 5;
    const matrixColumns = 7;

    describe('isOnMat', (): void => {
      test('Normal Case', (): void => {
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, minY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, minY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, minY + 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, centerY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, maxY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, maxY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, maxY + 1)).toBe(false);

        expect(P5tId.SimpleTileMat.isOnMat(minX, minY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX, minY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(minX, minY + 1)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(minX, centerY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(minX, maxY - 1)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(minX, maxY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(minX, maxY + 1)).toBe(false);

        expect(P5tId.SimpleTileMat.isOnMat(centerX, minY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, minY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, minY + 1)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, centerY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, maxY - 1)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, maxY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, maxY + 1)).toBe(false);

        expect(P5tId.SimpleTileMat.isOnMat(maxX, minY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, minY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, minY + 1)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, centerY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, maxY - 1)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, maxY)).toBe(true);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, maxY + 1)).toBe(false);

        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, minY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, minY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, minY + 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, centerY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, maxY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, maxY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, maxY + 1)).toBe(false);
      });

      test('Illegal Case', (): void => {
        expect(P5tId.SimpleTileMat.isOnMat(undefined, minY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(undefined, minY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(undefined, minY + 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(undefined, centerY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(undefined, maxY - 1)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(undefined, maxY)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(undefined, maxY + 1)).toBe(false);

        expect(P5tId.SimpleTileMat.isOnMat(minX - 1, undefined)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(minX, undefined)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(centerX, undefined)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX, undefined)).toBe(false);
        expect(P5tId.SimpleTileMat.isOnMat(maxX + 1, undefined)).toBe(false);
      });
    });

    describe('getTileCenter', (): void => {
      test('Normal case', (): void => {
        expect(P5tId.SimpleTileMat.getTileCenter(0, 0)).toMatchObject({
          x: (maxX - minX) / (2 * matrixColumns) + minX,
          y: (maxY - minY) / (2 * matrixRows) + minY,
        });
        expect(P5tId.SimpleTileMat.getTileCenter(2, 3)).toMatchObject({
          x: (matrixColumns * (maxX - minX)) / (2 * matrixColumns) + minX,
          y: (matrixRows * (maxY - minY)) / (2 * matrixRows) + minY,
        });
        expect(P5tId.SimpleTileMat.getTileCenter(matrixRows - 1, matrixColumns - 1)).toMatchObject({
          x: maxX - (maxX - minX) / (2 * matrixColumns),
          y: maxY - (maxY - minY) / (2 * matrixRows),
        });
      });

      test('Illegal case', (): void => {
        expect(P5tId.SimpleTileMat.getTileCenter(undefined, Math.floor(matrixColumns / 2))).toBe(
          undefined,
        );
        expect(P5tId.SimpleTileMat.getTileCenter(Math.floor(matrixRows / 2), undefined)).toBe(
          undefined,
        );
        expect(P5tId.SimpleTileMat.getTileCenter(undefined, undefined)).toBe(undefined);

        expect(P5tId.SimpleTileMat.getTileCenter(-1, Math.floor(matrixColumns / 2))).toBe(
          undefined,
        );
        expect(P5tId.SimpleTileMat.getTileCenter(matrixRows, Math.floor(matrixColumns / 2))).toBe(
          undefined,
        );
        expect(P5tId.SimpleTileMat.getTileCenter(Math.floor(matrixRows / 2), -1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileCenter(Math.floor(matrixRows / 2), matrixColumns)).toBe(
          undefined,
        );
      });
    });

    describe('getTileMatrixIndex', (): void => {
      test('Normal case', (): void => {
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(matrixMinX, matrixMaxY)).toMatchObject({
          row: matrixRows - 1,
          column: 0,
        });
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(centerX, centerY)).toMatchObject({
          row: Math.floor(matrixRows / 2),
          column: Math.floor(matrixColumns / 2),
        });
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(matrixMaxX, matrixMinY)).toMatchObject({
          row: 0,
          column: matrixColumns - 1,
        });
      });

      test('Illegal case', (): void => {
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(undefined, centerY)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(centerX, undefined)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(undefined, undefined)).toBe(undefined);

        expect(P5tId.SimpleTileMat.getTileMatrixIndex(minX - 1, centerY)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(matrixMinX - 1, centerY)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(matrixMaxX + 1, centerY)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(maxX + 1, centerY)).toBe(undefined);

        expect(P5tId.SimpleTileMat.getTileMatrixIndex(centerX, minY - 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(centerX, matrixMinY - 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(centerX, matrixMaxY + 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileMatrixIndex(centerX, maxY + 1)).toBe(undefined);
      });
    });

    describe('getTileRow', (): void => {
      test('Check some y values', (): void => {
        expect(P5tId.SimpleTileMat.getTileRow(undefined)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileRow(minY - 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileRow(minY)).toBe(0);
        expect(P5tId.SimpleTileMat.getTileRow(matrixMinY - 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileRow(matrixMinY)).toBe(0);
        expect(P5tId.SimpleTileMat.getTileRow(centerY)).toBe(Math.floor(matrixRows / 2));
        expect(P5tId.SimpleTileMat.getTileRow(matrixMaxY)).toBe(matrixRows - 1);
        expect(P5tId.SimpleTileMat.getTileRow(matrixMaxY + 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileRow(maxY)).toBe(matrixRows - 1);
        expect(P5tId.SimpleTileMat.getTileRow(maxY + 1)).toBe(undefined);
      });
    });

    describe('getTileColumn', (): void => {
      test('Check some x values', (): void => {
        expect(P5tId.SimpleTileMat.getTileColumn(undefined)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileColumn(minX - 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileColumn(matrixMinX - 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileColumn(matrixMinX)).toBe(0);
        expect(P5tId.SimpleTileMat.getTileColumn(centerX)).toBe(Math.floor(matrixColumns / 2));
        expect(P5tId.SimpleTileMat.getTileColumn(matrixMaxX)).toBe(matrixColumns - 1);
        expect(P5tId.SimpleTileMat.getTileColumn(matrixMaxX + 1)).toBe(undefined);
        expect(P5tId.SimpleTileMat.getTileColumn(maxX + 1)).toBe(undefined);
      });
    });
  });

  const devMat01 = {
    minX: P5tId.DevMat01.minX,
    maxX: P5tId.DevMat01.maxX,
    minY: P5tId.DevMat01.minY,
    maxY: P5tId.DevMat01.maxY,
    centerX: P5tId.DevMat01.centerX,
    centerY: P5tId.DevMat01.centerY,
    isOnMat: P5tId.DevMat01.isOnMat,
  };

  const devMat02 = {
    minX: P5tId.DevMat02.minX,
    maxX: P5tId.DevMat02.maxX,
    minY: P5tId.DevMat02.minY,
    maxY: P5tId.DevMat02.maxY,
    centerX: P5tId.DevMat02.centerX,
    centerY: P5tId.DevMat02.centerY,
    isOnMat: P5tId.DevMat02.isOnMat,
  };

  const devMat03 = {
    minX: P5tId.DevMat03.minX,
    maxX: P5tId.DevMat03.maxX,
    minY: P5tId.DevMat03.minY,
    maxY: P5tId.DevMat03.maxY,
    centerX: P5tId.DevMat03.centerX,
    centerY: P5tId.DevMat03.centerY,
    isOnMat: P5tId.DevMat03.isOnMat,
  };

  const devMat04 = {
    minX: P5tId.DevMat04.minX,
    maxX: P5tId.DevMat04.maxX,
    minY: P5tId.DevMat04.minY,
    maxY: P5tId.DevMat04.maxY,
    centerX: P5tId.DevMat04.centerX,
    centerY: P5tId.DevMat04.centerY,
    isOnMat: P5tId.DevMat04.isOnMat,
  };

  const devMat05 = {
    minX: P5tId.DevMat05.minX,
    maxX: P5tId.DevMat05.maxX,
    minY: P5tId.DevMat05.minY,
    maxY: P5tId.DevMat05.maxY,
    centerX: P5tId.DevMat05.centerX,
    centerY: P5tId.DevMat05.centerY,
    isOnMat: P5tId.DevMat05.isOnMat,
  };

  const devMat06 = {
    minX: P5tId.DevMat06.minX,
    maxX: P5tId.DevMat06.maxX,
    minY: P5tId.DevMat06.minY,
    maxY: P5tId.DevMat06.maxY,
    centerX: P5tId.DevMat06.centerX,
    centerY: P5tId.DevMat06.centerY,
    isOnMat: P5tId.DevMat06.isOnMat,
  };

  const devMat07 = {
    minX: P5tId.DevMat07.minX,
    maxX: P5tId.DevMat07.maxX,
    minY: P5tId.DevMat07.minY,
    maxY: P5tId.DevMat07.maxY,
    centerX: P5tId.DevMat07.centerX,
    centerY: P5tId.DevMat07.centerY,
    isOnMat: P5tId.DevMat07.isOnMat,
  };

  const devMat08 = {
    minX: P5tId.DevMat08.minX,
    maxX: P5tId.DevMat08.maxX,
    minY: P5tId.DevMat08.minY,
    maxY: P5tId.DevMat08.maxY,
    centerX: P5tId.DevMat08.centerX,
    centerY: P5tId.DevMat08.centerY,
    isOnMat: P5tId.DevMat08.isOnMat,
  };

  const devMat09 = {
    minX: P5tId.DevMat09.minX,
    maxX: P5tId.DevMat09.maxX,
    minY: P5tId.DevMat09.minY,
    maxY: P5tId.DevMat09.maxY,
    centerX: P5tId.DevMat09.centerX,
    centerY: P5tId.DevMat09.centerY,
    isOnMat: P5tId.DevMat09.isOnMat,
  };

  const devMat10 = {
    minX: P5tId.DevMat10.minX,
    maxX: P5tId.DevMat10.maxX,
    minY: P5tId.DevMat10.minY,
    maxY: P5tId.DevMat10.maxY,
    centerX: P5tId.DevMat10.centerX,
    centerY: P5tId.DevMat10.centerY,
    isOnMat: P5tId.DevMat10.isOnMat,
  };

  const devMat11 = {
    minX: P5tId.DevMat11.minX,
    maxX: P5tId.DevMat11.maxX,
    minY: P5tId.DevMat11.minY,
    maxY: P5tId.DevMat11.maxY,
    centerX: P5tId.DevMat11.centerX,
    centerY: P5tId.DevMat11.centerY,
    isOnMat: P5tId.DevMat11.isOnMat,
  };

  const devMat12 = {
    minX: P5tId.DevMat12.minX,
    maxX: P5tId.DevMat12.maxX,
    minY: P5tId.DevMat12.minY,
    maxY: P5tId.DevMat12.maxY,
    centerX: P5tId.DevMat12.centerX,
    centerY: P5tId.DevMat12.centerY,
    isOnMat: P5tId.DevMat12.isOnMat,
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
});
