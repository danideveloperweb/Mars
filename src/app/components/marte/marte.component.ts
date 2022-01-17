import { Component } from '@angular/core';

@Component({
  selector: 'app-marte',
  templateUrl: './marte.component.html',
  styleUrls: ['./marte.component.css'],
})
export class MarteComponent {
  mart = {
    move: 'grid-column:1;grid-row:1',
  };

  ruta = [this.mart];
}
