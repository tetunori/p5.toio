export class TestClient {
  private readonly CORE_CUBE_SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
  private gatt: BluetoothRemoteGATTServer | undefined = undefined;
  public deviceName: string | null = '';

  public async connect(): Promise<BluetoothRemoteGATTService> {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: [this.CORE_CUBE_SERVICE_UUID] }],
    });
    this.gatt = await device.gatt?.connect();
    this.deviceName = this.gatt?.device.name || null;
    if (this.gatt) {
      return this.gatt.getPrimaryService(this.CORE_CUBE_SERVICE_UUID);
    } else {
      return Promise.reject(new Error('gatt undefined.'));
    }
  }
}
