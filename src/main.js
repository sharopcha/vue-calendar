import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: 'AIzaSyBfCRWpqcaucwS1klM6YfdT9L5yMBHOGdk',
  authDomain: 'vue-calendar-ec904.firebaseapp.com',
  databaseURL: 'https://vue-calendar-ec904.firebaseio.com',
  projectId: 'vue-calendar-ec904',
  storageBucket: 'vue-calendar-ec904.appspot.com',
  messagingSenderId: '454209682700',
  appId: '1:454209682700:web:ed707f4007e81811751d29',
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
