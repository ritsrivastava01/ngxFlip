import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxflip-app';
  flip = false;
  rotate() {
    this.flip = !this.flip;
  }
}
