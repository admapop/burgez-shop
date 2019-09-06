import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAHf2oJ5QNf4BcZBtHyjxJR-D3ciJ78y-M",
    authDomain: "burgez-shop-db.firebaseapp.com",
    databaseURL: "https://burgez-shop-db.firebaseio.com",
    projectId: "burgez-shop-db",
    storageBucket: "",
    messagingSenderId: "533509332088",
    appId: "1:533509332088:web:5876dc85792edd8bb5618d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;