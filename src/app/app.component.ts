import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tl: String[] = [];
  tc: String[] = [];

    // Stock dans tl le tableau todos du fils et dans tc le tableau myClass du même fils
  updateList(e: any) {
    if (e[0] == "" || e[0] == "line") {
      this.tc = e;
    } else {
      this.tl = e;
    }
  }
}
