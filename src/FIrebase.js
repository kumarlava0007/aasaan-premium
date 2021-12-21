import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDBENSYjbp_AeR4FeAnzMUgUMJprkFuPRM",
    authDomain: "aasaan-premium.firebaseapp.com",
    databaseURL: "https://aasaan-premium-default-rtdb.firebaseio.com",
    projectId: "aasaan-premium",
    storageBucket: "aasaan-premium.appspot.com",
    messagingSenderId: "526197812111",
    appId: "1:526197812111:web:3ca54396dea5862f33f9fa",
    measurementId: "G-Y9C0LZG8JT"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  console.log(db)

//   export {db,auth,storage};