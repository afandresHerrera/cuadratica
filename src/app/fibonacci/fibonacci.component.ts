import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {
  public A: any = 0;
  public B: any = 0;
  public C: any = 0;
  public x2: any = 0;
  public x1: any = 0;
  public canvas: any;
  public resultado: any = [];
  public error: boolean = false;
  constructor() { }

  ngOnInit(): void {
    // this.lienzo = document.querySelector("#lienzo");



  }
  calcular() {
    console.log(this.A);
    console.log(this.B);
    console.log(this.C);

  }

  ecuacion() {
    
    var a = this.A
    var b = this.B
    var c = this.C
    var d;
    // debugger
    if (a == 0) {
      this.x1 = (-c) / b;
      this.x2 = 0;
    }
    else {
      d = b * b - 4 * a * c;
      console.log(d);
      if (d > 0) {
        this.x1 = ((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
        this.x2 = ((-1 * -b) - (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
        // this.x1 = (-b + (Math.sqrt(d))) / (2 * a);
        // this.x2 = (-b - (Math.sqrt(d))) / (2 * a);
      }

      if (d == 0) {
        this.x1 = (-b) / 2 * a;
        this.x2 = (-b) / 2 * a;
      }
      if (d < 0) {
        alert("Raices menores que 0 no es posible graficar");
      }
    }
    console.log(this.x1);
    console.log(this.x2);
    // this.x1 = 5
    // this.x2 = 8

    this.x1 = Number(this.x1.toFixed(2));
    this.x2 = Number(this.x2.toFixed(2));
    if (this.x2 != 0 && this.x1 != 0 && d > 0) {
      this.plano();
    }
    // this.canvas = document.querySelector("#lienzo2");
    // var ctx = this.canvas.getContext("2d");
    // ctx.beginPath();
    // ctx.lineWidht = 6;
    // ctx.strokeStyle = "#001f33";
    // ctx.beginPath();
    // ctx.moveTo(this.x1.value, this.canvas.width / 2);
    // ctx.quadraticCurveTo(this.canvas.height / 2, this.C, this.x2.value, this.canvas.width / 2);
    // ctx.stroke();
  }
  plano() {
    this.canvas = document.querySelector("#lienzo");
    var ctx = this.canvas.getContext("2d");
    
    // var centroX = this.canvas.width / 2;
    // var centroY = this.canvas.height / 2;

    // Dibujar el plano carteciano para ver
    // el efecto scale sobre las coordenadas


    ctx.beginPath();
    for (let i = 0; i < this.canvas.height; i += 10) {
      ctx.moveTo(0, i + 10);
      ctx.strokeStyle = "#9c9c9c";
      ctx.lineTo(this.canvas.width, i + 10);
      ctx.stroke();
    }
    for (let t = 0; t < this.canvas.width; t += 10) {
      ctx.moveTo(t + 10, 0);
      ctx.strokeStyle = "#9c9c9c";
      ctx.lineTo(t + 10, this.canvas.height);
      ctx.stroke();
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, this.canvas.height / 2);
    ctx.strokeStyle = "#000";
    ctx.lineTo(this.canvas.width, this.canvas.height / 2);
    ctx.stroke();

    ctx.moveTo(this.canvas.width / 2, 0);
    ctx.strokeStyle = "#000";
    ctx.lineTo(this.canvas.width / 2, this.canvas.height);
    ctx.stroke();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.lineWidht = 6;
    // ctx.beginPath();
    // ctx.moveTo(this.x1, this.canvas.width / 2);
    // ctx.quadraticCurveTo(200, this.C, this.x2, 200);
    // ctx.stroke();


    ctx.beginPath();
    ctx.translate(150, 50);
    ctx.lineWidht = 10;
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(20, this.C + 500, this.x2 + 200, 20);
    ctx.strokeStyle = "green";
    ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(this.x2 + 220, this.C + 180, 5, 0, Math.PI * 2, false);
    // ctx.stroke();



  }


}
