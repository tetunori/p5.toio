class CubeConnector {
  /**
   * Connect to new toio™Core Cube.
   *
   * @returns Promise. `resolve` handler includes a instance of connected `Cube`.
   */
  public static connectNewCube = (): Promise<CubeBase> => {
    return new Promise((resolve, reject) => {
      CubeScanner.scanNewCube()
        .then((cube) => {
          return cube.connect();
        })
        .then((cube) => {
          // Now the Cube is ready
          resolve(cube);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
