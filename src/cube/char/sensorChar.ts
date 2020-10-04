import { CubeChar } from './char';
export type sensorInfo = {
  flat: boolean;
  posture: string;
  shakeLevel: number;
};

export type CubeFlatListner = (isFlat: boolean) => void;
export type CubeCollisionListner = () => void;
export type CubeDoubleTapListner = () => void;
export type CubePostureListner = (posture: string) => void;
export type CubeShakeLevelListner = (shakeLevel: number) => void;
export type CubeSensorCharListner =
  | CubeFlatListner
  | CubeCollisionListner
  | CubeDoubleTapListner
  | CubePostureListner
  | CubeShakeLevelListner;

export class CubeSensorChar extends CubeChar {
  readonly uuid: string = '10b20106-5b3b-4571-9508-cf3efcd7bbae';

  /**
   * Posture IDs.
   */
  static postureId = {
    top: 'top',
    bottom: 'bottom',
    back: 'back',
    front: 'front',
    right: 'right',
    left: 'left',
  } as const;

  /**
   * Shake level IDs.
   */
  static shakeLevelId = {
    noDetection: 0x00,
    level1: 0x01,
    level2: 0x02,
    level3: 0x03,
    level4: 0x04,
    level5: 0x05,
    level6: 0x06,
    level7: 0x07,
    level8: 0x08,
    level9: 0x09,
    level10: 0x0a,
  } as const;

  private sensorInfo: sensorInfo = {
    flat: false,
    posture: CubeSensorChar.postureId.top,
    shakeLevel: CubeSensorChar.shakeLevelId.noDetection,
  };

  private cbFlat: CubeFlatListner[] = [];
  private cbCollision: CubeCollisionListner[] = [];
  private cbDoubleTapped: CubeCollisionListner[] = [];
  private cbPostureChanged: CubePostureListner[] = [];
  private cbShakeLevelChanged: CubeShakeLevelListner[] = [];

  /**
   * Prepare for using sensor characteristic function.
   *
   * @returns Promise. `resolve` handler says that methods are available in this class.
   */
  public prepare(): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      super
        .prepare()
        .then(() => {
          // Enable notification
          this.characteristic.addEventListener('characteristicvaluechanged', (event: Event) => {
            const target = event.target as BluetoothRemoteGATTCharacteristic;
            if (target?.value) {
              this.setSensorInfo(target.value);
            }
          });
          this.characteristic
            .startNotifications()
            .then(() => {
              return this.readSensorInfo();
            })
            .then(() => {
              resolve('characteristic resolve');
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Get current flat status.
   *
   * @returns is flat or not.
   */
  public isFlat(): boolean {
    return this.sensorInfo.flat;
  }

  /**
   * Get current posture.
   *
   * @returns string id of posture.
   */
  public getPosture(): string {
    return this.sensorInfo.posture;
  }

  /**
   * Get current shake level.
   *
   * @returns id of shake level.
   */
  public getShakeLevel(): number {
    return this.sensorInfo.shakeLevel;
  }

  /**
   * Read sensorInfo from Cube.
   *
   * @returns Promise. `resolve` handler says that sensorInfo was correctly got.
   */
  private readSensorInfo(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.readValue()
        .then((readValue) => {
          this.setSensorInfo(readValue);
          resolve('Success');
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Set sensor info into the member variable.
   *
   * @param data read data from Cube sensor charcteristics
   *
   */
  private setSensorInfo(data: DataView): void {
    const previousSensorInfo = Object.assign({}, this.sensorInfo);

    const INFO_TYPE_INDEX = 0;
    const INFO_TYPE_DETECTED = 1;
    if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_DETECTED) {
      const FLAT_INDEX = 1;
      const COLLISION_INDEX = 2;
      const DOUBLE_TAP_INDEX = 3;
      const POSTURE_INDEX = 4;
      const SHAKE_LEVEL_INDEX = 5;

      if (data.getUint8(DOUBLE_TAP_INDEX)) {
        for (const cb of this.cbDoubleTapped) {
          cb();
        }
      }

      if (data.getUint8(COLLISION_INDEX)) {
        for (const cb of this.cbCollision) {
          cb();
        }
      }

      this.sensorInfo.flat = !!data.getUint8(FLAT_INDEX);
      if (previousSensorInfo.flat !== this.sensorInfo.flat) {
        for (const cb of this.cbFlat) {
          cb(this.sensorInfo.flat);
        }
      }

      this.sensorInfo.posture = this.convertPostureValueToId(data.getUint8(POSTURE_INDEX));
      if (previousSensorInfo.posture !== this.sensorInfo.posture) {
        for (const cb of this.cbPostureChanged) {
          cb(this.sensorInfo.posture);
        }
      }

      this.sensorInfo.shakeLevel = this.convertShakeLevelValueToId(
        data.getUint8(SHAKE_LEVEL_INDEX),
      );
      if (previousSensorInfo.shakeLevel !== this.sensorInfo.shakeLevel) {
        for (const cb of this.cbShakeLevelChanged) {
          cb(this.sensorInfo.shakeLevel);
        }
      }
    }
  }

  /**
   * Issuing registered callback with current info.
   */
  private callbackCurrentInfo(): void {
    for (const cb of this.cbFlat) {
      cb(this.sensorInfo.flat);
    }

    for (const cb of this.cbPostureChanged) {
      cb(this.sensorInfo.posture);
    }

    for (const cb of this.cbShakeLevelChanged) {
      cb(this.sensorInfo.shakeLevel);
    }
  }

  /**
   * Register callback.
   *
   * @param type Specify the type from 'flat', 'collision', 'doubletap' or 'posture'.
   * @param listener: Callback function with param info: sensorInfo and return: void.
   *
   */
  public addEventListener(type: string, listener: CubeSensorCharListner): void {
    const TYPE_FLAT = 'flat';
    const TYPE_COLLISION = 'collision';
    const TYPE_DOUBLE_TAP = 'doubletap';
    const TYPE_POSTURE = 'posture';
    const TYPE_SHAKE_LEVEL = 'shakelevel';

    if (type === TYPE_FLAT) {
      this.cbFlat.push(listener as CubeFlatListner);
    } else if (type === TYPE_COLLISION) {
      this.cbCollision.push(listener as CubeCollisionListner);
    } else if (type === TYPE_DOUBLE_TAP) {
      this.cbDoubleTapped.push(listener as CubeCollisionListner);
    } else if (type === TYPE_POSTURE) {
      this.cbPostureChanged.push(listener as CubePostureListner);
    } else if (type === TYPE_SHAKE_LEVEL) {
      this.cbShakeLevelChanged.push(listener as CubeShakeLevelListner);
    }
    this.callbackCurrentInfo();
  }

  /**
   * Convert from posture value to string ID value.
   *
   * @param value posture value.
   *
   * @returns ID name string.
   */
  private convertPostureValueToId(value: number): string {
    const POSTURE_VALUE_MIN = 0x01;
    const POSTURE_VALUE_MAX = 0x06;

    if (value < POSTURE_VALUE_MIN || value > POSTURE_VALUE_MAX) {
      return 'invalid';
    }

    const matrix: string[] = [
      CubeSensorChar.postureId.top,
      CubeSensorChar.postureId.bottom,
      CubeSensorChar.postureId.back,
      CubeSensorChar.postureId.front,
      CubeSensorChar.postureId.right,
      CubeSensorChar.postureId.left,
    ];

    return matrix[value - 1];
  }

  /**
   * Convert from shake level value to string ID value.
   *
   * @param value shake level value.
   *
   * @returns ID.
   */
  private convertShakeLevelValueToId(value: number): number {
    const SHAKE_LEVEL_VALUE_MIN = 0x00;
    const SHAKE_LEVEL_VALUE_MAX = 0x0a;

    if (value < SHAKE_LEVEL_VALUE_MIN || value > SHAKE_LEVEL_VALUE_MAX) {
      // Return no detecton for invalid values.
      return CubeSensorChar.shakeLevelId.noDetection;
    }

    return value;
  }
}
