import { CubeBase } from './cubeBase';

export class CubeScanner {
  /**
   * Scan a new cube.
   *
   * @returns promise. `resolve` handler supplies a `CubeChar` class instance corresponding to scanned and selected cube.
   */
  static scanNewCube(): Promise<CubeBase> {
    // Scan only toio™Core Cube
    const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
    const options = {
      filters: [{ services: [CORE_CUBE_SERVICE_UUID] }],
    };

    return new Promise((resolve, reject) => {
      const navigatorObj = window.navigator;
      if (navigatorObj?.bluetooth) {
        navigatorObj.bluetooth.requestDevice(options).then((device: BluetoothDevice) => {
          const cube = new CubeBase(device);
          resolve(cube);
        });
      } else {
        reject(new Error('navigatorObj.bluetooth does not exist.'));
      }
    });
  }
}
