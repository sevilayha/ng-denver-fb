import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoughtsComponent } from './thoughts.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ThoughtsRoutingModule } from './thoughts-routing-module';

const config = {
  apiKey: 'AIzaSyBeIyUGTLG6-sVJvzW5AiYym3m1sQBnhfU',
  authDomain: 'angular-denver-scratchpad.firebaseapp.com',
  databaseURL: 'https://angular-denver-scratchpad.firebaseio.com',
  projectId: 'angular-denver-scratchpad',
  storageBucket: 'angular-denver-scratchpad.appspot.com',
  messagingSenderId: '238301141945'
};

@NgModule({
  imports: [
    CommonModule,
    ThoughtsRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  declarations: [ThoughtsComponent]
})
export class ThoughtsModule { }
