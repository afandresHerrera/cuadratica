import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public verFibonacci: boolean = false
  public verInterseccionGrupos: boolean = false
  title = 'elemntos';

  ViewComponent(param) {
    this.verFibonacci = false
    this.verInterseccionGrupos = false
    param == 1 ? this.verFibonacci = true : this.verInterseccionGrupos = true;
  }
}
