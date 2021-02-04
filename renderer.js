const { BrowserWindow } = require('electron').remote;
var Peer = require('simple-peer')
const io = require('socket.io-client')

const path = require('path');

// const io = require("socket.io")

let connection = false;

const newWindo = document.getElementById('btnEd')
const newWindo2 = document.getElementById('btnVd');


var socket = io('http://localhost:8000/');


// console.log(socket)

// const peer = new Peer('pick-an-id');

// const conn = peer.connect('another-peers-id');

// conn.on('open', () => {
//     conn.send('hi!');
//   });

// peer.on('open', function(id){
//     console.log('ppeee', id)
// })

// function connectCall (stream) {
//     var peer1 = new Peer({ initiator: true, trickle: false, stream: stream })
//     var peer2 = new Peer()

//     peer1.on('signal', data => {
//       peer2.signal(data)
//     })

//     peer2.on('signal', data => {
//       peer1.signal(data)
//     })

//     peer2.on('stream', stream => {
//       // got remote video stream, now let's show it in a video tag
//       var video = document.querySelector('camera2')

//       if ('srcObject' in video) {
//         video.srcObject = stream
//       } else {
//         video.src = window.URL.createObjectURL(stream) // for older browsers
//       }

//       video.play()
//     })
//   }

// navigator.mediaDevices.getUserMedia({audio:true, video:true})
//   .then(connectCall).catch(function() {
//     alert('could not connect stream');
//   });


//   navigator.mediaDevices.getUserMedia({audio:true, video:true})
//   .then(function(stream) {
//     document.getElementById('camera2').srcObject = stream;
//   }).catch(function() {
//     alert('could not connect stream');
//   });

function callPeer(stream){
    const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
    })

    peer.on("signal", data=>{
        socket.current.emit("callUser", {useTocall: 1234, signalData: data, from: 1234})
    })
}


newWindo2.addEventListener('click', function (evet) {

    var socket = io('http://localhost:8000/');
    // console.log(socket)
    socket.on("yourID", (id) => {
        console.log(id)
      })

      socket.on("allUsers", (users) => {
        console.log(users)
        setUsers(users);
      })

    // navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    //     .then(function (stream) {
    //         document.getElementById('camera').srcObject = stream;
    //         if(stream){
    //             callPeer(stream);
    //         }
    //     }).catch(function () {
    //         alert('could not connect stream');
    //     });
})


newWindo.addEventListener('click', function (evet) {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadFile('public/index.html')
    win.show();

    win.on('close', function () { win = null });
})