// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  now: () => new Date().toLocaleString('th-TH'),
  ping: (name) => ipcRenderer.invoke('ping', name),
  resize: (w, h) => ipcRenderer.send('resize', w, h)
});
