class Sticker extends StandardId {
  public static readonly names = {
    speedUpSticker: 'speedUpSticker',
    speedDownSticker: 'speedDownSticker',
    wobbleSticker: 'wobbleSticker',
    panicSticker: 'panicSticker',
    spinSticker: 'spinSticker',
    shockSticker: 'shockSticker',
  };

  // Override
  public static readonly idTable = [
    { name: Sticker.names.speedUpSticker, id: 3670066 },
    { name: Sticker.names.speedDownSticker, id: 3670030 },
    { name: Sticker.names.wobbleSticker, id: 3670068 },
    { name: Sticker.names.panicSticker, id: 3670032 },
    { name: Sticker.names.spinSticker, id: 3670070 },
    { name: Sticker.names.shockSticker, id: 3670034 },
  ];
}
