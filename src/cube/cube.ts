import { CubeConnector } from './connector';
import { CubeBatteryLevelListner } from './char/batteryChar';
import { CubeIdCharListner, positionIdInfo, standardIdInfo } from './char/idChar';
import { CubeButtonPressedStatusListner } from './char/buttonChar';
import {
  CubeFlatListner,
  CubeCollisionListner,
  CubeDoubleTapListner,
  CubePostureListner,
  CubeSensorChar,
} from './char/sensorChar';
import { CubeMotorChar } from './char/motorChar';
import { CubeSoundChar } from './char/soundChar';
import { CubeBase, CubeListner } from './cubeBase';
export class Cube {
  static seId = CubeSoundChar.seId;
  static postureId = CubeSensorChar.postureId;
  static moveTypeId = CubeMotorChar.moveTypeId;
  static easeTypeId = CubeMotorChar.easeTypeId;
  static angleTypeId = CubeMotorChar.angleTypeId;

  static readonly rotateTypeId = {
    efficient: 'efficient',
    clockwise: 'clockwise',
    counterClockwise: 'counterClockwise',
  } as const;

  public x: number | undefined = undefined;
  public y: number | undefined = undefined;
  public sensorX: number | undefined = undefined;
  public sensorY: number | undefined = undefined;
  public angle: number | undefined = undefined;
  public standardId: string | undefined = undefined;
  public flat: boolean | undefined = undefined;
  public posture: string | undefined = undefined;
  public buttonPressed: boolean | undefined = undefined;
  public batteryLevel: number | undefined = undefined;

  protected cube: CubeBase | undefined = undefined;

  constructor(cube: CubeBase) {
    this.cube = cube;
    this.registCallback();
  }

  /**
   * Connect to the toio™Core Cube.
   *
   * @returns Promise. `resolve` includes a Cube instance.
   */
  public connect(): Promise<Cube> {
    return new Promise((resolve, reject) => {
      const { cube } = this;
      if (cube) {
        cube
          .connect()
          .then(() => {
            // Now the Cube is ready
            resolve(this);
          })
          .catch((error: Error) => {
            reject(error);
          });
      } else {
        reject(new Error('cube does not exist.'));
      }
    });
  }

  /**
   * Disconnet from the toio™Core Cube.
   */
  public disconnect(): void {
    const { cube } = this;
    cube?.disconnect();
  }

  /**
   * Register callback from upper layer.
   *
   * @param type Support following types.
   *  - 'buttonpress'
   *  - 'buttonrelease'
   *  - 'batterylevelchange'
   *  - 'sensorflat'
   *  - 'sensorcollision'
   *  - 'sensordoubletap'
   *  - 'sensorposturechange'
   *  - 'positionid'
   *  - 'standardid'
   * @param listener: Callback function.
   *
   */
  public addEventListener(type: string, listener: CubeListner): void {
    const TYPE_BT_PRESS = 'buttonpress';
    const TYPE_BT_RELEASE = 'buttonrelease';
    const TYPE_BATT_LEVEL = 'batterylevelchange';
    const TYPE_SENSOR_FLAT = 'sensorflat';
    const TYPE_SENSOR_COLLISION = 'sensorcollision';
    const TYPE_SENSOR_DTAP = 'sensordoubletap';
    const TYPE_SENSOR_POSTURE = 'sensorposturechange';
    const TYPE_ID_POSITION = 'positionid';
    const TYPE_ID_STANDARD = 'standardid';

    switch (type) {
      case TYPE_BT_PRESS:
        this.cube?.buttonChar?.addEventListener(
          'press',
          listener as CubeButtonPressedStatusListner,
        );
        break;
      case TYPE_BT_RELEASE:
        this.cube?.buttonChar?.addEventListener(
          'release',
          listener as CubeButtonPressedStatusListner,
        );
        break;
      case TYPE_BATT_LEVEL:
        this.cube?.batteryChar?.addEventListener('change', listener as CubeBatteryLevelListner);
        break;
      case TYPE_SENSOR_FLAT:
        this.cube?.sensorChar?.addEventListener('flat', listener as CubeFlatListner);
        break;
      case TYPE_SENSOR_COLLISION:
        this.cube?.sensorChar?.addEventListener('collision', listener as CubeCollisionListner);
        break;
      case TYPE_SENSOR_DTAP:
        this.cube?.sensorChar?.addEventListener('doubletap', listener as CubeDoubleTapListner);
        break;
      case TYPE_SENSOR_POSTURE:
        this.cube?.sensorChar?.addEventListener('posture', listener as CubePostureListner);
        break;
      case TYPE_ID_POSITION:
        this.cube?.idChar?.addEventListener('positionid', listener as CubeIdCharListner);
        break;
      case TYPE_ID_STANDARD:
        this.cube?.idChar?.addEventListener('standardid', listener as CubeIdCharListner);
        break;
    }
  }

  /**
   * Register callback internally.
   */
  private registCallback(): void {
    this.cube?.buttonChar?.addEventListener('press', this.onButtonPressed.bind(this));
    this.cube?.buttonChar?.addEventListener('release', this.onButtonReleased.bind(this));
    this.cube?.batteryChar?.addEventListener('change', this.onBatteryLevelChanged.bind(this));
    this.cube?.sensorChar?.addEventListener('flat', this.onFlatChanged.bind(this));
    this.cube?.sensorChar?.addEventListener('collision', this.onCollisionOccurred.bind(this));
    this.cube?.sensorChar?.addEventListener('doubletap', this.onDoubleTapped.bind(this));
    this.cube?.sensorChar?.addEventListener('posture', this.onPostureChanged.bind(this));
    this.cube?.idChar?.addEventListener('positionid', this.onPositionIdChanged.bind(this));
    this.cube?.idChar?.addEventListener('standardid', this.onStandardIdChanged.bind(this));
  }

  /**
   * For prepared callback function `cubeButtonPressed`.
   */
  private onButtonPressed(): void {
    this.buttonPressed = true;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeButtonPressed === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeButtonPressed();
    }
  }

  /**
   * For prepared callback function `cubeButtonReleased`.
   */
  private onButtonReleased(): void {
    this.buttonPressed = false;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeButtonReleased === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeButtonReleased();
    }
  }

  /**
   * For prepared callback function `cubeBatteryLevelChanged`.
   */
  private onBatteryLevelChanged(batteryLevel: number): void {
    this.batteryLevel = batteryLevel;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeBatteryLevelChanged === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeBatteryLevelChanged(batteryLevel);
    }
  }

  /**
   * For prepared callback function `cubeFlatChanged`.
   */
  private onFlatChanged(flat: boolean): void {
    this.flat = flat;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeFlatChanged === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeFlatChanged(flat);
    }
  }

  /**
   * For prepared callback function `cubeCollisionOccurred`.
   */
  private onCollisionOccurred(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeCollisionOccurred === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeCollisionOccurred();
    }
  }

  /**
   * For prepared callback function `cubeDoubleTapped`.
   */
  private onDoubleTapped(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeDoubleTapped === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeDoubleTapped();
    }
  }

  /**
   * For prepared callback function `cubePostureChanged`.
   */
  private onPostureChanged(posture: string): void {
    this.posture = posture;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubePostureChanged === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubePostureChanged(posture);
    }
  }

  /**
   * For prepared callback function `cubePositionIdChanged`.
   */
  protected onPositionIdChanged(info: positionIdInfo): void {
    this.x = info?.centerX;
    this.y = info?.centerY;
    this.sensorX = info?.sensorX;
    this.sensorY = info?.sensorY;
    this.angle = info?.angle;
    if (this.angle !== undefined) {
      this.angle = this.radians(this.angle);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubePositionIdChanged === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubePositionIdChanged(info);
    }
  }

  /**
   * For prepared callback function `cubeStandardIdChanged`.
   */
  protected onStandardIdChanged(info: standardIdInfo): void {
    this.standardId = info?.id;
    this.angle = info?.angle;
    if (this.angle !== undefined) {
      this.angle = this.radians(this.angle);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (typeof cubeStandardIdChanged === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      cubeStandardIdChanged(info);
    }
  }

  /**
   * Set framerate.
   *
   * @param fps. Default value is 15.
   */
  public setFrameRate(fps: number): void {
    this.cube?.setFrameRate(fps);
  }

  /**
   * Turn the light off.
   */
  public turnLightOff(): void {
    this.cube?.lightChar?.turnLightOff();
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
    this.cube?.lightChar?.turnLightOnRGB(r, g, b, duration);
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
    this.cube?.lightChar?.turnLightOnRGBA(r, g, b, a, duration);
  }

  /**
   * Play pre-installed sound effect.
   *
   * @param idSE Sounde effect index value. Please make use of static `seId.xxx` properties in this class.
   */
  public playSE(idSE: number): void {
    this.cube?.soundChar?.playSE(idSE);
  }

  /**
   * Play single MIDI note.
   *
   * @param note MIDI note number 0-128. 128 is a special value for no-sound.
   *        Refer [toio™Core Cube Spec: Note number and note name](https://toio.github.io/toio-spec/docs/ble_sound).
   * @param duration Sound duration in msec. 0-2550( 0: Eternally ).
   */
  public playSingleNote(note: number, duration = 0x1e): void {
    this.cube?.soundChar?.playSingleNote(note, duration);
  }

  /**
   * Play melody specified wiht MIDI note sequence.
   *
   * @param melody An array composed of some combinations of `note` and `duration` values. Use like below.
   * ```
   * playMelody( [
   *   { note: 0x50, duration: 0x1E },
   *   { note: 0x52, duration: 0x1E },
   *   { note: 0x54, duration: 0x1E }
   * ] );
   * ```
   * Refer to the instruction of `playSingleNote()` for note/duration.
   */
  public playMelody(melody: { note: number; duration: number }[]): void {
    this.cube?.soundChar?.playMelody(melody);
  }

  /**
   * Stop moving.
   *
   */
  public stop(): void {
    return this.cube?.motorChar?.motorControl(0, 0);
  }

  /**
   * Move with specified speed/time.
   *
   * @param left Left motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.
   * @param right Right motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.
   * @param duration Motor control duration in msec. 0-2550( 0: Eternally ).
   */
  public move(left: number, right: number, duration = 0): void {
    return this.cube?.motorChar?.motorControlTimeSpecified(left, right, duration);
  }

  /**
   * Move to specified coordinate/angle.
   *
   * @param aim object including following properties.
   * x, y: coordinate of aimed point. angle(Optional): Cube's angle at the goal point. angleType(Optional): angleTypeId value.
   * See the [spec](https://toio.github.io/toio-spec/docs/ble_motor#%E7%9B%AE%E6%A8%99%E5%9C%B0%E7%82%B9%E3%81%A7%E3%81%AE%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%81%AE%E8%A7%92%E5%BA%A6-%CE%B8)
   * @param maxSpeed 8 to 115, and 0 integer value.
   * @param moveType (Optional)moveTypeId value. default is moveTypeId.efficient
   * @param easeType (Optional)easeTypeId value. default is easeTypeId.constant
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public moveTo(
    aim: { x: number; y: number; angle?: number; angleType?: number },
    maxSpeed: number,
    moveType = CubeMotorChar.moveTypeId.efficient,
    easeType = CubeMotorChar.easeTypeId.constant,
    timeout = 5,
  ): void {
    if (aim?.angle) {
      aim.angle = this.degrees(aim.angle);
    }
    return this.cube?.motorChar?.motorControlAimSpecified(
      aim,
      maxSpeed,
      moveType,
      easeType,
      timeout,
    );
  }

  /**
   * Move to specified several coordinate/angle.
   *
   * @param aims object array each aim includes following properties.
   * x, y: coordinate of aimed point. angle(Optional): Cube's angle at the goal point. angleType(Optional): angleTypeId value.
   * See the [spec](https://toio.github.io/toio-spec/docs/ble_motor#%E7%9B%AE%E6%A8%99%E5%9C%B0%E7%82%B9%E3%81%A7%E3%81%AE%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%81%AE%E8%A7%92%E5%BA%A6-%CE%B8)
   * @param maxSpeed 8 to 115, and 0 integer value.
   * @param moveType (Optional)moveTypeId value. default is moveTypeId.efficient
   * @param easeType (Optional)easeTypeId value. default is easeTypeId.constant
   * @param isAppend (Optional)true: append to existing mutiple aim command. false: overwrite existing command.
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public moveToMulti(
    aims: { x: number; y: number; angle?: number; angleType?: number }[],
    maxSpeed: number,
    moveType = CubeMotorChar.moveTypeId.efficient,
    easeType = CubeMotorChar.easeTypeId.constant,
    isAppend = false,
    timeout = 5,
  ): void {
    for (const aim of aims) {
      if (aim?.angle) {
        aim.angle = this.degrees(aim.angle);
      }
    }
    return this.cube?.motorChar?.motorControlMultipleAimSpecified(
      aims,
      maxSpeed,
      moveType,
      easeType,
      isAppend,
      timeout,
    );
  }

  /**
   * Move to specified cube's position.
   *
   * @param cube aim cube instance.
   * @param maxSpeed 8 to 115, and 0 integer value.
   * @param moveType (Optional)moveTypeId value. default is moveTypeId.efficient
   * @param easeType (Optional)easeTypeId value. default is easeTypeId.constant
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public moveToCube(
    cube: Cube,
    maxSpeed: number,
    moveType = CubeMotorChar.moveTypeId.efficient,
    easeType = CubeMotorChar.easeTypeId.constant,
    timeout = 5,
  ): void {
    const STOP_DISTANCE_THRESHOLD = 30;
    if (cube?.x && cube?.y) {
      if (this.distanceToCube(cube) > STOP_DISTANCE_THRESHOLD) {
        this.moveTo({ x: cube.x, y: cube.y }, maxSpeed, moveType, easeType, timeout);
      } else {
        // Stop near the Cube
        this.stop();
      }
    }
  }

  /**
   * Rotate with specified speed/time.
   *
   * @param speed Motor speed. Plus value means clockwise direction and the other is counter-clockwise. -115 to -8, 8 to 115, and 0 integer value.
   * @param duration Motor control duration in msec. 0-2550( 0: Eternally ).
   */
  public rotate(speed: number, duration = 0): void {
    let left = speed;
    let right = -speed;

    if (speed < 0) {
      left = -speed;
      right = speed;
    }
    return this.cube?.motorChar?.motorControlTimeSpecified(left, right, duration);
  }

  /**
   * Turn to specified angle.
   *
   * @param angle Aim angle. Unit depends on the setting angleMode(Default: RADIANS)
   * @param speed 8 to 115, and 0 integer value.
   * @param rotateType (Optional)rotation direction value. default is rotateType.efficient
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public turnTo(
    angle: number,
    speed: number,
    rotateType: string = Cube.rotateTypeId.efficient,
    timeout = 5,
  ): void {
    let angleType: number;
    switch (rotateType) {
      case Cube.rotateTypeId.clockwise:
        angleType = Cube.angleTypeId.absPositiveDir;
        break;
      case Cube.rotateTypeId.counterClockwise:
        angleType = Cube.angleTypeId.absNegativeDir;
        break;
      default:
      case Cube.rotateTypeId.efficient:
        angleType = Cube.angleTypeId.absEfficient;
        break;
    }

    if (this.x && this.y) {
      // Now, issue motor command
      const aim = {
        x: this.x,
        y: this.y,
        angle: this.degrees(angle),
        angleType: angleType,
      };
      return this.cube?.motorChar?.motorControlAimSpecified(
        aim,
        speed,
        undefined,
        undefined,
        timeout,
      );
    }
  }

  /**
   * Turn to the specified coordinate.
   *
   * @param x X value of the target coordinate.
   * @param y Y value of the target coordinate.
   * @param speed 8 to 115, and 0 integer value.
   * @param rotateType (Optional)rotation direction value. default is rotateType.efficient
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public turnToXY(
    x: number,
    y: number,
    speed: number,
    rotateType: string = Cube.rotateTypeId.efficient,
    timeout = 5,
  ): void {
    const convertedAngle = this.relativeAngleToXY(x, y);

    // Avoid chattering
    let speedOverride = speed;
    if (this.angle !== undefined) {
      if (Math.abs(convertedAngle - this.angle) < Math.PI / 6) {
        speedOverride = 10;
      }
    }

    this.turnTo(convertedAngle, speedOverride, rotateType, timeout);
  }

  /**
   * Turn to specified cube's position.
   *
   * @param cube aim cube instance.
   * @param speed 8 to 115, and 0 integer value.
   * @param rotateType (Optional)rotation direction value. default is rotateType.efficient
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public turnToCube(
    cube: Cube,
    speed: number,
    rotateType: string = Cube.rotateTypeId.efficient,
    timeout = 5,
  ): void {
    if (cube?.x && cube?.y) {
      this.turnToXY(cube.x, cube.y, speed, rotateType, timeout);
    }
  }

  /**
   * Calculate distance from this Cube to the specified coordinate.
   *
   * @param x X value of the target coordinate.
   * @param y Y value of the target coordinate.
   *
   * @return Distance from this Cube to the specified coordinate.
   */
  public distanceToXY(x: number, y: number): number {
    if (this.x && this.y) {
      const diffX = this.x - x;
      const diffY = this.y - y;
      return Math.sqrt(diffX * diffX + diffY * diffY);
    } else {
      // Illegal case.
      return 0;
    }
  }

  /**
   * Calculate distance from this Cube to the specified Cube.
   *
   * @param cube aim cube instance.
   *
   * @return Distance from this Cube to the specified Cube.
   */
  public distanceToCube(cube: Cube): number {
    if (cube?.x && cube?.y) {
      return this.distanceToXY(cube.x, cube.y);
    } else {
      // Illegal case.
      return 0;
    }
  }

  /**
   * Calculate relative angle from this Cube to the specified coordinate.
   *
   * @param x X value of the target coordinate.
   * @param y Y value of the target coordinate.
   *
   * @return Relative angle from this Cube to the specified coordinate.
   */
  public relativeAngleToXY(x: number, y: number): number {
    if (this.x && this.y) {
      const diffX = x - this.x;
      const diffY = y - this.y;
      return this.normalizeAngleRadian(Math.atan2(diffY, diffX));
    } else {
      return 0;
    }
  }

  /**
   * Convert angle in radians to degrees.
   *
   * @param angle Conversion target angle.
   *
   * @return Converted angle in Degrees.
   */
  private degrees(angle: number): number {
    const convertedAngle = (angle * 180) / Math.PI;
    return this.normalizeAngleDegrees(Math.floor(convertedAngle));
  }

  /**
   * Convert angle in degrees to radians.
   *
   * @param angle Conversion target angle.
   *
   * @return Converted angle in degrees.
   */
  private radians(angle: number): number {
    const convertedAngle = (angle * Math.PI) / 180;
    return this.normalizeAngleRadian(convertedAngle);
  }

  /**
   * Normalize the specified angle in Degrees within [0-360]
   *
   * @param angle Normalization target angle.
   *
   * @return Normalized angle in Degrees.
   */
  protected normalizeAngleDegrees(angle: number): number {
    let normalizedAngle = 0;

    normalizedAngle = angle % 360;
    if (angle < 0) {
      normalizedAngle += 360;
    }

    return normalizedAngle;
  }

  /**
   * Normalize the specified angle in Radian within [(-Math.PI)-Math.PI]
   *
   * @param angle Normalization target angle.
   *
   * @return Normalized angle in Radian.
   */
  protected normalizeAngleRadian(angle: number): number {
    let normalizedAngle = angle;

    while (normalizedAngle > Math.PI || normalizedAngle < -Math.PI) {
      if (normalizedAngle < -Math.PI) {
        normalizedAngle += 2 * Math.PI;
      } else if (normalizedAngle > Math.PI) {
        normalizedAngle -= 2 * Math.PI;
      }
    }

    return normalizedAngle;
  }

  /**
   * Connect to new toio™Core Cube.
   *
   * @returns Promise. `resolve` handler includes a instance of connected `Cube`.
   */
  public static connectNewCube = (): Promise<Cube> => {
    return new Promise((resolve, reject) => {
      CubeConnector.connectNewCube()
        .then((cube: CubeBase) => {
          resolve(new Cube(cube));
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  };
}
