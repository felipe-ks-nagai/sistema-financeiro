const path = require("path");
const { app, BrowserWindow, shell } = require("electron");

const isDev = !app.isPackaged;
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Load Vite dev server in development, or built index.html in production
  if (isDev) {
    win.loadURL("http://localhost:5173");
  } else {
    win.loadFile(path.join(__dirname, "dist", "index.html"));
  }

  // Prevent new windows (e.g., target="_blank", window.open)
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http")) {
      // Open external links in default browser
      shell.openExternal(url);
      return { action: "deny" };
    }
    // Internal navigation: load in same window
    win.loadURL(url);
    return { action: "deny" };
  });

  // Intercept navigation in the same window
  win.webContents.on("will-navigate", (event, url) => {
    const currentURL = win.webContents.getURL();
    if (url !== currentURL) {
      event.preventDefault();

      // If it's external, open browser
      if (url.startsWith("http")) {
        shell.openExternal(url);
      } else {
        // Internal: load in same window
        win.loadURL(url);
      }
    }
  });
}

// Create window when app is ready
app.whenReady().then(createWindow);

// macOS: re-create window when dock icon is clicked
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Quit app on all windows closed (except macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});