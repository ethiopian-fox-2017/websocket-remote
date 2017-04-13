var firebase = require('firebase')

var config = {
    apiKey: process.env.SECRETAPIKEY,
    authDomain: "testproject-db987.firebaseapp.com",
    databaseURL: "https://testproject-db987.firebaseio.com",
    projectId: "testproject-db987",
    storageBucket: "testproject-db987.appspot.com",
    messagingSenderId: "71818724096"
  };
  
  firebase.initializeApp(config);

var database = firebase.database();

var starCountRef = firebase.database().ref('users/1');
starCountRef.on('value', function(snapshot) {
  // updateStarCount(postElement, snapshot.val());
  console.log('this value: ',snapshot.val())
});
  
