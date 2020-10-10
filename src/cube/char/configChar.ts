import { CubeChar } from './char';
export class CubeConfigChar extends CubeChar {
  readonly uuid: string = '10b201ff-5b3b-4571-9508-cf3efcd7bbae';

  /**
   * Command IDs.
   */
  private cmdId = {
    configMagnet: 0x1b,
  } as const;

  /**
   * Magnet configuration IDs.
   */
  private magConfigId = {
    disable: 0x00,
    enable: 0x01,
  } as const;

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
}
