import { CubeSensorCharListner, CubeSensorChar } from './char/sensorChar';
import { CubeBatteryCharListner, CubeBatteryChar } from './char/batteryChar';
import { CubeButtonCharListner, CubeButtonChar } from './char/buttonChar';
import { CubeIdCharListner, CubeIDChar } from './char/idChar';
import { CubeLightChar } from './char/lightChar';
import { CubeMotorChar } from './char/motorChar';
import { CubeSoundChar } from './char/soundChar';

export type CubeListner =
  | CubeSensorCharListner
  | CubeBatteryCharListner
  | CubeButtonCharListner
  | CubeIdCharListner;

export type CubeCharInstance =
  | CubeIDChar
  | CubeMotorChar
  | CubeLightChar
  | CubeSensorChar
  | CubeBatteryChar
  | CubeSoundChar
  | CubeButtonChar
  | undefined;

interface CubeBaseIF {
  connect(): Promise<CubeBase>;
  disconnect(): void;
  setFrameRate(fps: number): void;

  idChar: CubeIDChar | undefined;
  motorChar: CubeMotorChar | undefined;
  lightChar: CubeLightChar | undefined;
  sensorChar: CubeSensorChar | undefined;
  batteryChar: CubeBatteryChar | undefined;
  soundChar: CubeSoundChar | undefined;
  buttonChar: CubeButtonChar | undefined;
}

export class CubeBase implements CubeBaseIF {
  public idChar: CubeIDChar | undefined = undefined;
  public motorChar: CubeMotorChar | undefined = undefined;
  public lightChar: CubeLightChar | undefined = undefined;
  public sensorChar: CubeSensorChar | undefined = undefined;
  public batteryChar: CubeBatteryChar | undefined = undefined;
  public soundChar: CubeSoundChar | undefined = undefined;
  public buttonChar: CubeButtonChar | undefined = undefined;
  private device: BluetoothDevice | undefined = undefined;
  // private server: BluetoothRemoteGATTServer | undefined = undefined;
  // private service: BluetoothRemoteGATTService | undefined = undefined;

  /**
   * charcteristics class and its instance.
   */
  private charStatusArray: boolean[] = [false, false, false, false, false, false, false];

  /**
   * State GATT connected or not.
   */
  private isConnected = false;

  constructor(device: BluetoothDevice) {
    this.device = device;
  }

  /**
   * Connect to the toio™Core Cube. Internally, this function includes GATT connect and prepare for all of the Characteristics.
   *
   * @returns Promise. `resolve` handler says that API access to cube are available.
   */
  public connect(): Promise<CubeBase> {
    return new Promise((resolve, reject) => {
      const { device } = this;
      if (device) {
        const { gatt } = device;
        if (gatt) {
          // Try to connect in GATT layer
          gatt
            ?.connect()
            .then((server: BluetoothRemoteGATTServer) => {
              // GATT connected
              this.isConnected = true;
              // this.server = server;

              // Get Primary Service as soon as possible.
              const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
              return server.getPrimaryService(CORE_CUBE_SERVICE_UUID);
            })
            .then((service: BluetoothRemoteGATTService) => {
              // Got Primary Service
              // this.service = service;

              // Get all of the Characteristics by calling prepare().
              const charArray: CubeCharInstance[] = [];
              charArray.push((this.idChar = new CubeIDChar(service)));
              charArray.push((this.motorChar = new CubeMotorChar(service)));
              charArray.push((this.lightChar = new CubeLightChar(service)));
              charArray.push((this.sensorChar = new CubeSensorChar(service)));
              charArray.push((this.batteryChar = new CubeBatteryChar(service)));
              charArray.push((this.soundChar = new CubeSoundChar(service)));
              charArray.push((this.buttonChar = new CubeButtonChar(service)));

              for (let index = 0; index < charArray.length; index++) {
                const characteristic = charArray[index];
                characteristic
                  ?.prepare()
                  .then(() => {
                    if (this.updateCharState(index, true)) {
                      resolve(this);
                    }
                  })
                  .catch((error: Error) => {
                    reject(error);
                  });
              }
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(new Error('device.gatt does not exist.'));
        }
      } else {
        reject(new Error('device: BluetoothDevice does not exist.'));
      }
    });
  }

  /**
   * Disconnet from the toio™Core Cube.
   */
  public disconnect(): void {
    const { device } = this;
    if (device && this.isConnected) {
      const { gatt } = device;
      if (gatt) {
        this.isConnected = false;
        gatt.disconnect();
        this.initDeviceInfo();
      }
    }
  }

  /**
   * Initialize data on Cube.
   */
  private initDeviceInfo(): void {
    this.idChar = undefined;
    this.motorChar = undefined;
    this.lightChar = undefined;
    this.sensorChar = undefined;
    this.batteryChar = undefined;
    this.soundChar = undefined;
    this.buttonChar = undefined;

    this.device = undefined;
    // this.server = undefined;
    // this.service = undefined;
  }

  /**
   * Update status whether the character is ready or not.
   *
   * @param charIndex Index for Characteristics.
   * @param isReady Any access to the Characteristics specified with `charIndex` is available or not.
   *
   * @returns `true` returns when all the Characteristics have been ready.
   */
  private updateCharState(charIndex: number, isReady: boolean): boolean {
    this.charStatusArray[charIndex] = isReady;

    for (const status of this.charStatusArray) {
      if (!status) {
        return false;
      }
    }

    return true;
  }

  /**
   * Set framerate.
   *
   * @param fps. Default value is 15.
   */
  public setFrameRate(fps: number): void {
    this.idChar?.setFrameRate(fps);
    this.motorChar?.setFrameRate(fps);
    this.lightChar?.setFrameRate(fps);
    this.sensorChar?.setFrameRate(fps);
    this.batteryChar?.setFrameRate(fps);
    this.soundChar?.setFrameRate(fps);
    this.buttonChar?.setFrameRate(fps);
  }
}
