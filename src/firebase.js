import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD60u8ud8T2Dfu-WsV_WnO-q_AiV8kOmec",
    authDomain: "chat-app-20fe0.firebaseapp.com",
    databaseURL: "https://chat-app-20fe0.firebaseio.com",
    projectId: "chat-app-20fe0",
    storageBucket: "chat-app-20fe0.appspot.com",
    messagingSenderId: "995034408867",
    appId: "1:995034408867:web:f04fe016fb99ef85badc16",
    measurementId: "G-ZEPLEV0M0Q"
});

const db = firebaseApp.firestore();

export {db};