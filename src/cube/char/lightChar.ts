import { CubeChar } from './char';
import { CubeUtil } from '../../common/util';
export class CubeLightChar extends CubeChar {
  readonly uuid: string = '10b20103-5b3b-4571-9508-cf3efcd7bbae';

  /**
   * Command IDs.
   */
  private cmdId = {
    turnOff: 1,
    turnOn: 3,
  } as const;

  /**
   * Turn the light off.
   */
  public turnLightOff(): void {
    const buf = new Uint8Array([this.cmdId.turnOff]);
    this.writeValue(buf);
  }

  /**
   * Turn the light on with specified RGB and duration(optional) values.
   *
   * @param r Red value. 0-255.
   * @param g Green value. 0-255.
   * @param b Blue value. 0-255.
   * @param duration Light up duration in msec. 0-2550 ( 0: Eternally ).
   */
  public turnLightOnRGB(r: number, g: number, b: number, duration = 0x00): void {
    this.turnLightOnRGBA(r, g, b, 255, duration);
  }

  /**
   * Turn the light on with specified RGB, Alpha and duration(optional) values.
   *
   * @param r Red value. 0-255.
   * @param g Green value. 0-255.
   * @param b Blue value. 0-255.
   * @param a Alpha( = Brightness ) value. 0-255.
   * @param duration Light up duration in msec. 0-2550( 0: Eternally ).
   */
  public turnLightOnRGBA(r: number, g: number, b: number, a: number, duration = 0x00): void {
    const NUM_OF_LIGHT = 0x01;
    const LIGHT_ID = 0x01;

    const buf = new Uint8Array([
      this.cmdId.turnOn,
      CubeUtil.clipNumberUInt8(Math.floor(duration / 10)),
      NUM_OF_LIGHT,
      LIGHT_ID,
      CubeUtil.clipNumberUInt8(Math.floor((r * a) / 255)),
      CubeUtil.clipNumberUInt8(Math.floor((g * a) / 255)),
      CubeUtil.clipNumberUInt8(Math.floor((b * a) / 255)),
    ]);

    this.writeValue(buf);
  }
}
