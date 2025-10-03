// main.js - Main Process (เสมือน backend)
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;


function createWindow() {
mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  title: 'My First Electron App',
  icon: path.join(__dirname, 'assets', 'icon.png'),
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'), // ต้องตรงชื่อไฟล์
    nodeIntegration: false,
    contextIsolation: true
  }
});


  mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    console.log('❌ Window ถูกปิดแล้ว');
    mainWindow = null;
  });

  console.log('✅ สร้าง window สำเร็จ!');
}

app.whenReady().then(() => {
  console.log('⚡ Electron พร้อมทำงาน');
  createWindow();
});

app.on('window-all-closed', () => {
  console.log('🔴 ปิด window ทั้งหมดแล้ว');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC
ipcMain.handle('ping', async (_evt, name = 'Electron') => {
  return `pong 👋 from Main — Hi ${name}!`;
});

ipcMain.on('resize', (_evt, w, h) => {
  if (mainWindow && Number.isFinite(w) && Number.isFinite(h)) {
    mainWindow.setSize(w, h);
  }
});
