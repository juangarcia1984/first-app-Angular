import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';//
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template:`<main>
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.png" alt="logo" />
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>
`,
styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
