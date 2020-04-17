import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-interseccion-grupos',
  templateUrl: './interseccion-grupos.component.html',
  styleUrls: ['./interseccion-grupos.component.scss']
})
export class InterseccionGruposComponent implements OnInit {
  public numeroDeGrupos: number = 0;
  public arrayGrupos: any = [];
  public elemntos: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  crear() {
    for (var grupo = 0; grupo < this.numeroDeGrupos; grupo++) {
      this.arrayGrupos.push({ grupo })
    }
    console.log(this.arrayGrupos);
  }
  index
  addForGroup(value) {
    this.index = +value.target.value
  }

  anadir() {
    console.log(this.arrayGrupos);
    var elementos = this.elemntos
    this.arrayGrupos[this.index].grupo = elementos
    console.log(this.arrayGrupos);
  }



}
