import { TestClient } from '../testClient';
import { CubeBatteryChar } from '#/cube/char/batteryChar';
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
let battCharMock: CharacteristicMock;

let service: BluetoothRemoteGATTService;

const CORE_CUBE_NAME = 'toio Core Cube';
const CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
const CORE_CUBE_BATT_CHAR_UUID = '10b20108-5b3b-4571-9508-cf3efcd7bbae';

describe('CubeBatteryChar', (): void => {
  beforeEach(() => {
    cubeDeviceMock = new DeviceMock(CORE_CUBE_NAME, [CORE_CUBE_SERVICE_UUID]);
    global.navigator = global.navigator || {};
    global.navigator.bluetooth = new WebBluetoothMock([cubeDeviceMock]);
    serviceMock = cubeDeviceMock.getServiceMock(CORE_CUBE_SERVICE_UUID);
    battCharMock = serviceMock.getCharacteristicMock(CORE_CUBE_BATT_CHAR_UUID);
    battCharMock.value = new DataView(new Uint8Array([80]).buffer);
  });

  test('Properties', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);
    expect(testTarget.uuid).toBe(CORE_CUBE_BATT_CHAR_UUID);
  });

  test('Prepare: addEventListener', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    const spy = jest.spyOn(battCharMock, 'addEventListener');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalledWith('characteristicvaluechanged', expect.anything());
  });

  test('Prepare: startNotifications', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    const spy = jest.spyOn(battCharMock, 'startNotifications');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalled();
  });

  test('Prepare: readValue', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    battCharMock.value = new DataView(new Uint8Array([90]).buffer);

    const spy = jest.spyOn(battCharMock, 'readValue');
    await testTarget.prepare();
    expect(spy).toHaveBeenCalled();
    expect(testTarget.getBatteryLevel()).toBe(90);
  });

  test('Prepare: readValue error', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    battCharMock.readValue = jest.fn(() => {
      return Promise.reject(new Error('test'));
    });
    await expect(testTarget.prepare()).rejects.toMatchObject(new Error('test'));
    expect(battCharMock.readValue).toHaveBeenCalled();
  });

  test('Prepare: Char error', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    serviceMock.getCharacteristic = jest.fn(() => {
      return Promise.reject(new Error('test'));
    });
    await expect(testTarget.prepare()).rejects.toMatchObject(new Error('test'));
  });

  test('getBatteryLevel', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    await testTarget.prepare();

    let battLvl = 0;
    for (battLvl = 0; battLvl < 110; battLvl += 10) {
      battCharMock.value = new DataView(new Uint8Array([battLvl]).buffer);
      battCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
      expect(testTarget.getBatteryLevel()).toBe(battLvl);
    }

    // For same value
    battLvl = 100;
    battCharMock.value = new DataView(new Uint8Array([battLvl]).buffer);
    battCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));
    expect(testTarget.getBatteryLevel()).toBe(battLvl);
  });

  test('addEventListener', async (done): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    await testTarget.prepare();
    const testBatteryLevel = 90;

    battCharMock.value = new DataView(new Uint8Array([testBatteryLevel]).buffer);
    battCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('change', (batteryLevel: number): void => {
      expect(batteryLevel).toBe(testBatteryLevel);
      done();
    });
  });

  test('addEventListener Illegal case', async (): Promise<void> => {
    const client = new TestClient();
    service = await client.connect();
    const testTarget = new CubeBatteryChar(service);

    await testTarget.prepare();
    const testBatteryLevel = 90;

    battCharMock.value = new DataView(new Uint8Array([testBatteryLevel]).buffer);
    battCharMock.dispatchEvent(new CustomEvent('characteristicvaluechanged'));

    testTarget.addEventListener('foo', (batteryLevel: number): void => {
      throw new Error('failed' + batteryLevel);
    });
  });
});
