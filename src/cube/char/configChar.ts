import { CubeChar } from './char';

export type configInfo = {
  bleProtcolVersion: string;
};

export type CubeProtocolVersionListner = (version: string) => void;
export type CubeConfigCharListner = CubeProtocolVersionListner;

export class CubeConfigChar extends CubeChar {
  readonly uuid: string = '10b201ff-5b3b-4571-9508-cf3efcd7bbae';

  /**
   * Command IDs.
   */
  private cmdId = {
    requestBleProtocolVersion: 0x01,
    configMagnet: 0x1b,
    configPoseAngle: 0x1d,
  } as const;

  /**
   * Magnet configuration IDs.
   */
  private magConfigId = {
    disable: 0x00,
    enable: 0x01,
  } as const;

  /**
   * Pose angle notification type IDs.
   */
  static poseAngleNotifyTypeId = {
    euler: 0x01,
    quaternion: 0x02,
  } as const;

  private configInfo: configInfo = {
    bleProtcolVersion: '0.0.0',
  };

  private cbProtocolVersion: CubeProtocolVersionListner[] = [];

  /**
   * Prepare for using configuration characteristic function.
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
              this.setConfigInfo(target.value);
            }
          });
          this.characteristic
            .startNotifications()
            .then(() => {
              return this.requestBleProtocolVersion();
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
   * Get BLE protocol version.
   *
   * @returns string id of BLE protocol version.
   */
  public getProtocolVersion(): string {
    return this.configInfo.bleProtcolVersion;
  }

  /**
   * Set configuration info into the member variable.
   *
   * @param data read data from Cube configuration charcteristics
   *
   */
  private setConfigInfo(data: DataView): void {
    // const previousConfigInfo = Object.assign({}, this.configInfo);

    const CONFIG_TYPE_INDEX = 0;
    const CONFIG_TYPE_BLE_PROTOCOL_VERSION = 0x81;
    if (data.getUint8(CONFIG_TYPE_INDEX) === CONFIG_TYPE_BLE_PROTOCOL_VERSION) {
      const BLE_PROTOCOL_VERSION_INDEX = 2;
      const BLE_PROTOCOL_VERSION_SIZE = 5;

      let protocolVersionText = '';
      for (let i = 0; i < BLE_PROTOCOL_VERSION_SIZE; i++) {
        protocolVersionText += String.fromCharCode(data.getUint8(BLE_PROTOCOL_VERSION_INDEX + i));
      }
      console.log('BLE Protocol version: ' + protocolVersionText);
      this.configInfo.bleProtcolVersion = protocolVersionText;

      for (const cb of this.cbProtocolVersion) {
        cb(this.configInfo.bleProtcolVersion);
      }
    }
  }

  /**
   * Issuing registered callback with current info.
   */
  private callbackCurrentInfo(): void {
    for (const cb of this.cbProtocolVersion) {
      cb(this.configInfo.bleProtcolVersion);
    }
  }

  /**
   * Register callback.
   *
   * @param type Specify the type from 'protocolversion'.
   * @param listener: Callback function with param info: configInfo and return: void.
   *
   */
  public addEventListener(type: string, listener: CubeConfigCharListner): void {
    const TYPE_PROTOCOL_VERSION = 'protocolversion';

    if (type === TYPE_PROTOCOL_VERSION) {
      this.cbProtocolVersion.push(listener as CubeProtocolVersionListner);
    }
    this.callbackCurrentInfo();
  }

  /**
   * Enable magnet function.
   */
  public enableMagnet(): void {
    const RESERVED = 0x00;
    const buf = new Uint8Array([this.cmdId.configMagnet, RESERVED, this.magConfigId.enable]);
    this.writeValue(buf);
  }

  /**
   * Disable magnet function.
   */
  public disableMagnet(): void {
    const RESERVED = 0x00;
    const buf = new Uint8Array([this.cmdId.configMagnet, RESERVED, this.magConfigId.disable]);
    this.writeValue(buf);
  }

  /**
   * Enable pose angle function.
   */
  public enablePoseAngle(notifyType = CubeConfigChar.poseAngleNotifyTypeId.euler): void {
    const RESERVED = 0x00;
    const DURATION = 0x01; // 10 msec
    const NOTIFY_ALWAYS = 0x00;
    const buf = new Uint8Array([
      this.cmdId.configPoseAngle,
      RESERVED,
      notifyType,
      DURATION,
      NOTIFY_ALWAYS,
    ]);

    this.writeValue(buf);
  }

  /**
   * Disable pose angle function.
   */
  public disablePoseAngle(): void {
    const RESERVED = 0x00;
    const DURATION = 0x00; // Stop pose angle notification.
    const PADDING = 0x00;
    const buf = new Uint8Array([this.cmdId.configPoseAngle, RESERVED, PADDING, DURATION, PADDING]);
    this.writeValue(buf);
  }

  /**
   * Request BLE protocol version.
   */
  private requestBleProtocolVersion(): void {
    const RESERVED = 0x00;
    const buf = new Uint8Array([this.cmdId.requestBleProtocolVersion, RESERVED]);
    this.writeValue(buf);
  }
}
