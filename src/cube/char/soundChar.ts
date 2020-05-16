class CubeSoundChar extends CubeChar {
  readonly uuid: string = '10b20104-5b3b-4571-9508-cf3efcd7bbae';

  /**
   * Command IDs.
   */
  private cmdId = {
    soundEffect: 2,
    playNote: 3,
  } as const;

  /**
   * Sound Effect IDs.
   */
  static seId = {
    enter: 0,
    selected: 1,
    cancel: 2,
    cursor: 3,
    matIn: 4,
    matOut: 5,
    get1: 6,
    get2: 7,
    get3: 8,
    effect1: 9,
    effect2: 10,
  } as const;

  /**
   * Play pre-installed sound effect.
   *
   * @param idSE Sounde effect index value. Please make use of static `seId.xxx` properties in this class.
   */
  public playSE(idSE: number): void {
    const VOLUME_MAX = 0xff; // Fixed value
    const buf = new Uint8Array([
      this.cmdId.soundEffect,
      CubeUtil.clipNumberUInt8(idSE),
      VOLUME_MAX,
    ]);
    this.writeValue(buf);
  }

  /**
   * Play single MIDI note.
   *
   * @param note MIDI note number 0-128. 128 is a special value for no-sound.
   *        Refer [toio™Core Cube Spec: Note number and note name](https://toio.github.io/toio-spec/docs/ble_sound).
   * @param duration Sound duration in msec. 0-2550( 0: Eternally ).
   */
  public playSingleNote(note: number, duration = 0x1e): void {
    const REPEAT_COUNT = 0x01; // Once
    const OPERATION_COUNT = 0x01;
    const VOLUME_MAX = 0xff; // Fixed value

    let adjustedNote = note;
    if (adjustedNote > 128) {
      adjustedNote = 128;
    }

    const buf = new Uint8Array([
      this.cmdId.playNote,
      REPEAT_COUNT,
      OPERATION_COUNT,
      CubeUtil.clipNumberUInt8(duration),
      CubeUtil.clipNumberUInt8(adjustedNote),
      VOLUME_MAX,
    ]);

    this.writeValue(buf);
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
    const buf = [];

    const REPEAT_COUNT = 0x01; // Once
    const OPERATION_COUNT = melody.length;
    buf.push(this.cmdId.playNote, REPEAT_COUNT, OPERATION_COUNT);

    const VOLUME_MAX = 0xff; // Fixed value
    for (const element of melody) {
      if (element.note > 128) {
        element.note = 128;
      }
      buf.push(
        CubeUtil.clipNumberUInt8(element.duration),
        CubeUtil.clipNumberUInt8(element.note),
        VOLUME_MAX,
      );
    }

    this.writeValue(new Uint8Array(buf));
  }
}
