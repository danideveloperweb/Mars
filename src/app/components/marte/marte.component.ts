import { Component } from '@angular/core';

@Component({
  selector: 'app-marte',
  templateUrl: './marte.component.html',
  styleUrls: ['./marte.component.css'],
})
export class MarteComponent {
  mart = {
    coche:'grid-column:1;grid-row:1'
  };

  move = 'grid-column:3;grid-row:1';
  move2 = 'grid-column:1;grid-row:3';
  move3 = 'grid-column:5;grid-row:5';



  moveRuta() {
    if(this.mart.coche === this.move) {
      alert('Cuidado !!! Un Alien escondamonos , tiene pinta de hostil');
      return this.mart.coche = 'grid-column:2;grid-row:1';
    }
    if(this.mart.coche === this.move2) {
      alert('Cuidado !!! Un Ovni escondamonos para que no nos detecten');
      return this.mart.coche = 'grid-column:1;grid-row:2';
    }
    if(this.mart.coche === this.move3) {
      alert('Hemos llegado a la nave, salgamos de este planeta');

      return (this.mart.coche = 'grid-column:6;grid-row:6') ;
    }
  }


}
