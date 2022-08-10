// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
//import "firebase/compat/auth"
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAnk79tsPGcQ_GET1f0A1cadoPgBVaYaCw',
	authDomain: 'juanmaurente-ecommerce-site.firebaseapp.com',
	projectId: 'juanmaurente-ecommerce-site',
	storageBucket: 'juanmaurente-ecommerce-site.appspot.com',
	messagingSenderId: '888003201873',
	appId: '1:888003201873:web:afb45ecfe2c4f4efbee170',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();
