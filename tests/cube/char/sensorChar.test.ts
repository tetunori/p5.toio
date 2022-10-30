import { TestClient } from '../testClient';
import { CubeSensorChar } from '#/cube/char/sensorChar';
import {
  DeviceMock,
  PrimaryServiceMock,
  CharacteristicMock,
  WebBluetoothMock,
} from 'web-bluetooth-mock';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
declare const global;

let cubeDeviceMock: DeviceMock;
let serviceMock: PrimaryServiceMock;
let sensorCharMock: CharacteristicMock;

let service: BluetoothRemoteGATTService;

const CORE_CUBE_NAME = 'toio Core Cube';
const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
const CORE_CUBE_BUTTON_CHAR_UUID = '10b20106-5b3b-4571-9508-cf3efcd7bbae';

const INFO_TYPE_DETECTION = 0x01;

const IS_NOT_FLAT = 0x00;
const IS_FLAT = 0x01;

const NO_COLLISION = 0x00;
const COLLISION_DETECTED = 0x01;

const NO_DOUBLE_TAP = 0x00;
const DOUBLE_TAP_DETECTED = 0x01;

const POSTURE_TOP = 0x01;
const POSTURE_BOTTOM = 0x02;
const POSTURE_BACK = 0x03;
const POSTURE_FRONT = 0x04;
const POSTURE_RIGHT = 0x05;
const POSTURE_LEFT = 0x06;

describe('CubeSensorChar', (): void => {
  beforeEach(() => {
    cubeDeviceMock = new DeviceMock(CORE_CUBE_NAME, [CORE_CUBE_SERVICE_UUID]);
    global.navigator = global.navigator || {};
    global.navigator.bluetooth = new WebBluetoothMock([cubeDeviceMock]);
    serviceMock = cubeDeviceMock.getServiceMock(CORE_CUBE_SERVICE_UUID);
    sensorCharMock = serviceMock.getCharacteristicMock(CORE_CUBE_BUTTON_CHAR_UUID);
    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
  });

  test('Properties', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);
    expect(testTarget.uuid).toBe(CORE_CUBE_BUTTON_CHAR_UUID);
    expect(CubeSensorChar.postureId.top).toBe('top');
    expect(CubeSensorChar.postureId.back).toBe('back');
    expect(CubeSensorChar.postureId.bottom).toBe('bottom');
    expect(CubeSensorChar.postureId.front).toBe('front');
    expect(CubeSensorChar.postureId.left).toBe('left');
    expect(CubeSensorChar.postureId.right).toBe('right');
  });

  test('Prepare: addEventListener', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    const spy = jest.spyOn(sensorCharMock, 'addEventListener');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalledWith('characteristicvaluechanged', expect.anything());
  });

  test('Prepare: startNotifications', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    const spy = jest.spyOn(sensorCharMock, 'startNotifications');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalled();
  });

  test('Prepare: readValue', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_TOP,
      ]).buffer,
    );

    const spy = jest.spyOn(sensorCharMock, 'readValue');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalled();
    expect(testTarget.isFlat()).toBe(false);
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.top);
  });

  test('Prepare: readValue error', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    sensorCharMock.readValue = jest.fn(() => {
      return Promise.reject(new Error('test'));
    });
    await expect(testTarget.prepare()).rejects.toMatchObject(new Error('test'));
    expect(sensorCharMock.readValue).toHaveBeenCalled();
  });

  test('Prepare: Char error', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    serviceMock.getCharacteristic = jest.fn(() => {
      return Promise.reject(new Error('test'));
    });
    await expect(testTarget.prepare()).rejects.toMatchObject(new Error('test'));
  });

  test('isFlat', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.isFlat()).toBe(true);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.isFlat()).toBe(false);

    // For same value
    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.isFlat()).toBe(false);
  });

  test('getPosture', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.top);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BOTTOM,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.bottom);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_RIGHT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.right);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_LEFT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.left);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_FRONT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.front);

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getPosture()).toBe(CubeSensorChar.postureId.back);
  });

  test('addEventListener: flat-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('flat', (isFlat?: boolean): void => {
      if (callTimes > 0) {
        expect(isFlat).toBe(true);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: flat-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('flat', (isFlat?: boolean): void => {
      if (callTimes > 0) {
        expect(isFlat).toBe(false);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: collision-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('collision', (): void => {
      done();
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: collision-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        COLLISION_DETECTED,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('collision', (): void => {
      if (callTimes > 0) {
        throw new Error('Failed: unexpected call.');
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    setTimeout(() => {
      done();
    }, 1000);
  });

  test('addEventListener: doubletap-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('doubletap', (): void => {
      done();
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: doubletap-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('doubletap', (): void => {
      if (callTimes > 0) {
        throw new Error('Failed: unexpected call.');
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    setTimeout(() => {
      done();
    }, 1000);
  });

  test('addEventListener: posture-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('posture', (posture: string): void => {
      if (callTimes > 0) {
        expect(posture).toBe(CubeSensorChar.postureId.back);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_BACK,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: posture-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('posture', (posture: string): void => {
      if (callTimes > 0) {
        expect(posture).toBe(CubeSensorChar.postureId.bottom);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_BOTTOM,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: posture-3', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('posture', (posture: string): void => {
      if (callTimes > 0) {
        expect(posture).toBe(CubeSensorChar.postureId.front);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_FRONT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: posture-4', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('posture', (posture: string): void => {
      if (callTimes > 0) {
        expect(posture).toBe(CubeSensorChar.postureId.left);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_LEFT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: posture-5', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('posture', (posture: string): void => {
      if (callTimes > 0) {
        expect(posture).toBe(CubeSensorChar.postureId.right);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_RIGHT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: posture-6', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_RIGHT,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('posture', (posture: string): void => {
      if (callTimes > 0) {
        expect(posture).toBe(CubeSensorChar.postureId.top);
        done();
      }
      callTimes += 1;
    });

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: posture-invalid', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    const POSTURE_INVALID = 100;
    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_INVALID,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('posture', (posture: string): void => {
      expect(posture).toBe('invalid');
      done();
    });
  });

  test('addEventListener Illegal case', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    sensorCharMock.value = new DataView(
      new Uint8Array([
        INFO_TYPE_DETECTION,
        IS_FLAT,
        COLLISION_DETECTED,
        DOUBLE_TAP_DETECTED,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('foo', (): void => {
      throw new Error('failed');
    });
  });

  test('Invalid info type', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeSensorChar(service);

    await testTarget.prepare();

    const INVALID_INFO_TYPE = 0x99;
    sensorCharMock.value = new DataView(
      new Uint8Array([
        INVALID_INFO_TYPE,
        IS_NOT_FLAT,
        NO_COLLISION,
        NO_DOUBLE_TAP,
        POSTURE_TOP,
      ]).buffer,
    );
    sensorCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('collision', (): void => {
      if (callTimes > 0) {
        throw new Error('failed');
      }
      callTimes += 1;
    });

    setTimeout(() => {
      done();
    }, 1000);
  });
});
