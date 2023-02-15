import firebase from "firebase/compat/app"
import { getFirestore, collection ,getDocs} from "firebase/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUZnBJKXM_oo5BdajlqRxeWpkuXyu41Ig",
    authDomain: "clone-7b1b9.firebaseapp.com",
    projectId: "clone-7b1b9",
    storageBucket: "clone-7b1b9.appspot.com",
    messagingSenderId: "895295182468",
    appId: "1:895295182468:web:c4b44a1ce14ab7274c94d1",
    measurementId: "G-3R2BRMF858"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = getFirestore()

  const colRef = collection(db,"Electronics")
  
  var products = []

  getDocs(colRef)
   .then((snapshot) => {
    snapshot.docs.forEach(doc => {
      products.push({...doc.data(),id: doc.id})

    })
    
    console.log(products)
   })
  const auth = firebase.auth()

  export { db, auth,products }