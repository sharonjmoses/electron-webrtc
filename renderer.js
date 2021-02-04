const { BrowserWindow } = require('electron').remote;

const path = require('path');
console.log(BrowserWindow)

const newWindo = document.getElementById('btnEd')


newWindo.addEventListener('click', function(evet){
    let win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadFile('public/index.html')
    win.show();

    win.on('close', function () { win =null});
})