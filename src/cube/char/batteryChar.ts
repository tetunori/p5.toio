type CubeBatteryLevelListner = (batteryLevel: number) => void;
type CubeBatteryCharListner = CubeBatteryLevelListner;

class CubeBatteryChar extends CubeChar {
  readonly uuid: string = '10b20108-5b3b-4571-9508-cf3efcd7bbae';

  private batteryLevel = 0;

  private cbBatteryLevelChanged: (CubeBatteryLevelListner | undefined)[] = [];

  /**
   * Prepare for using battery characteristic function.
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
                this.setBatteryLevel(target.value);
              }
            });
            this.characteristic
              .startNotifications()
              .then(() => {
                return this.readBatteryLevel();
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
   * Get current battery level.
   *
   * @returns Battery level in 10%.
   */
  public getBatteryLevel(): number {
    return this.batteryLevel;
  }

  /**
   * Read battery level from Cube.
   *
   * @returns Promise. `resolve` handler says that battery level was correctly got.
   */
  private readBatteryLevel(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.readValue()
        .then((readValue) => {
          this.setBatteryLevel(readValue);
          resolve('Success');
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Set battery status into the member variable.
   *
   * @param data read data from Cube battery charcteristics
   *
   */
  private setBatteryLevel(data: DataView): void {
    const previousBatteryLevel = this.batteryLevel;
    const BATTERY_LEVEL_INDEX = 0;
    this.batteryLevel = data.getUint8(BATTERY_LEVEL_INDEX);

    if (previousBatteryLevel !== this.batteryLevel) {
      this.callbackBatteryLevel(this.batteryLevel);
    }
  }

  /**
   * Register callback.
   *
   * @param type Fix to 'change'.
   * @param listener: Callback function with param batteryLevel: number and return: void.
   *
   */
  public addEventListener(type: string, listener: CubeBatteryLevelListner): void {
    const TYPE_CHANGE = 'change';
    if (type === TYPE_CHANGE) {
      this.cbBatteryLevelChanged.push(listener);
    }
    this.callbackBatteryLevel(this.batteryLevel);
  }

  /**
   * Issuing registered callback.
   *
   * @param batteryLevel Notify the current (changed) battery level.
   *
   */
  private callbackBatteryLevel(batteryLevel: number): void {
    for (const cb of this.cbBatteryLevelChanged) {
      cb?.(batteryLevel);
    }
  }
}
