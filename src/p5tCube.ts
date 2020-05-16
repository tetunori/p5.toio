class P5tCube extends Cube {
  /**
   * Connect to the toio™Core Cube.
   *
   * @returns Promise. `resolve` includes a P5tCube instance.
   */
  public connectP5tCube(): Promise<P5tCube> {
    return new Promise((resolve, reject) => {
      super
        .connect()
        .then(() => {
          // Now the Cube is ready
          resolve(this);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  /**
   * For prepared callback function `cubePositionIdChanged`.
   */
  protected onPositionIdChanged(info: positionIdInfo): void {
    if (info?.angle) {
      info.angle = this.convertAngleFromRadians(info.angle);
    }
    super.onPositionIdChanged(info);
  }

  /**
   * For prepared callback function `cubeStandardIdChanged`.
   */
  protected onStandardIdChanged(info: standardIdInfo): void {
    if (info?.angle) {
      info.angle = this.convertAngleFromRadians(info.angle);
    }
    super.onStandardIdChanged(info);
  }

  /**
   * Turn the light on with specified `p5.Color` and duration(optional) values.
   *
   * @param color p5.Color value. RGBA values are reflected.
   * @param duration Light up duration in msec. 0-2550 ( 0: Eternally ).
   */
  public turnLightOn(color: p5.Color, duration = 0x00): void {
    // Convert p5.Color to RGBA
    this.cube?.lightChar?.turnLightOnRGBA(
      red(color),
      green(color),
      blue(color),
      alpha(color),
      duration,
    );
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
      aim.angle = this.convertAngleToRadians(aim.angle);
    }
    super.moveTo(aim, maxSpeed, moveType, easeType, timeout);
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
        aim.angle = this.convertAngleToRadians(aim.angle);
      }
    }
    super.moveToMulti(aims, maxSpeed, moveType, easeType, isAppend, timeout);
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
    rotateType: string = P5tCube.rotateTypeId.efficient,
    timeout = 5,
  ): void {
    const convertedAngle = this.convertAngleToRadians(angle);
    super.turnTo(convertedAngle, speed, rotateType, timeout);
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
    rotateType: string = P5tCube.rotateTypeId.efficient,
    timeout = 5,
  ): void {
    let convertedAngle = this.relativeAngleToXY(x, y);

    // Avoid chattering
    let speedOverride = speed;
    if (this.angle !== undefined) {
      if (Math.abs(convertedAngle - this.angle) < Math.PI / 6) {
        speedOverride = 10;
      }
    }

    if (!this.isAngleModeRadians()) {
      convertedAngle = Math.floor(degrees(convertedAngle));
      convertedAngle = this.normalizeAngleDegrees(convertedAngle);
    }
    this.turnTo(convertedAngle, speedOverride, rotateType, timeout);
  }

  /**
   * Convert angle according to the angleMode setting to an angle in radians.
   *
   * @param angle Conversion target angle.
   *
   * @return Converted angle in Radians.
   */
  private convertAngleToRadians(angle: number): number {
    let convertedAngle: number;

    if (!this.isAngleModeRadians()) {
      convertedAngle = radians(angle);
    } else {
      // No convert in RADIANS case.
      convertedAngle = angle;
    }

    return this.normalizeAngleRadian(convertedAngle);
  }

  /**
   * Convert from angle in radians to the appropriate angle according to the angleMode setting.
   *
   * @param angle Conversion target angle in radians.
   *
   * @return Converted angle according to the angleMode setting.
   */
  private convertAngleFromRadians(angle: number): number {
    let convertedAngle: number;

    if (!this.isAngleModeRadians()) {
      convertedAngle = degrees(angle);
    } else {
      // No convert in RADIANS case.
      convertedAngle = angle;
    }

    return this.normalizeAngleDegrees(convertedAngle);
  }

  /**
   * Current P5.js angleMode is RADIANS or not(i.e.DEGREES).
   */
  private isAngleModeRadians(): boolean {
    return sin(Math.PI / 2) === 1;
  }

  /**
   * Connect to new toio™Core Cube.
   *
   * @returns Promise. `resolve` handler includes a instance of connected `P5tCube`.
   */
  public static connectNewP5tCube = (): Promise<P5tCube> => {
    return new Promise((resolve, reject) => {
      CubeConnector.connectNewCube()
        .then((cube: CubeBase) => {
          resolve(new P5tCube(cube));
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  };
}
