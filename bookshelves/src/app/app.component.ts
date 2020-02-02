import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyC2bFJQA4vM5wT8zX7XDPVK1Nddg5LqdAI",
      authDomain: "bookshelves-84152.firebaseapp.com",
      databaseURL: "https://bookshelves-84152.firebaseio.com",
      projectId: "bookshelves-84152",
      storageBucket: "bookshelves-84152.appspot.com",
      messagingSenderId: "876497202801",
      appId: "1:876497202801:web:cff70345a18973070335d0"
    };
    firebase.initializeApp(config);
  }
}
