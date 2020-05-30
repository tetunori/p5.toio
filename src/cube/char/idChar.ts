import { CubeChar } from './char';
import { Id } from '../../id/id';
export type positionIdInfo =
  | {
      centerX: number;
      centerY: number;
      angle: number;
      sensorX: number;
      sensorY: number;
    }
  | undefined;

export type standardIdInfo =
  | {
      id: string;
      idNum: number;
      angle: number;
    }
  | undefined;

export type idInfo = {
  positionId: positionIdInfo;
  standardId: standardIdInfo;
};

export type CubePositionIdListner = (info: positionIdInfo) => void;
export type CubeStandardIdListner = (info: standardIdInfo) => void;
export type CubeIdCharListner = CubePositionIdListner | CubeStandardIdListner;

export class CubeIDChar extends CubeChar {
  readonly uuid: string = '10b20101-5b3b-4571-9508-cf3efcd7bbae';

  private idInfo: idInfo = {
    positionId: undefined,
    standardId: undefined,
  };

  private cbPositionId: (CubePositionIdListner | undefined)[] = [];
  private cbStandardId: (CubeStandardIdListner | undefined)[] = [];

  /**
   * Prepare for using id characteristic function.
   *
   * @returns Promise. `resolve` handler says that methods are available in this class.
   */
  public prepare(): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      super
        .prepare()
        .then(() => {
          if (this.characteristic) {
            // Enable notification
            this.characteristic.addEventListener('characteristicvaluechanged', (event: Event) => {
              const target = event.target as BluetoothRemoteGATTCharacteristic;
              if (target?.value) {
                this.setIdInfo(target.value);
              }
            });
            this.characteristic
              .startNotifications()
              .then(() => {
                return this.readIdInfo();
              })
              .then(() => {
                resolve('characteristic resolve');
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            reject(new Error('characteristic does not exist.'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Get current Position Id.
   *
   * @returns Position Id info.
   */
  public getPositionId(): positionIdInfo {
    return this.idInfo.positionId;
  }

  /**
   * Get current Standard Id.
   *
   * @returns Standard Id info.
   */
  public getStandardId(): standardIdInfo {
    return this.idInfo.standardId;
  }

  /**
   * Read idInfo from Cube.
   *
   * @returns Promise. `resolve` handler says that idInfo was correctly got.
   */
  private readIdInfo(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.readValue()
        .then((readValue) => {
          this.setIdInfo(readValue);
          resolve('Success');
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Set Id info into the member variable.
   *
   * @param data read data from Cube ID charcteristics
   *
   */
  private setIdInfo(data: DataView): void {
    const previousIdInfo = Object.assign({}, this.idInfo);

    const INFO_TYPE_INDEX = 0;
    const INFO_TYPE_POSITION_ID = 1;
    const INFO_TYPE_STANDARD_ID = 2;
    const INFO_TYPE_POSITION_ID_MISSED = 3;
    const INFO_TYPE_STANDARD_ID_MISSED = 4;

    if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_POSITION_ID) {
      const CENTER_X_INDEX = 1;
      const CENTER_Y_INDEX = 3;
      const ANGLE_INDEX = 5;
      const SENSOR_X_INDEX = 7;
      const SENSOR_Y_INDEX = 9;

      this.idInfo.positionId = {
        centerX: data.getUint16(CENTER_X_INDEX, true),
        centerY: data.getUint16(CENTER_Y_INDEX, true),
        angle: data.getUint16(ANGLE_INDEX, true),
        sensorX: data.getUint16(SENSOR_X_INDEX, true),
        sensorY: data.getUint16(SENSOR_Y_INDEX, true),
      };

      if (this.isPositionIdUpdated(previousIdInfo.positionId, this.idInfo.positionId)) {
        for (const cb of this.cbPositionId) {
          cb?.(this.idInfo.positionId);
        }
      }
    } else if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_STANDARD_ID) {
      const STANDARD_ID_INDEX = 1;
      const ANGLE_INDEX = 5;

      this.idInfo.standardId = {
        idNum: data.getUint32(STANDARD_ID_INDEX, true),
        id: Id.getStandardIdName(data.getUint32(STANDARD_ID_INDEX, true)),
        angle: data.getUint16(ANGLE_INDEX, true),
      };

      if (this.isStandardIdUpdated(previousIdInfo.standardId, this.idInfo.standardId)) {
        for (const cb of this.cbStandardId) {
          cb?.(this.idInfo.standardId);
        }
      }
    } else if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_POSITION_ID_MISSED) {
      this.idInfo.positionId = undefined;
      for (const cb of this.cbPositionId) {
        cb?.(this.idInfo.positionId);
      }
    } else if (data.getUint8(INFO_TYPE_INDEX) === INFO_TYPE_STANDARD_ID_MISSED) {
      this.idInfo.standardId = undefined;
      for (const cb of this.cbStandardId) {
        cb?.(this.idInfo.standardId);
      }
    }
  }

  /**
   * Confirm Position ID is updated or not.
   *
   * @param prev previous positionID info
   * @param current current positionID info
   *
   * @returns boolean. true if there is diffence between prev and current
   */
  private isPositionIdUpdated(prev: positionIdInfo, current: positionIdInfo): boolean {
    if (prev?.centerX !== current?.centerX) {
      return true;
    }
    if (prev?.centerY !== current?.centerY) {
      return true;
    }
    if (prev?.angle !== current?.angle) {
      return true;
    }
    if (prev?.sensorX !== current?.sensorX) {
      return true;
    }
    if (prev?.sensorY !== current?.sensorY) {
      return true;
    }

    return false;
  }

  /**
   * Confirm Standard ID is updated or not.
   *
   * @param prev previous standardID info
   * @param current current standardID info
   *
   * @returns boolean. true if there is diffence between prev and current
   */
  private isStandardIdUpdated(prev: standardIdInfo, current: standardIdInfo): boolean {
    if (prev?.id !== current?.id) {
      return true;
    }
    if (prev?.idNum !== current?.idNum) {
      return true;
    }
    if (prev?.angle !== current?.angle) {
      return true;
    }

    return false;
  }

  /**
   * Issuing registered callback with current info.
   */
  private callbackCurrentInfo(): void {
    for (const cb of this.cbPositionId) {
      cb?.(this.idInfo.positionId);
    }

    for (const cb of this.cbStandardId) {
      cb?.(this.idInfo.standardId);
    }
  }

  /**
   * Register callback.
   *
   * @param type Specify the type from 'positionid' or 'standardid'.
   * @param listener: Callback function.
   *
   */
  public addEventListener(type: string, listener: CubeIdCharListner): void {
    const TYPE_POSITION = 'positionid';
    const TYPE_STANDARD = 'standardid';

    if (type === TYPE_POSITION) {
      this.cbPositionId.push(listener as CubePositionIdListner);
    } else if (type === TYPE_STANDARD) {
      this.cbStandardId.push(listener as CubeStandardIdListner);
    }
    this.callbackCurrentInfo();
  }
}
