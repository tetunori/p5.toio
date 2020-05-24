describe('CubeUtil', (): void => {
  test('clipNumberUInt8 test', (): void => {
    const testNumber = 255;
    const response: number = CubeUtil.clipNumberUInt8(testNumber);
    expect(response).toBe(testNumber);
  });
});
