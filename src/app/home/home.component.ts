import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-fullheight is-info">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title is-1">HELLO ANGULAR DENVER!</h1>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
