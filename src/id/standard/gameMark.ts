import { StandardId } from './standardId';

export class GameMark extends StandardId {
  public static readonly names = {
    craftFighter: 'craftFighter',
    rythmAndGo: 'rythmAndGo',
    skunkChaser: 'skunkChaser',
    fingerStrike2P: 'fingerStrike2P',
    fingerStrike1P: 'fingerStrike1P',
    freeMove: 'freeMove',
  };

  // Override
  public static readonly idTable = [
    { name: GameMark.names.craftFighter, id: 3670048 },
    { name: GameMark.names.rythmAndGo, id: 3670052 },
    { name: GameMark.names.skunkChaser, id: 3670086 },
    { name: GameMark.names.fingerStrike2P, id: 3670050 },
    { name: GameMark.names.fingerStrike1P, id: 3670088 },
    { name: GameMark.names.freeMove, id: 3670084 },
  ];
}
