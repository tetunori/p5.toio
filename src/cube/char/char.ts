interface CubeCharIF {
  prepare(): Promise<string | Error>;
  writeValue(buf: ArrayBuffer): Promise<string | Error>;
  readValue(): Promise<DataView>;
  setFrameRate(fps: number): void;
}

export class CubeChar implements CubeCharIF {
  protected uuid = ''; // To be override
  protected characteristic!: BluetoothRemoteGATTCharacteristic;

  protected errStrInProgress = 'GATT operation already in progress.';

  private service: BluetoothRemoteGATTService;
  private timerID = 0;
  private readonly retryInterval = 30; // 30 msec
  private executeTime = 0;
  private fps = 15;
  private readonly maxRetryCount = 20;

  constructor(service: BluetoothRemoteGATTService) {
    this.service = service;
  }

  /**
   * Prepare for using characteristic function.
   *
   * @returns Promise. `resolve` handler says that methods are available in this class.
   */
  public prepare(): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      if (this.service) {
        this.service
          .getCharacteristic(this.uuid)
          .then((characteristic: BluetoothRemoteGATTCharacteristic) => {
            this.characteristic = characteristic;
            resolve('characteristic resolve');
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error('service does not exist.'));
      }
    });
  }

  /**
   * Write value to remote GATT Characteristics.
   *
   * @param buf data buffer including command for Cube.
   *
   * @returns Promise. `resolve` handler says that write command executed correctly.
   */
  public writeValue(buf: ArrayBuffer): Promise<string | Error> {
    const currentTime = new Date().getTime();

    // Avoid issuing ble command too fast
    if (currentTime - this.executeTime > 1000 / this.fps) {
      this.executeTime = currentTime;
      const RETRY_COUNT_FOR_1ST_TIME = 0;
      return this.writeValueCore(buf, RETRY_COUNT_FOR_1ST_TIME);
    } else {
      return Promise.resolve(
        'writeValue ignored due to issuing too fast!! Please adjust framerate',
      );
    }
  }

  /**
   * Write value to remote GATT Characteristics. Core function.
   *
   * @param buf data buffer including command for Cube.
   * @param countRetry Counter for retry.
   *
   * @returns Promise. `resolve` handler says that write command executed correctly.
   */
  public writeValueCore(buf: ArrayBuffer, countRetry: number): Promise<string | Error> {
    return new Promise((resolve, reject) => {
      // Check retry count
      if (countRetry > this.maxRetryCount) {
        resolve('writeValue ignored because it reaches max retry count');
      }

      this.characteristic
        ?.writeValue(buf)
        .then(() => {
          resolve('writeValue resolved');
        })
        .catch((error) => {
          if (error.message.indexOf(this.errStrInProgress) !== -1) {
            // Retry
            clearTimeout(this.timerID);
            this.timerID = window.setTimeout(
              this.writeValueCore.bind(this, buf, countRetry + 1),
              this.retryInterval,
            );
          } else {
            reject(error);
          }
        });
    });
  }

  /**
   * Read value from remote GATT Characteristics.
   *
   * @returns Promise. `resolve` handler include data.
   */
  public readValue(): Promise<DataView> {
    return new Promise((resolve, reject) => {
      this.characteristic
        ?.readValue()
        .then((dataView) => {
          resolve(dataView);
        })
        .catch((error) => {
          if (error.message.indexOf(this.errStrInProgress) !== -1) {
            // Retry
            clearTimeout(this.timerID);
            this.timerID = window.setTimeout(this.readValue.bind(this), this.retryInterval);
          } else {
            reject(error);
          }
        });
    });
  }

  /**
   * Set framerate.
   *
   * @param fps. Default value is 15.
   */
  public setFrameRate(fps: number): void {
    this.fps = fps;
  }
}
