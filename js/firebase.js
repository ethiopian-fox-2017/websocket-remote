require('dotenv').config()
const firebase = require('firebase');

var config = {
  apiKey: process.env.API_KEY,
  authDomain: "websocket-remote.firebaseapp.com",
  databaseURL: "https://websocket-remote.firebaseio.com",
  projectId: "websocket-remote",
  storageBucket: "websocket-remote.appspot.com",
  messagingSenderId: "622558345855"
};
firebase.initializeApp(config);
var starCountRef = firebase.database().ref('slides');

function next() {
  firebase.database().ref('slides').set({
    dir: "next",
    time: (new Date().getTime()).toString()
  });
}

function prev() {
  firebase.database().ref('slides').set({
    dir: "prev",
    time: (new Date().getTime()).toString()
  });
}


starCountRef.on('value', function(snapshot) {
  if (snapshot.val().dir == "next") {
    plusDivs(1)
  }else{
    plusDivs(-1)
  }
});
