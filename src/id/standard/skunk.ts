class Skunk extends StandardId {
  public static readonly names = {
    blueSkunk: 'blueSkunk',
    greenSkunk: 'greenSkunk',
    yellowSkunk: 'yellowSkunk',
    orangeSkunk: 'orangeSkunk',
    redSkunk: 'redSkunk',
    brownSkunk: 'brownSkunk',
  };

  // Override
  public static readonly idTable = [
    { name: Skunk.names.blueSkunk, id: 3670078 },
    { name: Skunk.names.greenSkunk, id: 3670042 },
    { name: Skunk.names.yellowSkunk, id: 3670080 },
    { name: Skunk.names.orangeSkunk, id: 3670044 },
    { name: Skunk.names.redSkunk, id: 3670082 },
    { name: Skunk.names.brownSkunk, id: 3670046 },
  ];
}
