class Card extends StandardId {
  public static readonly names = {
    typhoonCard: 'typhoonCard',
    rushCard: 'rushCard',
    autoTackleCard: 'autoTackleCard',
    randomCard: 'randomCard',
    pushPowerUpCard: 'pushPowerUpCard',
    haritePowerUpCard: 'haritePowerUpCard',
    sideAttackCard: 'sideAttackCard',
    easyModeCard: 'easyModeCard',
    leftCard: 'leftCard',
    rightCard: 'rightCard',
    frontCard: 'frontCard',
    backCard: 'backCard',
    goCard: 'goCard',
  };

  // Override
  public static readonly idTable = [
    { name: Card.names.typhoonCard, id: 3670016 },
    { name: Card.names.rushCard, id: 3670054 },
    { name: Card.names.autoTackleCard, id: 3670018 },
    { name: Card.names.randomCard, id: 3670056 },
    { name: Card.names.pushPowerUpCard, id: 3670020 },
    { name: Card.names.haritePowerUpCard, id: 3670058 },
    { name: Card.names.sideAttackCard, id: 3670022 },
    { name: Card.names.easyModeCard, id: 3670060 },
    { name: Card.names.leftCard, id: 3670024 },
    { name: Card.names.rightCard, id: 3670062 },
    { name: Card.names.frontCard, id: 3670026 },
    { name: Card.names.backCard, id: 3670064 },
    { name: Card.names.goCard, id: 3670028 },
  ];
}
