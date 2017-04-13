var express = require('express'),
	app = express();
var firebase = require('firebase')

// Initialize Firebase
  var config = {
    apiKey: process.env.SECRETAPIKEY,
    authDomain: "testproject-db987.firebaseapp.com",
    databaseURL: "https://testproject-db987.firebaseio.com",
    projectId: "testproject-db987",
    storageBucket: "testproject-db987.appspot.com",
    messagingSenderId: "71818724096"
  };
  
  firebase.initializeApp(config);

  function writeUserData() {
	  firebase.database().ref('users/1').set({
	    username: 'jonnyismail',
	    email: 'habilhusnigmail.com'
	  });
	}

	writeUserData();

// app.listen(3000);

module.exports = app;