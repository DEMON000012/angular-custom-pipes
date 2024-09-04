import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, TemperaturePipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];
  constructor() {
    this.historicTemperatures.sort((a, b) => (a > b ? -1 : 1));
  }
  onReset(index: number) {
    this.historicTemperatures[index] = 18;
  }
}