// electron space
const {app, BrowserWindow} = require('electron')

let mainWindow = null;

app.on('ready', () => {
  //normal(); //executes promise
  console.log('app is ready')

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    show: false,
    titleBarStyle: 'hidden-inset'
  })
  //mainWin.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL(`http://localhost:9000`)
  //mainWindow.loadURL(`http://nodejs.org/`)

  // mainWindow.on('closed', function() {
  //   mainWindow = null;
  // });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

})



let quitWhenDone = new Promise(
  function(resolve, reject) {
    console.log(`electron here. Directory: ${__dirname}`)
    let piece = {
      info: "none yet",
      other: "some other"
    }
      resolve(piece) // will get passed to callback
      reject(new Error('something failed'))
  })

function normal() {
  quitWhenDone.then(function(passed) {
    console.log(passed)
    //app.quit();
  })
}
