import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyATnJu9yzPOZFrkzkLAATIrvcMnMe0aJg4",
  authDomain: "projeto-75-a95e5.firebaseapp.com",
  projectId: "projeto-75-a95e5",
  storageBucket: "projeto-75-a95e5.appspot.com",
  messagingSenderId: "973033390511",
  appId: "1:973033390511:web:c27080ae87ff4292bc6f5a",
  measurementId: "G-MN1L9CXR3Y"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
