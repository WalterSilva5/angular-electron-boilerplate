import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import * as path from 'path';
import { SystemService } from '../../backend/module/system/system.service';
import { NotificationService } from '../../backend/module/notification/notification.service';

let win: BrowserWindow | null = null;

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    webPreferences: {
      // Disabled Node integration
      nodeIntegration: false,
      // protect against prototype pollution
      contextIsolation: true,
      // Preload script
      preload: path.join(app.getAppPath(), 'dist/preload', 'preload.js')
    }
  });

  // Abre o DevTools automaticamente
  // desabilitar em produção
  win.webContents.openDevTools();

  // https://stackoverflow.com/a/58548866/600559
  Menu.setApplicationMenu(null);

  win.loadFile(path.join(app.getAppPath(), 'dist/renderer', 'index.html'));

  win.on('closed', () => {
    win = null;
  });
}

ipcMain.on('dev-tools', () => {
  if (win) {
    win.webContents.toggleDevTools();
  }
});

ipcMain.on('request-systeminfo', () => {
  const systemService = new SystemService(win);
  console.log('request-systeminfo');
  systemService.requestSystemInfo();

  // if (win) {
  //   win.webContents.send('systeminfo', serializedString);
  // }
});

ipcMain.on('show-notification', (event, arg) => {
  if (win) {
    console.log('show-notification', arg);
    const notificationService = new NotificationService();
    const message = "Mensagem a ser exibida";
    notificationService.show(message);
  }
});
