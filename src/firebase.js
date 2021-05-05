import { ref, onUnmounted } from 'vue'

import firebase from 'firebase';

require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAPhQFgP43h1ChuC6Q4-ETAMerorLZ9LOk",
    authDomain: "deezapp-a78ff.firebaseapp.com",
    projectId: "deezapp-a78ff",
    storageBucket: "deezapp-a78ff.appspot.com",
    messagingSenderId: "468103395136",
    appId: "1:468103395136:web:c5626e198aa3feaf9e2ca5",
    measurementId: "G-42EBGH4RZJ"

});
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
const usersCollection = db.collection('users');

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}


export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    console.log(users)
    onUnmounted(close)
    return users
  }