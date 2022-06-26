import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB49C6Xk3UBCdIXZuZDDGuQkKFxbHe4Wpg',
  authDomain: 'noteballs-66528.firebaseapp.com',
  projectId: 'noteballs-66528',
  storageBucket: 'noteballs-66528.appspot.com',
  messagingSenderId: '375894179296',
  appId: '1:375894179296:web:f9098c921d5d638bce3f85',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
