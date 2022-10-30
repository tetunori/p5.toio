import { TestClient } from '../testClient';
import { CubeButtonChar } from '#/cube/char/buttonChar';
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
let buttonCharMock: CharacteristicMock;

let service: BluetoothRemoteGATTService;

const CORE_CUBE_NAME = 'toio Core Cube';
const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
const CORE_CUBE_BUTTON_CHAR_UUID = '10b20107-5b3b-4571-9508-cf3efcd7bbae';

const BUTTON_ID_FUNCTION = 0x01;
const BUTTON_NOT_PRESSED = 0x00;
const BUTTON_PRESSED = 0x80;

describe('CubeButtonChar', (): void => {
  beforeEach(() => {
    cubeDeviceMock = new DeviceMock(CORE_CUBE_NAME, [CORE_CUBE_SERVICE_UUID]);
    global.navigator = global.navigator || {};
    global.navigator.bluetooth = new WebBluetoothMock([cubeDeviceMock]);
    serviceMock = cubeDeviceMock.getServiceMock(CORE_CUBE_SERVICE_UUID);
    buttonCharMock = serviceMock.getCharacteristicMock(CORE_CUBE_BUTTON_CHAR_UUID);
    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
  });

  test('Properties', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);
    expect(testTarget.uuid).toBe(CORE_CUBE_BUTTON_CHAR_UUID);
  });

  test('Prepare: addEventListener', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    const spy = jest.spyOn(buttonCharMock, 'addEventListener');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalledWith('characteristicvaluechanged', expect.anything());
  });

  test('Prepare: startNotifications', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    const spy = jest.spyOn(buttonCharMock, 'startNotifications');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalled();
  });

  test('Prepare: readValue', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );

    const spy = jest.spyOn(buttonCharMock, 'readValue');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalled();
    expect(testTarget.isButtonPressed()).toBe(true);
  });

  test('Prepare: readValue error', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    buttonCharMock.readValue = jest.fn(() => {
      return Promise.reject(new Error('test'));
    });
    await expect(testTarget.prepare()).rejects.toMatchObject(new Error('test'));
    expect(buttonCharMock.readValue).toHaveBeenCalled();
  });

  test('Prepare: Char error', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    serviceMock.getCharacteristic = jest.fn(() => {
      return Promise.reject(new Error('test'));
    });
    await expect(testTarget.prepare()).rejects.toMatchObject(new Error('test'));
  });

  test('isButtonPressed', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.isButtonPressed()).toBe(true);

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.isButtonPressed()).toBe(false);

    // For same value
    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.isButtonPressed()).toBe(false);
  });

  test('addEventListener: press-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('press', (isPressed?: boolean): void => {
      expect(isPressed).toBe(undefined);
      done();
    });

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: press-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('press', (isPressed?: boolean): void => {
      if (callTimes > 0) {
        throw new Error('Failed: unexpected call. isPressed: ' + isPressed);
      }
      callTimes += 1;
    });

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    setTimeout(() => {
      done();
    }, 1000);
  });

  test('addEventListener: release-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('release', (isPressed?: boolean): void => {
      expect(isPressed).toBe(undefined);
      done();
    });

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: release-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('release', (isPressed?: boolean): void => {
      if (callTimes > 0) {
        throw new Error('Failed: unexpected call. isPressed: ' + isPressed);
      }
      callTimes += 1;
    });

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    setTimeout(() => {
      done();
    }, 1000);
  });

  test('addEventListener: both-1', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('both', (isPressed?: boolean): void => {
      if (callTimes > 0) {
        expect(isPressed).toBe(false);
        done();
      }
      callTimes += 1;
    });

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener: both-2', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_NOT_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    let callTimes = 0;
    testTarget.addEventListener('both', (isPressed?: boolean): void => {
      if (callTimes > 0) {
        expect(isPressed).toBe(true);
        done();
      }
      callTimes += 1;
    });

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
  });

  test('addEventListener Illegal case', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeButtonChar(service);

    await testTarget.prepare();

    buttonCharMock.value = new DataView(
      new Uint8Array([BUTTON_ID_FUNCTION, BUTTON_PRESSED]).buffer,
    );
    buttonCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('foo', (isPressed?: boolean): void => {
      throw new Error('failed' + isPressed);
    });
  });
});
