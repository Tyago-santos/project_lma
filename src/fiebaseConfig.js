// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB5crfc0TUjjcRRvGPouCNsF8ZltMXwijQ',
    authDomain: 'projeto-lma.firebaseapp.com',
    databaseURL: 'https://projeto-lma-default-rtdb.firebaseio.com',
    projectId: 'projeto-lma',
    storageBucket: 'projeto-lma.firebasestorage.app',
    messagingSenderId: '133617182154',
    appId: '1:133617182154:web:e6b3e93c888529d428db33',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default () => {
    return {
        getLsist: async function () {},
    };
};
