class CubeMotorChar extends CubeChar {
  readonly uuid: string = '10b20102-5b3b-4571-9508-cf3efcd7bbae';

  /**
   * Command IDs.
   */
  private cmdId = {
    motorControl: 1,
    motorControlTimeSpecified: 2,
    motorControlAimSpecified: 3,
    motorControlMultiAimSpecified: 4,
    motorControlAccelerationSpecified: 5,
  } as const;

  /**
   * Motor IDs.
   */
  private motorId = {
    left: 1,
    right: 2,
  } as const;

  /**
   * Direction IDs.
   */
  private dirId = {
    front: 1,
    back: 2,
  } as const;

  /**
   * Movement type IDs.
   */
  static moveTypeId = {
    efficient: 0,
    withoutBack: 1,
    rotate1st: 2,
  } as const;

  /**
   * Ease type IDs.
   */
  static easeTypeId = {
    constant: 0,
    accel: 1,
    decel: 2,
    accelDecel: 3,
  } as const;

  /**
   * Angle type IDs.
   */
  static angleTypeId = {
    absEfficient: 0,
    absPositiveDir: 1,
    absNegativeDir: 2,
    relPositiveDir: 3,
    relNegativeDir: 4,
    noRotate: 5,
    sameAsCurrent: 6,
  } as const;

  /**
   * Prepare for using motor characteristic function.
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
                // console.log(target.value);
              }
            });
            this.characteristic
              .startNotifications()
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
   * Get motor direction: front or back.
   *
   * @param speedValue left/right motor speed.
   *
   * @returns dirId: front/back
   */
  private getMotorDirection(speedValue: number): number {
    if (speedValue >= 0) {
      return this.dirId.front;
    } else {
      return this.dirId.back;
    }
  }

  /**
   * Primitive motor control.
   *
   * @param left Left motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.
   * @param right Right motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.
   *
   */
  public motorControl(left: number, right: number): void {
    this.motorControlTimeSpecified(left, right);
  }

  /**
   * Time specified motor control.
   *
   * @param left Left motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.
   * @param right Right motor speed. Negative value means back direction. -115 to -8, 8 to 115, and 0 integer value.
   * @param duration Motor control duration in msec. 0-2550( 0: Eternally ).
   */
  public motorControlTimeSpecified(left: number, right: number, duration = 0): void {
    const buf = new Uint8Array([
      this.cmdId.motorControlTimeSpecified,
      this.motorId.left,
      this.getMotorDirection(left),
      CubeUtil.clipNumberUInt8(Math.abs(left)),
      this.motorId.right,
      this.getMotorDirection(right),
      CubeUtil.clipNumberUInt8(Math.abs(right)),
      CubeUtil.clipNumberUInt8(duration),
    ]);
    this.writeValue(buf);
  }

  private sequenceId = 0;

  /**
   * Aim specified motor control.
   *
   * @param aim object including following properties.
   * x, y: coordinate of aimed point. angle(Optional): Cube's angle at the goal point. angleType(Optional): angleTypeId value.
   * See the [spec](https://toio.github.io/toio-spec/docs/ble_motor#%E7%9B%AE%E6%A8%99%E5%9C%B0%E7%82%B9%E3%81%A7%E3%81%AE%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%81%AE%E8%A7%92%E5%BA%A6-%CE%B8)
   * @param maxSpeed 8 to 115, and 0 integer value.
   * @param moveType (Optional)moveTypeId value. default is moveTypeId.efficient
   * @param easeType (Optional)easeTypeId value. default is easeTypeId.constant
   * @param timeout (Optional)timeout in sec. default is 5 sec. 1-255 sec. 0 means exceptionally 10 sec.
   */
  public motorControlAimSpecified(
    aim: { x: number; y: number; angle?: number; angleType?: number },
    maxSpeed: number,
    moveType = CubeMotorChar.moveTypeId.efficient,
    easeType = CubeMotorChar.easeTypeId.constant,
    timeout = 5,
  ): void {
    const RESERVED_VALUE = 0;
    const SEND_BUF_SIZE = 13;

    const buf = new ArrayBuffer(SEND_BUF_SIZE);
    const view = new DataView(buf);
    let offset = 0;

    view.setUint8(offset, this.cmdId.motorControlAimSpecified);
    offset += 1;
    view.setUint8(offset, this.sequenceId);
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(timeout));
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(moveType));
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(maxSpeed));
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(easeType));
    offset += 1;
    view.setUint8(offset, RESERVED_VALUE);
    offset += 1;
    view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.x), true);
    offset += 2;
    view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.y), true);
    offset += 2;

    const angle = aim.angle === undefined ? 0 : aim.angle;
    const angleType =
      aim.angleType === undefined ? CubeMotorChar.angleTypeId.noRotate : aim.angleType;
    view.setUint16(offset, CubeUtil.clipNumberUInt16(angle + (angleType << 13)), true);

    this.writeValue(buf);
    this.inclementSequenceId();
  }

  /**
   * Inclement internal sequence ID.
   */
  private inclementSequenceId(): void {
    this.sequenceId += 1;
    if (this.sequenceId > 255) {
      this.sequenceId = 0;
    }
  }

  /**
   * Multiple aim specified motor control.
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
  public motorControlMultipleAimSpecified(
    aims: { x: number; y: number; angle?: number; angleType?: number }[],
    maxSpeed: number,
    moveType = CubeMotorChar.moveTypeId.efficient,
    easeType = CubeMotorChar.easeTypeId.constant,
    isAppend = false,
    timeout = 5,
  ): void {
    const RESERVED_VALUE = 0;
    const SETTING_OVERWRITE = 0;
    const SETTING_APPEND = 1;

    const BUF_SIZE_COMMON = 8;
    const BUF_SIZE_AIM = 6;
    const SEND_BUF_SIZE = BUF_SIZE_COMMON + BUF_SIZE_AIM * aims.length;

    const buf = new ArrayBuffer(SEND_BUF_SIZE);
    const view = new DataView(buf);
    let offset = 0;

    view.setUint8(offset, this.cmdId.motorControlMultiAimSpecified);
    offset += 1;
    view.setUint8(offset, this.sequenceId);
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(timeout));
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(moveType));
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(maxSpeed));
    offset += 1;
    view.setUint8(offset, CubeUtil.clipNumberUInt8(easeType));
    offset += 1;
    view.setUint8(offset, RESERVED_VALUE);
    offset += 1;
    view.setUint8(offset, isAppend ? SETTING_APPEND : SETTING_OVERWRITE);
    offset += 1;

    for (const aim of aims) {
      view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.x), true);
      offset += 2;
      view.setUint16(offset, CubeUtil.clipNumberUInt16(aim.y), true);
      offset += 2;

      const angle = aim.angle === undefined ? 0 : aim.angle;
      const angleType =
        aim.angleType === undefined ? CubeMotorChar.angleTypeId.noRotate : aim.angleType;
      view.setUint16(offset, CubeUtil.clipNumberUInt16(angle + (angleType << 13)), true);
      offset += 2;
    }

    // console.log(new Uint8Array(buf));
    this.writeValue(new Uint8Array(buf));
    this.inclementSequenceId();
  }

  /**
   * Acceleration specified motor control.
   * NOT IMPLEMENTED YET.
   */
  public motorControlAccelerationSpecified(): void {
    const buf = new Uint8Array([0x05, 0x32, 0x05, 0x0f, 0x00, 0x00, 0x00, 0x00, 0x64]);
    this.writeValue(buf);
  }
}
