import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase'
import Container from './containers/container.jsx'
import registerServiceWorker from './registerServiceWorker'
import './index.css'


var config = {
  apiKey: "AIzaSyARoEWB9sz5Kd2QTyw6OT_4ePQpBXak1fs",
  authDomain: "checkout-b24ca.firebaseapp.com",
  databaseURL: "https://checkout-b24ca.firebaseio.com",
  projectId: "checkout-b24ca",
  storageBucket: "checkout-b24ca.appspot.com",
  messagingSenderId: "787202489538"
};
firebase.initializeApp(config);


ReactDOM.render(
  <BrowserRouter>
    <Container/> 
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
