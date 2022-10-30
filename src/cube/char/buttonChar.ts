import { CubeChar } from './char';
export type CubeButtonPressedStatusListner = (isPressed?: boolean) => void;
export type CubeButtonCharListner = CubeButtonPressedStatusListner;

export class CubeButtonChar extends CubeChar {
  readonly uuid: string = '10b20107-5b3b-4571-9508-cf3efcd7bbae';

  private buttonPressed = false;

  private cbBoth: CubeButtonPressedStatusListner[] = [];
  private cbPressed: CubeButtonPressedStatusListner[] = [];
  private cbReleased: CubeButtonPressedStatusListner[] = [];

  /**
   * Prepare for using button characteristic function.
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
              this.setButtonStatus(target.value);
              this.callbackButtonStatus(this.buttonPressed);
            }
          });
          this.characteristic
            .startNotifications()
            .then(() => {
              return this.readButtonStatus();
            })
            .then(() => {
              this.callbackButtonStatus(this.buttonPressed);
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
   * Get current button pressed status.
   *
   * @returns boolean. true returns if pressed.
   */
  public isButtonPressed(): boolean {
    return this.buttonPressed;
  }

  /**
   * Read button status from Cube.
   *
   * @returns Promise. `resolve` handler says that button status was correctly got.
   */
  private readButtonStatus(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.readValue()
        .then((readValue) => {
          this.setButtonStatus(readValue);
          resolve('Success');
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Set button status into the member variable.
   *
   * @param data read data from Cube button charcteristics
   *
   */
  private setButtonStatus(data: DataView): void {
    const PRESSED_STATE_INDEX = 1;
    const PRESSED = 0x80;
    // const NOT_PRESSED = 0x00;

    const value = data.getUint8(PRESSED_STATE_INDEX);
    if (value === PRESSED) {
      this.buttonPressed = true;
    } else {
      this.buttonPressed = false;
    }
  }

  /**
   * Register callback.
   *
   * @param type Specify the type from 'press' on Pressed, 'release' on Released or 'both' on Pressed/Released.
   * @param listener: Callback function with param isPressed?: boolean and return: void.
   *
   */
  public addEventListener(type: string, listener: CubeButtonPressedStatusListner): void {
    const TYPE_PRESS = 'press';
    const TYPE_RELEASE = 'release';
    const TYPE_BOTH = 'both';
    if (type === TYPE_PRESS) {
      this.cbPressed.push(listener);
    } else if (type === TYPE_RELEASE) {
      this.cbReleased.push(listener);
    } else if (type === TYPE_BOTH) {
      this.cbBoth.push(listener);
    }
    this.callbackButtonStatus(this.buttonPressed);
  }

  /**
   * Issuing registered callback.
   *
   * @param isPressed Notify the current (changed) button status.
   *
   */
  private callbackButtonStatus(isPressed: boolean): void {
    for (const cb of this.cbBoth) {
      cb(isPressed);
    }

    for (const cb of this.cbPressed) {
      if (isPressed) {
        cb();
      }
    }

    for (const cb of this.cbReleased) {
      if (!isPressed) {
        cb();
      }
    }
  }
}
