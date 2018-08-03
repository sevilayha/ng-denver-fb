import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" routerLink="/">
            😁😁😁
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <a routerLink="/thoughts" class="navbar-item">
              ⛅ Thoughts
            </a>
          </div>
        </div>
      </nav>
    </header>


    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'firebase-app';
}
