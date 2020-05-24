import { StandardId } from './standardId';

export class SimpleCardSymbol extends StandardId {
  public static readonly names = {
    markExclamation: 'markExclamation',
    markUp: 'markUp',
    markQuestion: 'markQuestion',
    markPlus: 'markPlus',
    markMinus: 'markMinus',
    markEqual: 'markEqual',
    markLeft: 'markLeft',
    markDown: 'markDown',
    markRight: 'markRight',
    markMultiple: 'markMultiple',
    markDivision: 'markDivision',
    markPercent: 'markPercent',
  };

  // Override
  public static readonly idTable = [
    { name: SimpleCardSymbol.names.markExclamation, id: 3670305 },
    { name: SimpleCardSymbol.names.markUp, id: 3670366 },
    { name: SimpleCardSymbol.names.markQuestion, id: 3670335 },
    { name: SimpleCardSymbol.names.markPlus, id: 3670315 },
    { name: SimpleCardSymbol.names.markMinus, id: 3670317 },
    { name: SimpleCardSymbol.names.markEqual, id: 3670333 },
    { name: SimpleCardSymbol.names.markLeft, id: 3670332 },
    { name: SimpleCardSymbol.names.markDown, id: 3670367 },
    { name: SimpleCardSymbol.names.markRight, id: 3670334 },
    { name: SimpleCardSymbol.names.markMultiple, id: 3670314 },
    { name: SimpleCardSymbol.names.markDivision, id: 3670319 },
    { name: SimpleCardSymbol.names.markPercent, id: 3670309 },
  ];
}
