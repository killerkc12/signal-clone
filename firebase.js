import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGOF1ITw1uN6MyVhSN-WTDdw-5QCSMCnU",
    authDomain: "signal-clone-f447d.firebaseapp.com",
    projectId: "signal-clone-f447d",
    storageBucket: "signal-clone-f447d.appspot.com",
    messagingSenderId: "73334327543",
    appId: "1:73334327543:web:567e5949e24d8faf0c6bf2"
  };

  let app

  if(firebase.apps.length === 0)
    app = firebase.initializeApp(firebaseConfig)
  else
    app = firebase.app()

  const db = app.firestore()
  const auth = app.auth() 

  export { db, auth }