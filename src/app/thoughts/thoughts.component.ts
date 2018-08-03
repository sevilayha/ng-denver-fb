import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-writer',
  template: `
    <section class="hero is-fullheight is-info">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">In the brain stuffs</h1>

          <!-- loop over messages -->
          <div class="box is-size-4" *ngFor="let message of messages | async">
            {{ message.text }}
          </div>

        </div>
      </div>
  </section>
  `,
  styles: [`
    textarea {
      font-size: 40px;
    }
  `]
})
export class ThoughtsComponent {
  messagesCollection;
  messages;

  constructor(private afs: AngularFirestore) {
    this.messagesCollection = afs.collection('messages');
    this.messages = this.messagesCollection.valueChanges();
  }

}
