const path = require("path");
const { app, BrowserWindow } = require('electron')


const isdev = !app.isPackaged;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile(path.join(__dirname, "project/dist/index.html"))
  
}

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-closed', () => {
    if(process.platform != 'darwin') app.quit();
})