// navigator.mediaDevices.getUserMedia({audio:true, video: true})
//   .then(function(stream) {
//     document.getElementById('camera').srcObject = stream;
//   }).catch(function() {
//     alert('could not connect stream');
//   });


navigator.mediaDevices.getUserMedia({audio:true})
  .then(function(stream) {
    document.getElementById('camera').srcObject = stream;
  }).catch(function() {
    alert('could not connect stream');
  });
