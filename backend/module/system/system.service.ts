import { BrowserWindow } from 'electron';
import { DtoSystemInfo } from '../../../src/ipc-dtos/dtosysteminfo';
import * as os from 'os';

export class SystemService {
  constructor(public readonly window: BrowserWindow | null) {
    this.window = window;
  }

  public requestSystemInfo(): void {
    const systemInfo = new DtoSystemInfo();
    systemInfo.Arch = os.arch();
    systemInfo.Hostname = os.hostname();
    systemInfo.Platform = os.platform();
    systemInfo.Release = os.release();
    const serializedString = systemInfo.serialize();
    if (this.window) {
      this.window.webContents.send('systeminfo', serializedString);
    }
  }
}
