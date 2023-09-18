import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
	send: (channel: string, data: unknown[]) => {
		ipcRenderer.send(channel, data);
	},
	sendSync: (channel: string, data: unknown[]) => {
		ipcRenderer.sendSync(channel, data);
	},
	receive: (channel: string, func: (...args: unknown[]) => unknown) => {
		ipcRenderer.on(channel, (event, ...args) => func(...args));
	},
});
