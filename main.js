import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import url from "url";

let win = null;

app.on("ready", () => {
  win = new BrowserWindow();

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.show();
  const mainMenu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(mainMenu)

  win.on("closed", () => {
    win = null;
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

const menuTemplate =
[
  {
     label: 'File',
     submenu: 
     [
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();

        }
      }
    ],
  },
  {
    label: 'DevTools',
    submenu: 
    [
      {
        label: 'Toggle',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  }
]