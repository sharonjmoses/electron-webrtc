const { BrowserWindow } = require('electron').remote;
var Peer = require('simple-peer')
const io = require('socket.io-client')

const path = require('path');

// const io = require("socket.io")

let connection = false;

const newWindo = document.getElementById('btnEd')


newWindo.addEventListener('click', function (evet) {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile('public/index.html')
  win.show();

  win.on('close', function () { win = null });
})