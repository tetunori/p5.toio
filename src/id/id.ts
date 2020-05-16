class Id {
  public static Card = Card;
  public static GameMark = GameMark;
  public static Skunk = Skunk;
  public static Sticker = Sticker;
  public static SimpleCardNumber = SimpleCardNumber;
  public static SimpleCardAlphabet = SimpleCardAlphabet;
  public static SimpleCardSymbol = SimpleCardSymbol;

  public static ColorTileMat = ColorTileMat;
  public static RingMat = RingMat;
  public static SimpleTileMat = SimpleTileMat;
  public static DevMat01 = DevMat01;
  public static DevMat02 = DevMat02;
  public static DevMat03 = DevMat03;
  public static DevMat04 = DevMat04;
  public static DevMat05 = DevMat05;
  public static DevMat06 = DevMat06;
  public static DevMat07 = DevMat07;
  public static DevMat08 = DevMat08;
  public static DevMat09 = DevMat09;
  public static DevMat10 = DevMat10;
  public static DevMat11 = DevMat11;
  public static DevMat12 = DevMat12;

  /**
   * Get standard ID string name.
   *
   * @param value standard ID number value
   *
   * @returns ID name string. If specified standardID is not supported, this function returns value.toString().
   */
  public static getStandardIdName(value: number): string {
    const idClasses = [
      Card,
      Skunk,
      Sticker,
      GameMark,
      SimpleCardNumber,
      SimpleCardAlphabet,
      SimpleCardSymbol,
    ];
    for (const targetClass of idClasses) {
      const idName = targetClass.getIdName(value);
      if (idName !== undefined) {
        return idName;
      }
    }

    // Not Found
    return value.toString();
  }
}
