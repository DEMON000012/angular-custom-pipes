import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    output?: 'cel' | 'fah'
  ) {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputValue: number;
    if (inputType === 'cel' && output === 'fah') {
      outputValue = val * (9 / 5) + 32;
    }
    if (inputType === 'fah' && output === 'cel') {
      outputValue = (val - 32) * (5 / 9);
    } else {
      outputValue = val;
    }
    let symbol: ' °C' | ' °F';
    if (!output) {
      symbol = inputType === 'cel' ? ' °C' : ' °F';
    } else {
      symbol = output === 'cel' ? ' °C' : ' °F';
    }
    return `${outputValue.toFixed(2) + symbol}`;
  }
}
