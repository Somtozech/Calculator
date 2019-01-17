const { app, BrowserWindow } = require("electron");
const url = require("url");
const { join } = require("path");

let calcWindow;

function createWindow() {
  calcWindow = new BrowserWindow({
    width: 300,
    height: 400,
    maxHeight: 400,
    maxWidth: 800
  });

  calcWindow.loadURL(
    url.format({
      pathname: join(__dirname, "src", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  calcWindow.on("closed", () => {
    calcWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
